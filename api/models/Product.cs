using System.ComponentModel.DataAnnotations;
using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace api.Models {

    public class Product:BaseModel {

        [Required]
        [PrimaryKey("Id",false)]
        public long Id {get; set;}

        [Required]
        [Column("Code")]
        public string? Description {get; set;} 

        [Required]
        [Column("Description")]
        public string? Brand {get; set;}

        [Required]
        [Column("Price")]
        public float Price {get; set;}
     }    
}
