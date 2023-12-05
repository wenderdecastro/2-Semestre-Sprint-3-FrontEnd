using apiweb.eventplus.manha.Domains;
using apiweb.eventplus.manha.Interfaces;
using apiweb.eventplus.manha.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace apiweb.eventplus.manha.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class TipoUsuarioController : ControllerBase
    {
        private ITipoUsuarioRepository _tipoUsuarioRepository;

        public TipoUsuarioController()
        {
            _tipoUsuarioRepository = new TipoUsuarioRepository();
        }


        [HttpGet]
        [Authorize(Roles = "Administrador")]
        public IActionResult Listar()
        {
            try
            {

                return Ok(_tipoUsuarioRepository.Listar());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Authorize(Roles = "Administrador")]
        public IActionResult Post(TipoUsuario tipoUsuario)
        {
            try
            {
                _tipoUsuarioRepository.Cadastrar(tipoUsuario);

                return StatusCode(201);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrador")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                if (_tipoUsuarioRepository.BuscarPorId(id) == null)
                {
                    return Ok("Tipo de Usuário não existe");
                }
                _tipoUsuarioRepository.Delete(id);
                return StatusCode(204);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("{id}")]
        [Authorize(Roles = "Administrador, Aluno")]
        public IActionResult GetWithId(Guid id)
        {
            try
            {
                return Ok(_tipoUsuarioRepository.BuscarPorId(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{_id}")]
        [Authorize(Roles = "Administrador")]
        public IActionResult Put(Guid _id, TipoUsuario tipoUsuario)
        {
            try
            {
                if (_tipoUsuarioRepository.BuscarPorId(_id) != null)
                {
                    _tipoUsuarioRepository.Atualizar(_id, tipoUsuario);
                    return Ok("Usuario Atualizado");
                }
                return Ok("Usuario não encontrado");

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}

