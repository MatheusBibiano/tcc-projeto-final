using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class Resposta
    {
        public int IdResp { get; set; }
        public DateTime DataResp { get; set; }
        public string? Conteudo { get; set; }
        public int? FkAval { get; set; }
        public int? FkColab { get; set; }

        public virtual Avaliacao? FkAvalNavigation { get; set; }
        public virtual Colaborador? FkColabNavigation { get; set; }
    }
}
