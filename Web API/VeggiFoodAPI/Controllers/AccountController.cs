using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Mime;
using VeggiFoodAPI.Data;
using VeggiFoodAPI.Models.DTOs;
using VeggiFoodAPI.Models.ViewModels;
using VeggiFoodAPI.Services;

namespace VeggiFoodAPI.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;
        private readonly TokenService _tokenService;

        public AccountController(UserManager<ApplicationUser> userManager, ApplicationDbContext context, TokenService tokenService)
        {
            _userManager = userManager;
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register([FromBody] RegisterModel register)
        {
            //throw new Exception("The student cannot be found.");
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = register.Username, Email = register.Email };

                var result = await _userManager.CreateAsync(user, register.Password);

                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, "Admin");
                    return Ok("User registered successfully");
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }
                return Conflict(ModelState);
            }

            return BadRequest(ModelState);
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
