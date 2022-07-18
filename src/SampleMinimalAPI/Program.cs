var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/sampleapi", () => "Hello World!");

app.Run();
