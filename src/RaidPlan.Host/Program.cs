using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace RaidPlan.Host
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var webHostBuilder = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>();

            using (var host = webHostBuilder.Build())
            {
                host.Run();
            }
        }
    }
}
