using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EssPortal.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EssPortalAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultController : ControllerBase
    {
        private readonly ILoggerManager logger;

        public DefaultController(ILoggerManager logger)
        {
            this.logger = logger;
        }
        // GET: api/Default
        [HttpGet]
        public IEnumerable<string> Get()
        {
            try
            {
                logger.LogDebug("error get");
                logger.LogError("Hell You have visited the Index view" + Environment.NewLine + DateTime.Now);
               // throw new Exception("sex");
                return new string[] { "value1", "value2" };
            }
            catch (Exception)
            {

                throw;
            }
           
        }

        // GET: api/Default/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Default
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Default/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
