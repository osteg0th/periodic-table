using MongoDB.Driver;
using PeriodicTable.Api.Models;
using PeriodicTable.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<PeriodicTableDatabaseSettings>(
    builder.Configuration.GetSection("ChemicalElementsDatabase"));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<IMongoClient>(sp =>
{
    var connectionString = builder.Configuration["ChemicalElementsDatabase:ConnectionString"];
    return new MongoClient(connectionString);
});
builder.Services.AddSingleton(typeof(IMongoCollectionFactory<>),
    typeof(MongoCollectionFactory<>));
builder.Services.AddScoped<IChemicalElementsService, ChemicalElementsService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/chemical", async (IChemicalElementsService chemicalElementsService) =>
{
    var result = await chemicalElementsService.GetAsync();
    return result;
}).WithOpenApi();

app.Run();