using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Disciplina
    {
        public Disciplina()
        {
            AlunoDisciplinas = new HashSet<AlunoDisciplina>();
            Aulas = new HashSet<Aula>();
            Colaboradors = new HashSet<Colaborador>();
        }

        public int IdDisc { get; set; }
        public string Nome { get; set; } = null!;

        public virtual ICollection<AlunoDisciplina> AlunoDisciplinas { get; set; }
        public virtual ICollection<Aula> Aulas { get; set; }
        public virtual ICollection<Colaborador> Colaboradors { get; set; }
    }
}
