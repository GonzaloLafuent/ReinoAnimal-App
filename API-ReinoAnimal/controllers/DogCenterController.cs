using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Reflection;
using api.interfaces;
using api.models;
using api.services;

namespace Api.Controllers {
    
    [Route("/dogCenter")]
    [ApiController]
    public class DopCenterController : ControllerBase {
        
        private readonly DogCenterRepository _dogCenterRepository;
        public DopCenterController(DogCenterRepository dogCenterRepository){
            _dogCenterRepository = dogCenterRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            try
            {
                var bulkFoodData = await _dogCenterRepository.GetAllAsync();
                return Ok(bulkFoodData);    
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(DogCenterProduct entity){
            try
            {
                await _dogCenterRepository.AddAsync(entity);
                return Ok();        
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }    
}
