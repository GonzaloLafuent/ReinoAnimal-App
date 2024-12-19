using System;
using api.services;
using Supabase.Postgrest.Attributes;
using Supabase.Postgrest.Models;

namespace api.models {

    [Table("BulkFood")]
    public class BulkFood:BaseModel {

        [PrimaryKey("id",false)]
        public long Id {get; set;}
        
        [Column("Description")]
        public string? Description {get;set;}
        
        [Column("Brand")]
        public string? Brand {get;set;}
        
        [Column("Category")]
        public string? Category {get;set;}

        [Column("Price")]
        public float Price {get; set;}
    }    
}
