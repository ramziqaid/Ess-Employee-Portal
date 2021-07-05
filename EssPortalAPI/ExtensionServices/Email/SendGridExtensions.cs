using System;
using EssPortalAPI.Services;
using Microsoft.Extensions.DependencyInjection;
 

namespace EssPortalAPI.Email
{
    public static class SendGridExtensions
    {
        public static IServiceCollection AddSendGridEmailSender(this IServiceCollection services) 
        {
            services.AddTransient<IEmailSender, SendGridEmailSender>();

            return services;
         }
    }
}
