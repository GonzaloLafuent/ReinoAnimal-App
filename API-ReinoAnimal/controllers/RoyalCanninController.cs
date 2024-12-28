using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Reflection;
using api.interfaces;
using api.models;
using api.services;

namespace Api.Controllers {
    
    [Route("/royalCannin")]
    [ApiController]
    public class RoyalCanninController : ControllerBase {
        
        private readonly RoyalCanninRepository _royalCanninRepository;
        public RoyalCanninController(RoyalCanninRepository royalCanninRepository){
            _royalCanninRepository = royalCanninRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            try
            {
                var bulkFoodData = await _royalCanninRepository.GetAllAsync();
                return Ok(bulkFoodData);    
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(RoyalCanninProduct entity){
            try
            {
                await _royalCanninRepository.AddAsync(entity);
                return Ok();        
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }    
}
