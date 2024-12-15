using api.interfaces;
using api.models;
using Supabase;
using Supabase.Postgrest.Models;

namespace api.services {
    class Repository<Product> : IRepository<Product>
    {
        private readonly Client  _supaBaseClient;
        public Repository(Client supaBaseClient){
            _supaBaseClient = supaBaseClient;
        }

        public Task<Product> AddAsync(Product entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(Product id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return (await _supaBaseClient.From<Product>().Get()).Models;
        }

        public Task<Product> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(Product entity)
        {
            throw new NotImplementedException();
        }
    }
}