using apiweb.eventplus.manha.Domains;
using Microsoft.EntityFrameworkCore;

namespace apiweb.eventplus.manha.Contexts
{
    public class EventContext : DbContext
    {
        public DbSet<TipoUsuario> TipoUsuario { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<TipoEvento> TipoEvento { get; set; }
        public DbSet<Evento> Evento { get; set; }
        public DbSet<ComentariosEvento> ComentariosEvento { get; set; }
        public DbSet<Instituicao> Instituicao { get; set; }
        public DbSet<PresencaEvento> PresencaEvento { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer("Server=NOTE10-S15; Database=event+; User=sa;Pwd=Senai@134;; TrustServerCertificate=true;");
            optionsBuilder.UseSqlServer("Server=tcp:eventpluswender-server.database.windows.net,1433;Initial Catalog=eventpluswender;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;User Id =eventpluswender; Pwd =Senai@134;");
            base.OnConfiguring(optionsBuilder);
        }

    }
}
