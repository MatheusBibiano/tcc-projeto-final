using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controlles
{
    [Route("[controller]/[action]")]
    [ApiController]

    public class AlunoController : ControllerBase
    {
        private BDContexto contexto;

        public AlunoController(BDContexto bdContexto)
        {
            contexto = bdContexto;
        }

        [HttpGet]
        public Object GetStudent(int idPessoa)
        {
            return (from pessoa in this.contexto.Pessoas
                    join aluno in this.contexto.Alunos on pessoa.IdPessoa equals aluno.FkPessoa
                    where pessoa.IdPessoa == idPessoa
                    select new { nome = pessoa.Nome, sobrenome = pessoa.Sobrenome, ra = aluno.Ra });
        }
    }
}