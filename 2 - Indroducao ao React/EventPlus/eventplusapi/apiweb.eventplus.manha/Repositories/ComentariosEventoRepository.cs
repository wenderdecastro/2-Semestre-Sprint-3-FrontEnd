using apiweb.eventplus.manha.Contexts;
using apiweb.eventplus.manha.Domains;
using apiweb.eventplus.manha.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;

namespace apiweb.eventplus.manha.Repositories
{
    public class ComentariosEventoRepository : IComentariosEventoRepository
    {
        private readonly EventContext _eventContext;

        public ComentariosEventoRepository()
        {
            _eventContext = new EventContext();
        }

        public ComentariosEvento BuscarPorId(Guid idUsuario, Guid idEvento)
        {
            try
            {
                return _eventContext.ComentariosEvento
                    .Select(c => new ComentariosEvento
                    {
                        IdComentarioEvento = c.IdComentarioEvento,
                        IdEvento = c.IdEvento,
                        IdUsuario = c.IdUsuario,
                        Descricao = c.Descricao,
                        Exibe = c.Exibe,

                        Usuario = new Usuario
                        {
                            Nome = c.Usuario!.Nome
                        },

                        Evento = new Evento
                        {
                            NomeEvento = c.Evento!.NomeEvento,
                        }

                    }).FirstOrDefault(c => c.IdUsuario == idUsuario && c.IdEvento == idEvento)!;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.InnerException);
                throw;
            }
        }

        public void Cadastrar(ComentariosEvento comentarioEvento)
        {
            try
            {
                _eventContext.ComentariosEvento.Add(comentarioEvento);
                _eventContext.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.InnerException);
            }
        }


        public void Deletar(Guid id)
        {
            try
            {
                ComentariosEvento comentarioEventoBuscado = _eventContext.ComentariosEvento.Find(id)!;

                if (comentarioEventoBuscado != null)
                {
                    _eventContext.ComentariosEvento.Remove(comentarioEventoBuscado);
                }

                _eventContext.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.InnerException);
            }
        }

        public List<ComentariosEvento> Listar()
        {

            try
            {
                return _eventContext.ComentariosEvento.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.InnerException);
                throw;
            }
        }
        public List<ComentariosEvento> ListarIA()
        {

            try
            {
                return _eventContext.ComentariosEvento
                    .Select(c => new ComentariosEvento
                {
                    IdComentarioEvento = c.IdComentarioEvento,
                    IdEvento = c.IdEvento,
                    IdUsuario = c.IdUsuario,
                    Descricao = c.Descricao,
                    Exibe = c.Exibe,

                    Usuario = new Usuario
                    {
                        Nome = c.Usuario!.Nome
                    },

                    Evento = new Evento
                    {
                        NomeEvento = c.Evento!.NomeEvento,
                    }

                }).Where(c => c.Exibe == true).ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.InnerException);
                throw;
            }
        }
        public List<ComentariosEvento> ListarExibe(Guid id)
        {

            try
            {
                return _eventContext.ComentariosEvento
                    .Select(c => new ComentariosEvento
                    {
                        IdComentarioEvento = c.IdComentarioEvento,
                        IdEvento = c.IdEvento,
                        IdUsuario = c.IdUsuario,
                        Descricao = c.Descricao,
                        Exibe = c.Exibe,

                        Usuario = new Usuario
                        {
                            Nome = c.Usuario!.Nome
                        },

                        Evento = new Evento
                        {
                            NomeEvento = c.Evento!.NomeEvento,
                        }

                    }).Where(c => c.Exibe == true && c.IdEvento == id).ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.InnerException);
                throw;
            }
        }

        public List<ComentariosEvento> ListarTodos(Guid id)
        {

            try
            {
                return _eventContext.ComentariosEvento
                    .Select(c => new ComentariosEvento
                    {
                        IdComentarioEvento = c.IdComentarioEvento,
                        IdEvento = c.IdEvento,
                        IdUsuario = c.IdUsuario,
                        Descricao = c.Descricao,
                        Exibe = c.Exibe,

                        Usuario = new Usuario
                        {
                            Nome = c.Usuario!.Nome
                        },

                        Evento = new Evento
                        {
                            NomeEvento = c.Evento!.NomeEvento,
                        }

                    }).Where(c => c.IdEvento == id).ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.InnerException);
                throw;
            }
        }


    }
}