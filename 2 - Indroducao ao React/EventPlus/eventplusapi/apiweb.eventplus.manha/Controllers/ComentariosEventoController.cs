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

        private readonly IComentariosEventoRepository _comentarioRepository;
        private readonly IContentModeratorClient _contentModeratorClient;

        public ComentariosEventoController(IComentariosEventoRepository comentarioRepository, IContentModeratorClient contentModeratorClient)
        {
            _comentarioRepository = comentarioRepository;
            _contentModeratorClient = contentModeratorClient;
        }

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

        
        [HttpGet]
        public IActionResult Get()
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
        [HttpGet("GetExibe")]
        public IActionResult GetExibe()
        {
            try
            {
                return Ok(_comentarioRepository.ListarExibe());
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

        [HttpDelete]
        public IActionResult Deletar(Guid IdComentario)
        {
            try
            {
                _comentarioRepository.Deletar(IdComentario);
                return StatusCode(202, "comentario criado");
            }
            catch (Exception error)
            {

                return BadRequest(error);
            }
        }


    }
}
