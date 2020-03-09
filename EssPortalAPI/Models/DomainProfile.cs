
using AutoMapper;
using EssPortal.Models;
using EssPortal.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortalAPI.Models
{
    public class DomainProfile: Profile
    {
        //
        public DomainProfile()
        {
            CreateMap<Users, UsersViewModel>().ReverseMap();
        }  
    }
}
