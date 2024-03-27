using MongoDB.Bson.Serialization.Attributes;

namespace PeriodicTable.Api.Models;

public class ChemicalElement(string id) : IDocument
{
    [BsonId]
    public string Id { get; init; }
    [BsonElement("name")]
    public string Name { get; set; }
    [BsonElement("short_name")]
    public string ShortName { get; set; }
    public int AtomicNumber { get; set; }
    public int Period { get; set; }
    public int ElectronPerShel { get; set; }
}