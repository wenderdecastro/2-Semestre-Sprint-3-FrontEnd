using apiweb.eventplus.manha.Domains;
using apiweb.eventplus.manha.Interfaces;
using apiweb.eventplus.manha.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace apiweb.eventplus.manha.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentariosEventoController : ControllerBase
    {

        private readonly ContentModeratorClient _contentModeratorClient;

        public ComentariosEventoController(ContentModeratorClient contentModeratorClient)
        {
            _contentModeratorClient = contentModeratorClient;
        }

        ComentariosEventoRepository _comentarioRepository = new ComentariosEventoRepository();

        [HttpPost("ComentarioIA")]
        public async Task<IActionResult> PostIA(ComentariosEvento novoComentario)
        {
            try
            {
                if (novoComentario.Descricao.IsNullOrEmpty())
                {
                    return BadRequest("A descrição do comentário está nula ou vazia.");
                }

                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(novoComentario.Descricao));

                var moderationResult = await _contentModeratorClient.TextModeration
                    .ScreenTextAsync("text/plain", stream, "por", false, false, null, true);
                    
                if(moderationResult.Terms != null)
                {
                    novoComentario.Exibe = false;

                    _comentarioRepository.Cadastrar(novoComentario);
                }
                else
                {
                    novoComentario.Exibe = true;
                    _comentarioRepository.Cadastrar(novoComentario);

                }
                return StatusCode(201, "");

            }
            catch (Exception error)
            {
                Console.Error.WriteLine(error);
                return StatusCode(400, "Requisição inválida");
            }
        }

        
        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_comentarioRepository.Listar());
            }
            catch (Exception error)
            {

                return BadRequest(error);
            }
        }
        [HttpGet("GetIA")]
        public IActionResult GetIA(Guid id)
        {
            try
            {
                return Ok(_comentarioRepository.ListarIA());
            }
            catch (Exception error)
            {

                return BadRequest(error);
            }
        }

        [HttpGet("GetExibe/{id}")]
        public IActionResult GetExibe(Guid id)
        {
            try
            {
                return Ok(_comentarioRepository.ListarExibe(id));
            }
            catch (Exception error)
            {

                return BadRequest(error);
            }
        }

        [HttpGet("GetAll/{id}")]
        public IActionResult GetAllByEvent(Guid id)
        {
            try
            {
                return Ok(_comentarioRepository.ListarTodos(id));
            }
            catch (Exception error)
            {

                return BadRequest(error);
            }
        }

        [HttpGet("buscarComentarioId")]
        public IActionResult GetByUserId(Guid idUsuario, Guid idEvento)
        {
            try
            {
                return Ok(_comentarioRepository.BuscarPorId(idUsuario, idEvento));
            }
            catch (Exception error)
            {

                return BadRequest(error);
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(ComentariosEvento comentariosEvento)
        {
            try
            {
                _comentarioRepository.Cadastrar(comentariosEvento);
                return StatusCode(202, "comentario criado");
            }
            catch (Exception error)
            {

                return BadRequest(error);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(Guid id)
        {
            try
            {
                _comentarioRepository.Deletar(id);
                return StatusCode(202, "comentario criado");
            }
            catch (Exception error)
            {

                return BadRequest(error);
            }
        }


    }
}
