﻿using Microsoft.AspNetCore.Mvc;

namespace RaidPlan.Host.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
