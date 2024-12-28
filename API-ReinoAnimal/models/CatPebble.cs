using System;
using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace api.models {

    [Table("CatPebbles")]
    public class CatPebble:BaseModel {

        [PrimaryKey("Id",false)]
        public long Id {get; set;}
        
        [Column("Description")]
        public string? Description {get;set;}
        
        [Column("Price")]
        public float Price {get; set;}
    }    
}
