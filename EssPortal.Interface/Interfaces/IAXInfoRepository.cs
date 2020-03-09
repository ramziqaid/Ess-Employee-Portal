

using EssPortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EssPortal.Interfaces
{
    public interface IAXInfoRepository  
    {
        Task<List<dynamic>> GetProductGroups();
        Task<List<dynamic>> GetProducts();
        Task<List<dynamic>> GetProjects();
        Task<List<dynamic>> GetClient();
        Task<List<dynamic>> GetVends();
    }

}
