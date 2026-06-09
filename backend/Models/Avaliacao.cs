using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Avaliacao
    {
        public Avaliacao()
        {
            Resposta = new HashSet<Resposta>();
        }

        public int IdAval { get; set; }
        public DateTime DataPostagem { get; set; }
        public string? Mensagem { get; set; }
        public sbyte Qualidade { get; set; }
        public int? FkAula { get; set; }
        public int? FkAluno { get; set; }

        public virtual Aluno? FkAlunoNavigation { get; set; }
        public virtual Aula? FkAulaNavigation { get; set; }
        public virtual ICollection<Resposta> Resposta { get; set; }
    }
}
