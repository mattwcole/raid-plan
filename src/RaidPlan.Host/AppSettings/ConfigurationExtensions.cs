using Microsoft.Extensions.Configuration;

namespace RaidPlan.Host.AppSettings
{
    public static class ConfigurationExtensions
    {
        public static T GetSection<T>(this IConfiguration configuration, string key) where T : new()
        {
            var configSection = new T();
            configuration.GetSection(key).Bind(configSection);
            return configSection;
        }
    }
}
