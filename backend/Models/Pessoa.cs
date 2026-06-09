using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Pessoa
    {
        public Pessoa()
        {
            Alunos = new HashSet<Aluno>();
            Colaboradors = new HashSet<Colaborador>();
            Users = new HashSet<User>();
        }

        public int IdPessoa { get; set; }
        public string Cpf { get; set; } = null!;
        public string Nome { get; set; } = null!;
        public string Sobrenome { get; set; } = null!;
        public string Email { get; set; } = null!;

        public virtual ICollection<Aluno> Alunos { get; set; }
        public virtual ICollection<Colaborador> Colaboradors { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
