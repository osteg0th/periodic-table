using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PeriodicTable.Api.Models;

namespace PeriodicTable.Api.Services;

public class ChemicalElementsService(
    IMongoCollectionFactory<ChemicalElement> factory,
    IOptions<PeriodicTableDatabaseSettings> options) : IChemicalElementsService
{
    private readonly IMongoCollection<ChemicalElement> _collection =
        factory.CreateAsync(options.Value.ChemicalElementsCollectionName);

    public async Task<List<ChemicalElement>> GetAsync() => await _collection.Find(_ => true).ToListAsync();

    public async Task<ChemicalElement?> GetByIdAsync(string id) =>
        await _collection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task<ChemicalElement?> GetByNameAsync(string name) =>
        await _collection.Find(x => x.Name == name).FirstOrDefaultAsync();
}