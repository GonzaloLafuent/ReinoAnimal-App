using System.Reflection.Metadata;
using api.interfaces;
using api.models;
using Supabase;

namespace api.services {
    public class RoyalCanninRepository : IRepository<RoyalCanninProduct>
    {
        private readonly Client _supabaseClient;
        public RoyalCanninRepository(Client supabaseClient){
            _supabaseClient = supabaseClient;
        }

        public async Task<RoyalCanninProduct?> AddAsync(RoyalCanninProduct entity)
        {
            return (await _supabaseClient.From<RoyalCanninProduct>().Insert(entity)).Model;
        }

        public async Task DeleteAsync(int id)
        {
            await _supabaseClient.From<RoyalCanninProduct>().Where(entity => entity.Id == id).Delete();
        }

        public async Task<IEnumerable<RoyalCanninProduct>> GetAllAsync()
        {
            return (await _supabaseClient.From<RoyalCanninProduct>().Get()).Models;
        }

        public async Task<RoyalCanninProduct?> GetByIdAsync(int id)
        {
            return (await _supabaseClient.From<RoyalCanninProduct>().Where(entity => entity.Id == id).Get()).Model;
        }

        public async Task UpdateAsync(RoyalCanninProduct entity)
        {
            await _supabaseClient.From<RoyalCanninProduct>().Where(royalCanninProduct => royalCanninProduct.Id == entity.Id)
                                                            .Set(royalCanninProduct => royalCanninProduct.Code, entity.Code)
                                                            .Set(royalCanninProduct => royalCanninProduct.Description, entity.Description)
                                                            .Set(royalCanninProduct => royalCanninProduct.Price, entity.Price)
                                                            .Update();
        }
    }
}