
using Supabase.Postgrest.Models;

namespace api.interfaces {
    public interface IRepository<T> 
    {
        /// <summary>
        /// Retrieves all entities.
        /// </summary>
        /// <returns>A list of all entities.</returns>
        Task<IEnumerable<T>> GetAllAsync();

        /// <summary>
        /// Retrieves a single entity by its primary key.
        /// </summary>
        /// <param name="id">The primary key of the entity.</param>
        /// <returns>The entity if found, otherwise null.</returns>
        Task<T> GetByIdAsync(int id);

        /// <summary>
        /// Adds a new entity to the repository.
        /// </summary>
        /// <param name="entity">The entity to add.</param>
        /// <returns>The added entity.</returns>
        Task<T> AddAsync(T entity);

        /// <summary>
        /// Updates an existing entity in the repository.
        /// </summary>
        /// <param name="entity">The entity to update.</param>
        Task UpdateAsync(T entity);

        /// <summary>
        /// Deletes an entity from the repository by its primary key.
        /// </summary>
        /// <param name="id">The primary key of the entity to delete.</param>
        Task DeleteAsync(int id);
    }
}
