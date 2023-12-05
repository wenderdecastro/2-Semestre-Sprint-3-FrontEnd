﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace apiweb.eventplus.manha.Domains
{
    [Table(nameof(ComentarioEvento))]
    public class ComentarioEvento
    {
        [Key]
        public Guid IdComentarioEvento { get; set; } = Guid.NewGuid();

        [Column(TypeName ="TEXT")]
        [Required(ErrorMessage ="A descrição é obrigatória")]
        public string? Descricao { get; set; }

        [Column(TypeName ="BIT")]
        [Required(ErrorMessage ="A informação de exibição é obrigatória!")]
        public bool Exibe { get; set; }

        //ref.table Usuario = FK
        [Required(ErrorMessage = "Usuário obrigatório")]
        public Guid IdUsuario { get; set; }

        [ForeignKey(nameof(IdUsuario))]
        public Usuario? Usuario { get; set; }

        //ref.tabela Evento = FK
        [Required(ErrorMessage = "Evento obrigatório")]
        public Guid IdEvento { get; set; }

        [ForeignKey(nameof(IdEvento))]
        public Evento? Evento { get; set; }
    }
}
