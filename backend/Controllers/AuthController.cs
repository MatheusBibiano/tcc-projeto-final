using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controlles
{
    [Route("[controller]/[action]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private BDContexto contexto;

        public AuthController(BDContexto bdContexto)
        {
            contexto = bdContexto;
        }

        [HttpPost]
        public User Authenticate([FromBody] User user)
        {
            User? dados = contexto.Users.FirstOrDefault(p => p.Username == user.Username && p.Password == user.Password);

            return dados!;
        }
    }
}