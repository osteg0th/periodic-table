using System.Net;
using Microsoft.AspNetCore.Diagnostics;
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
    // app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseExceptionHandler(appError =>
{
    appError.Run(async context =>
    {
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        context.Response.ContentType = "application/json";

        var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
        if (contextFeature is not null)
        {
            await context.Response.WriteAsJsonAsync(new
            {
                StatusCode = context.Response.StatusCode,
                Message = "Something go wrong."
            });
        }
    });
});

app.MapGet("/elements", async (IChemicalElementsService chemicalElementsService) =>
{
    var result = await chemicalElementsService.GetAsync();
    return result;
}).WithOpenApi();
app.MapGet("/elements/{id:int}", async (int id, IChemicalElementsService chemicalElementsService) =>
{
    var result = await chemicalElementsService.GetAsync();
    return result;
}).WithOpenApi();

app.Run();