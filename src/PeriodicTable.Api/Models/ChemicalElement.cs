using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PeriodicTable.Api.Models;

[BsonIgnoreExtraElements]
public class ChemicalElement() : IDocument
{
    [BsonId]
    public ObjectId Id { get; init; }
    [BsonElement("number")]
    public int AtomicNumber { get; init; }
    [BsonElement("name")]
    public string Name { get; set; }
    [BsonElement("symbol")]
    public string Symbol { get; set; }
    [BsonElement("period")]
    public int Period { get; set; }
    [BsonElement("group")]
    public int Group { get; set; }
    [BsonElement("phase")]
    public string Phase { get; set; }
    [BsonElement("category")]
    public string Category { get; set; }
    [BsonElement("block")]
    public string Block { get; set; }
}