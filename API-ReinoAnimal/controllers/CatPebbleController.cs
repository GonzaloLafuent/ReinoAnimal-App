using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Reflection;
using api.interfaces;
using api.models;
using api.services;

namespace Api.Controllers {
    
    [Route("/catPebble")]
    [ApiController]
    public class CatPebbleController : ControllerBase {
        
        private readonly CatPebblesRepository _catPebblesRepository;
        public CatPebbleController(CatPebblesRepository catPebblesRepository){
            _catPebblesRepository = catPebblesRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            try
            {
                var catPebbles = await _catPebblesRepository.GetAllAsync();
                return Ok(catPebbles);    
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(CatPebble entity){
            try
            {
                await _catPebblesRepository.AddAsync(entity);
                return Ok();        
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }    
}
