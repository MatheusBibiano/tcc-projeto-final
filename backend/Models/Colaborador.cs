using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Colaborador
    {
        public Colaborador()
        {
            Resposta = new HashSet<Resposta>();
        }

        public int IdColab { get; set; }
        public bool Funcao { get; set; }
        public int? FkPessoa { get; set; }
        public int? FkDisc { get; set; }

        public virtual Disciplina? FkDiscNavigation { get; set; }
        public virtual Pessoa? FkPessoaNavigation { get; set; }
        public virtual ICollection<Resposta> Resposta { get; set; }
    }
}
