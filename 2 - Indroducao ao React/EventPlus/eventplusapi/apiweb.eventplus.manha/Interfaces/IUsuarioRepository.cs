using apiweb.eventplus.manha.Domains;

namespace apiweb.eventplus.manha.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);
        Usuario BuscarPorId(Guid id);
        List<Usuario> Listar();

        Usuario BuscarPorEmailSenha(string email, string senha);
    }
}
