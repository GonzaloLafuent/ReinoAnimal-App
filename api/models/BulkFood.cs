using System.ComponentModel.DataAnnotations;
using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace api.Models {

    [Table("User")]
    public class BulkFood:BaseModel {

        [Required]
        [PrimaryKey("Id",false)]
        public long Id {get; set;}

        [Required]
        [Column("Description")]
        public string? Description {get; set;} 

        [Required]
        [Column("Brand")]
        public string? Brand {get; set;}

        [Required]
        [Column("Category")]
        public string? Category {get; set;}

        [Required]
        [Column("Price")]
        public float Price {get; set;}

     }    
}
