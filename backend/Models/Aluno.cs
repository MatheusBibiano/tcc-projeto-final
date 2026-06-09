using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Aluno
    {
        public Aluno()
        {
            AlunoDisciplinas = new HashSet<AlunoDisciplina>();
            Avaliacaos = new HashSet<Avaliacao>();
        }

        public int Ra { get; set; }
        public int? FkPessoa { get; set; }

        public virtual Pessoa? FkPessoaNavigation { get; set; }
        public virtual ICollection<AlunoDisciplina> AlunoDisciplinas { get; set; }
        public virtual ICollection<Avaliacao> Avaliacaos { get; set; }
    }
}
