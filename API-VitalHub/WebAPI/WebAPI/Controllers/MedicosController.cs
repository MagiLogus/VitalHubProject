using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using WebAPI.Domains;
using WebAPI.Interfaces;
using WebAPI.Repositories;
using WebAPI.Utils.BlobStorage;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicosController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }
        private IMedicoRepository _medicoRepository;
        public MedicosController()
        {
            _medicoRepository = new MedicoRepository();
            usuarioRepository = new UsuarioRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_medicoRepository.ListarTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorId")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                return Ok(_medicoRepository.BuscarPorId(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] MedicoViewModel medicoModel)
        {
            Usuario user = new Usuario();
            user.Nome = medicoModel.Nome;
            user.Email = medicoModel.Email;
            user.TipoUsuarioId = medicoModel.IdTipoUsuario;
            var containerName = "blobvitalhubcontainer";
            var connectionString = "DefaultEndpointsProtocol=https;AccountName=blobstoragevitalhub;AccountKey=i1aljpnlfG+pyTua8D5XgCbTxKeOAQFqitwhl+0CgpLmT6jBDPso9ACtbfH8f/NifEkt/0bnlLpn+ASt6s4jUw==;EndpointSuffix=core.windows.net";
            user.Foto = await AzureBlobStorageHelper.UploadImageBlobAsync(medicoModel.Arquivo, connectionString, containerName);
            user.Senha = medicoModel.Senha;

            user.Medico = new Medico();
            user.Medico.Crm = medicoModel.Crm;
            user.Medico.EspecialidadeId = medicoModel.EspecialidadeId;


            user.Medico.Endereco = new Endereco();
            user.Medico.Endereco.Logradouro = medicoModel.Logradouro;
            user.Medico.Endereco.Numero = medicoModel.Numero;
            user.Medico.Endereco.Cep = medicoModel.Cep;

            _medicoRepository.Cadastrar(user);

            return Ok();
        }

        [HttpGet("BuscarPorIdClinica")]
        public IActionResult GetByIdClinica(Guid id)
        {
            try
            {
                return Ok(_medicoRepository.ListarPorClinica(id)); ;

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorData")]
        public IActionResult GetByDate(DateTime data, Guid id)
        {
            try
            {
                return Ok(_medicoRepository.BuscarPorData(data, id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //[Authorize]
        [HttpPut]
        public async Task<IActionResult> UpdateProfile(Guid idUsuario, [FromForm] MedicoViewModel medico)
        {
            try
            {
                Usuario usuarioBuscado = usuarioRepository.BuscarPorId(idUsuario);


                if (usuarioBuscado == null)
                {
                    return NotFound();
                }


                var containerName = "blobvitalhubcontainer";
                var connectionString = "DefaultEndpointsProtocol=https;AccountName=blobstoragevitalhub;AccountKey=i1aljpnlfG+pyTua8D5XgCbTxKeOAQFqitwhl+0CgpLmT6jBDPso9ACtbfH8f/NifEkt/0bnlLpn+ASt6s4jUw==;EndpointSuffix=core.windows.net";

                string fotoUrl = await AzureBlobStorageHelper.UploadImageBlobAsync(medico.Arquivo!, connectionString!, containerName!);

                usuarioBuscado.Foto = fotoUrl;

                _medicoRepository.AtualizarPerfil(idUsuario, medico);

                usuarioRepository.AtualizarFoto(idUsuario, fotoUrl);


                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
