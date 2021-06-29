using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FundamentosReact.Controllers
{
    /* Notaciones */
    [Route("api/[controller]")]
    [ApiController]
    public class CursoController : ControllerBase
    {
        [HttpGet("Listar")] // [HttpPost] 
        public string[] Listar()
        {
            List<string> alumnos = new List<string>();
            alumnos.Add("Jairo");
            alumnos.Add("Jesús");
            alumnos.Add("Johan");

            return alumnos.ToArray();
        }
    }
}