using GAMBULL_GAMC.UTILITY.Logger;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using VeggiFoodAPI.Models.ViewModels;

namespace VeggiFoodAPI.Logger
{
    public class ExceptionHandler
    {
        private readonly RequestDelegate _next;
        private readonly IHostEnvironment _env;
        private readonly LogHandler _LogHandler;
        public ExceptionHandler(RequestDelegate next,
            IHostEnvironment env)
        {
            _env = env;
            _next = next;
            _LogHandler = new LogHandler();
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var routeData = context.Request.RouteValues;
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                var exceptionDetails = _env.IsDevelopment()
                      ? new ExceptionModel(ex.Message, ex.Data.ToString(), ex.InnerException?.ToString(), ex.StackTrace, routeData["controller"].ToString(), routeData["action"].ToString())
                      : new ExceptionModel(ex.Message, ex.Data.ToString(), ex.InnerException?.ToString(), ex.StackTrace, routeData["controller"].ToString(), routeData["action"].ToString());

                _LogHandler.WriteError(exceptionDetails);



                ///return response
                var response = new ProblemDetails
                {
                    Status = 500,
                    Detail = _env.IsDevelopment() ? ex.StackTrace?.ToString() : null,
                    Title = ex.Message
                };

                context.Response.ContentType = "application/json";
                context.Response.StatusCode = 500;

                var options = new JsonSerializerOptions
                {
                    PropertyNamingPolicy =
                    JsonNamingPolicy.CamelCase
                };

                var json = JsonSerializer.Serialize(response, options);

                await context.Response.WriteAsync(json);
            }
        }
    }
}
