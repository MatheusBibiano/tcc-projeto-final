using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Aula
    {
        public Aula()
        {
            Avaliacaos = new HashSet<Avaliacao>();
        }

        public int IdAula { get; set; }
        public string Tema { get; set; } = null!;
        public DateTime DataMinistrada { get; set; }
        public int? FkDisc { get; set; }

        public virtual Disciplina? FkDiscNavigation { get; set; }
        public virtual ICollection<Avaliacao> Avaliacaos { get; set; }
    }
}
