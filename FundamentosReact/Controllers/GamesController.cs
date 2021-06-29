using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FundamentosReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        [HttpPost("ListarGames")]
        public string[] ListarGames()
        {
            List<string> games = new List<string>();
            games.Add("Uncharted");
            games.Add("Uncharted 2");
            games.Add("Uncharted 3");
            games.Add("Uncharted 4");
            games.Add("GTA");

            return games.ToArray();
        }
    }
}