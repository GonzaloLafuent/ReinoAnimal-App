using api.interfaces;
using api.models;
using api.services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers().AddNewtonsoftJson();

var url = "";
var key = "";

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();

builder.Services.AddSingleton<BulkFoodRepository>();
builder.Services.AddSingleton<CatPebblesRepository>();
builder.Services.AddSingleton<RoyalCanninRepository>();
builder.Services.AddSingleton<VitalCanRepository>();
builder.Services.AddSingleton<DogCenterRepository>();
builder.Services.AddSingleton(supabase);
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers(); 

app.Run();


