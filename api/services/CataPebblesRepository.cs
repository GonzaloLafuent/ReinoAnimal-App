using System.Reflection.Metadata;
using api.interfaces;
using api.models;
using Supabase;

namespace api.services {
    class CatPebblesRepository : IRepository<CatPebble>
    {
        private readonly Client  _supaBaseClient;
        public CatPebblesRepository(Client supaBaseClient){
            _supaBaseClient = supaBaseClient;
        }

        public async Task<CatPebble> AddAsync(CatPebble entity)
        {
            return (await _supaBaseClient.From<CatPebble>().Insert(entity)).Model;
        }

        public async Task DeleteAsync(int id)
        {
            await _supaBaseClient.From<CatPebble>().Where(entity => entity.Id == id).Delete();
        }

        public async Task<IEnumerable<CatPebble>> GetAllAsync()
        {
            return (await _supaBaseClient.From<CatPebble>().Get()).Models;
        }

        public async Task<CatPebble> GetByIdAsync(int id)
        {
            return (await _supaBaseClient.From<CatPebble>().Where(entity => entity.Id == id).Get()).Model;
        }

        public async Task UpdateAsync(CatPebble entity)
        {
            await _supaBaseClient.From<CatPebble>().Where(catPebble => catPebble.Id == entity.Id)
                                                   .Set(catPebble => catPebble.Description, entity.Description)
                                                   .Set(catPebble => catPebble.Price,entity.Price)
                                                   .Update();
        }
    }
}