using MongoDB.Driver;
using PeriodicTable.Api.Models;

namespace PeriodicTable.Api.Services;

public interface IMongoCollectionFactory<TDocument> where TDocument: class, IDocument
{
    IMongoCollection<TDocument> CreateAsync(string collectionName);
}