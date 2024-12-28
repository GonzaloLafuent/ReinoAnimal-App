using System;
using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace api.models {

    [Table("VitalCanProducts")]
    public class VitalCanProduct:BaseModel {

        [PrimaryKey("id",false)]
        public long Id {get; set;}
        
        [Column("Code")]
        public string? Code {get;set;}

        [Column("Description")]
        public string? Description {get;set;}
    
        [Column("Price")]
        public float Price {get; set;}
    }    
}
