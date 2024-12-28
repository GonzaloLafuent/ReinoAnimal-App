using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Reflection;
using api.interfaces;
using api.models;
using api.services;

namespace Api.Controllers {
    
    [Route("/vitalCan")]
    [ApiController]
    public class VitalCanController : ControllerBase {
        
        private readonly VitalCanRepository _vitalCanRepository;
        public VitalCanController(VitalCanRepository vitalCanRepository){
            _vitalCanRepository = vitalCanRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            try
            {
                var bulkFoodData = await _vitalCanRepository.GetAllAsync();
                return Ok(bulkFoodData);    
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(VitalCanProduct entity){
            try
            {
                await _vitalCanRepository.AddAsync(entity);
                return Ok();        
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }    
}
