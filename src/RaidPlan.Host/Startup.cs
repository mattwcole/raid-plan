using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RaidPlan.Host.AppSettings;

namespace RaidPlan.Host
{
    public class Startup
    {
        private readonly IHostingEnvironment _env;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            _env = env;

            Configuration = builder.Build();
        }

        private IConfigurationRoot Configuration { get; }

        private HostSettings HostSettings => Configuration.GetSection<HostSettings>("Host");

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory
                .AddConsole(Configuration.GetSection("Logging"))
                .AddDebug();

            if (_env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                if (HostSettings.UseWebpackDevMiddleware)
                {
                    app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                    {
                        ProjectPath = Path.GetFullPath(Path.Combine(env.ContentRootPath, "../RaidPlan.App")),
                        HotModuleReplacement = true
                    });
                }
            }

            app
                .UseStatusCodePages()
                .UseStaticFiles()
                .UseMvcWithDefaultRoute();
        }
    }
}
