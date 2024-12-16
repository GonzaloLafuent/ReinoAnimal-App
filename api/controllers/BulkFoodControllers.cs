using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Reflection;
using api.interfaces;
using api.models;
using api.services;

namespace Api.Controllers {
    
    [Route("/bulkFood")]
    [ApiController]
    public class BulkFoodController : ControllerBase {
        
        private readonly BulkFoodRepository _bulkFoodRepository;
        public BulkFoodController(BulkFoodRepository bulkFoodRepository){
            _bulkFoodRepository = bulkFoodRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            try
            {
                var bulkFoodData = await _bulkFoodRepository.GetAllAsync();
                return Ok(bulkFoodData);    
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(BulkFood entity){
            try
            {
                await _bulkFoodRepository.AddAsync(entity);
                return Ok();        
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }    
}
