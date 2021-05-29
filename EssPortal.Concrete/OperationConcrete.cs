﻿using System;
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

namespace EssPortal.Concrete
{
    public class OperationConcrete : GenericRepository<operation>, IOperationRepository
    {
       
        public OperationConcrete(DatabaseContext context) : base(context)
        {
           
        }
         
    }
}
