using api.interfaces;
using api.models;
using Supabase;

namespace api.services {
    public class DogCenterRepository : IRepository<DogCenterProduct>
    {
        private readonly Client _supaBaseClient; 
        public DogCenterRepository(Client supaBaseClient) {
            _supaBaseClient = supaBaseClient;
        }

        public async Task<DogCenterProduct?> AddAsync(DogCenterProduct entity)
        {
            return (await _supaBaseClient.From<DogCenterProduct>().Insert(entity)).Model;
        }

        public async Task DeleteAsync(int id)
        {
            await _supaBaseClient.From<DogCenterProduct>().Where(entity => entity.Id == id).Delete();
        }

        public async Task<IEnumerable<DogCenterProduct>> GetAllAsync()
        {
            return (await _supaBaseClient.From<DogCenterProduct>().Get()).Models;
        }

        public async Task<DogCenterProduct?> GetByIdAsync(int id)
        {
            return (await _supaBaseClient.From<DogCenterProduct>().Where(entity => entity.Id == id).Get()).Model;
        }

        public async Task UpdateAsync(DogCenterProduct entity)
        {
            await _supaBaseClient.From<DogCenterProduct>().Where(dogCenterProduct => dogCenterProduct.Id == entity.Id)
                                                          .Set(dogCenterProduct => dogCenterProduct.Code, entity.Code)
                                                          .Set(dogCenterProduct => dogCenterProduct.Description, entity.Description)
                                                          .Set(dogCenterProduct => dogCenterProduct.Price, entity.Price)
                                                          .Update();
        }
    }
}