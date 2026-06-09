using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controlles
{
    [Route("[controller]/[action]")]
    [ApiController]

    public class ColaboradorController : ControllerBase
    {
        private BDContexto contexto;

        public ColaboradorController(BDContexto bdContexto)
        {
            contexto = bdContexto;
        }

        [HttpGet]
        public Object GetDashboardColabData(int idPessoa)
        {
            var result = (from pessoa in this.contexto.Pessoas
                          join colaborador in this.contexto.Colaboradors on pessoa.IdPessoa equals colaborador.FkPessoa
                          join disc in this.contexto.Disciplinas on colaborador.FkDisc equals disc.IdDisc
                          where pessoa.IdPessoa == idPessoa
                          select new { nome = pessoa.Nome, sobrenome = pessoa.Sobrenome, discNome = disc.Nome, discId = disc.IdDisc });

            foreach (var colabData in result)
            {
                return colabData;
            }

            return result;
        }
    }
}