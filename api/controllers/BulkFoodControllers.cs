using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System.Reflection;

namespace Api.Controllers {
    
    [Route("/bulkFood")]
    [ApiController]
    public class UnpackedFoodController : ControllerBase {
        
        public UnpackedFoodController(){
            _
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            
            }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] UnpackedFoodDto unpackedFoodDto){
            
        }
    }    
}
