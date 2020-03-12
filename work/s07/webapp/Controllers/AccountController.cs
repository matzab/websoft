using System.Collections.Generic;
using webapp.Models;
using webapp.Services;
using System.Net.Http;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace webapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        public AccountController(JsonFileAccountService accountService)
        {
            AccountService = accountService;
        }

        public JsonFileAccountService AccountService { get; }


        [HttpGet("{id}")]
        public IActionResult  GetProduct(int id)
        {
            var acc = (IEnumerable<Account>)AccountService.GetAccountByID(id);
            if (acc == null)
            {
        
                return NotFound();
            }
            else
            {
                return Ok(acc);
            }
        }
    }
}
