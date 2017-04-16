using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace RaidPlan.Api.Controllers
{
    public class TestApiController : Controller
    {
        [Route("test")]
        public Task<IActionResult> GetAsync()
        {
            return Task.FromResult<IActionResult>(Ok("Hello World!"));
        }
    }
}
