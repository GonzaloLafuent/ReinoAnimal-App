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

        public Task<CatPebble> AddAsync(CatPebble entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(CatPebble id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<CatPebble>> GetAllAsync()
        {
            return (await _supaBaseClient.From<CatPebble>().Get()).Models;
        }

        public Task<CatPebble> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(CatPebble entity)
        {
            throw new NotImplementedException();
        }
    }
}