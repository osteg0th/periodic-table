using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PeriodicTable.Api.Models;

namespace PeriodicTable.Api.Services;

public class MongoCollectionFactory<TDocument>(IMongoClient mongoClient, IOptions<PeriodicTableDatabaseSettings> options)
    : IMongoCollectionFactory<TDocument>
    where TDocument : class, IDocument
{
    public IMongoCollection<TDocument> CreateAsync(string collectionName)
    {
        var database = mongoClient.GetDatabase(options.Value.DatabaseName);
        var collection = database.GetCollection<TDocument>(collectionName);
        return collection;
    }
}