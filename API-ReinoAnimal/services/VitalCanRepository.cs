using System.Reflection.Metadata;
using api.interfaces;
using api.models;
using Supabase;

namespace api.services {
    public class VitalCanRepository :IRepository<VitalCanProduct>
    {
        private readonly Client _supaBaseClient; 
        public VitalCanRepository(Client supaBaseClient) {
            _supaBaseClient = supaBaseClient;
        }

        public async Task<VitalCanProduct?> AddAsync(VitalCanProduct entity)
        {
            return (await _supaBaseClient.From<VitalCanProduct>().Insert(entity)).Model;
        }

        public async Task DeleteAsync(int id)
        {
            await _supaBaseClient.From<VitalCanProduct>().Where(entity => entity.Id == id).Delete();
        }

        public async Task<IEnumerable<VitalCanProduct>> GetAllAsync()
        {
            return (await _supaBaseClient.From<VitalCanProduct>().Get()).Models;
        }

        public async Task<VitalCanProduct?> GetByIdAsync(int id)
        {
            return (await _supaBaseClient.From<VitalCanProduct>().Where(entity => entity.Id == id).Get()).Model;
        }

        public async Task UpdateAsync(VitalCanProduct entity)
        {
            await _supaBaseClient.From<VitalCanProduct>().Where(vitalCanProduct => vitalCanProduct.Id == entity.Id)
                                                            .Set(vitalCanProduct => vitalCanProduct.Code, entity.Code)
                                                            .Set(vitalCanProduct => vitalCanProduct.Description, entity.Description)
                                                            .Set(vitalCanProduct => vitalCanProduct.Price, entity.Price)
                                                            .Update();
        }
    }    
}