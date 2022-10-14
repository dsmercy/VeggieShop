using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using NuGet.Common;
using System.Net.Mime;
using VeggiFoodAPI.Data;
using VeggiFoodAPI.Extentions;
using VeggiFoodAPI.Models;
using VeggiFoodAPI.Models.DTOs;
using VeggiFoodAPI.Models.ViewModels;
using VeggiFoodAPI.RequestHelpers;
using VeggiFoodAPI.Services;

namespace VeggiFoodAPI.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;
        private readonly TokenService _tokenService;
        ResponseModel responseModel = new ResponseModel();

        public AccountController(UserManager<ApplicationUser> userManager, ApplicationDbContext context, TokenService tokenService)
        {
            _userManager = userManager;
            _context = context;
            _tokenService = tokenService;
        }

        [HttpGet("allusers")]
        public ActionResult<List<UserDetails>> GetAllUsers()
        {
            var data = from role in _context.Roles
                   join userRole in _context.UserRoles on role.Id equals userRole.RoleId
                   join user in _context.Users on userRole.UserId equals user.Id
                   select new UserDetails
                   {
                       Email = user.Email,
                       Username = user.UserName,
                       Role = role.Name,
                       Address = user.Address,
                   };
            return Ok(data);
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] RegisterModel register)
        {
            //throw new Exception("The student cannot be found.");
            responseModel.Errors = new List<string>();
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = register.Username, Email = register.Email };

                var result = await _userManager.CreateAsync(user, register.Password);

                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, "member");
                    responseModel.Success = true;
                    responseModel.Data = "User registered successfully";
                    return Ok(responseModel);
                }
                
                foreach (var error in result.Errors)
                {
                    responseModel.Errors.Add(error.Description);
                }
                responseModel.Success = false;
                return Conflict(responseModel);
            }
            responseModel.Success = false;
            responseModel.Errors.AddRange(ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)));
            return BadRequest(responseModel);
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDetails>> Login([FromBody] LoginModel loginDto)
        {
            if (ModelState.IsValid)
            {
                var currentUser = await _userManager.FindByNameAsync(loginDto.Username);

                if (currentUser == null || !await _userManager.CheckPasswordAsync(currentUser, loginDto.Password))
                    return Unauthorized();

                string token = await _tokenService.GenerateToken(currentUser);

                var userDetails = from role in _context.Roles
                                  join userRole in _context.UserRoles on role.Id equals userRole.RoleId
                                  where userRole.UserId == currentUser.Id
                                  select new UserDetails
                                  {
                                      Email = currentUser.Email,
                                      Username = currentUser.UserName,
                                      Role = role.Name,
                                      Token = token
                                  };

                return Ok(userDetails.FirstOrDefault());
            }
            return BadRequest(ModelState);
        }

    }
}
