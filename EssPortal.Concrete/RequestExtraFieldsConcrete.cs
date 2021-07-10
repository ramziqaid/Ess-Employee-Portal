using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EssPortal.Interface;
using EssPortal.Interfaces;
using EssPortal.Models;
using EssPortal.Repository;
using EssPortal.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace EssPortal.Concrete
{
    public class RequestExtraFieldsConcrete : GenericRepository<RequestExtraField>, IRequestExtraFieldsRepository
    {
       
        public RequestExtraFieldsConcrete(DatabaseContext context) : base(context)
        {
           
        }
    }
}
