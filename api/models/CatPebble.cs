using System;
using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace api.models {

    [Table("CatPebbles")]
    public class CatPebble:BaseModel {

        [PrimaryKey("id",false)]
        public long Id {get; set;}
        
        [Column("email")]
        public string Email {get;set;} = null!;
        
        [Column("name")]
        public string Name {get; set;} = null!;
    }    
}
