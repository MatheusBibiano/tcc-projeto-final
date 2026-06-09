using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class AlunoDisciplina
    {
        public int IdAlunoDisc { get; set; }
        public int? FkAluno { get; set; }
        public int? FkDisc { get; set; }

        public virtual Aluno? FkAlunoNavigation { get; set; }
        public virtual Disciplina? FkDiscNavigation { get; set; }
    }
}
