using PeriodicTable.Api.Models;

namespace PeriodicTable.Api.Services;

public interface IChemicalElementsService
{
    Task<List<ChemicalElement>> GetAsync();
    Task<ChemicalElement?> GetByIdAsync(string id);
    Task<ChemicalElement?> GetByAtomicNumberAsync(int atomicNumber);
    Task<ChemicalElement?> GetByNameAsync(string name);

}