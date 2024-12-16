
using api.interfaces;
using api.models;
using Supabase;

namespace api.services {
    public class BulkFoodRepository : IRepository<BulkFood>
    {
        private readonly Client _supaBaseClient;
        public BulkFoodRepository(Client supaBaseClient){
            _supaBaseClient = supaBaseClient;
        }
        
        public async Task<BulkFood?> AddAsync(BulkFood entity)
        {
            return (await _supaBaseClient.From<BulkFood>().Insert(entity)).Model;
        }

        public async Task DeleteAsync(int id)
        {
            await _supaBaseClient.From<BulkFood>().Where(entity => entity.Id == id).Delete();
        }

        public async Task<IEnumerable<BulkFood>> GetAllAsync()
        {
            return (await _supaBaseClient.From<BulkFood>().Get()).Models;
        }

        public async Task<BulkFood?> GetByIdAsync(int id)
        {
            return (await _supaBaseClient.From<BulkFood>().Where(entity => entity.Id == id).Get()).Model;
        }

        public async Task UpdateAsync(BulkFood entity)
        {
            await _supaBaseClient.From<BulkFood>().Where(bulkFood => bulkFood.Id == entity.Id)
                                                  .Set(bulkFood => bulkFood.Description,entity.Description)
                                                  .Set(bulkFood => bulkFood.Brand,entity.Brand)
                                                  .Set(bulkFood => bulkFood.Category,entity.Category)
                                                  .Set(bulkFood => bulkFood.Price,entity.Price)
                                                  .Update();
        }
    }
}