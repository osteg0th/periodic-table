namespace PeriodicTable.Api.Models;

public class PeriodicTableDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;
    public string DatabaseName { get; set; } = null!;
    public string ChemicalElementsCollectionName { get; set; } = null!;
}