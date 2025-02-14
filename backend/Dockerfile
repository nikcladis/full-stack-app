FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source

# Copy NuGet config
COPY ["NuGet.config", "NuGet.config"]

# Copy csproj and restore as distinct layers
COPY ["backend.sln", "backend.sln"]
COPY ["src/Backend.Api/Backend.Api.csproj", "src/Backend.Api/"]
COPY ["tests/Backend.Tests/Backend.Tests.csproj", "tests/Backend.Tests/"]
RUN dotnet restore --configfile NuGet.config

# Copy everything else and build
COPY . .
RUN dotnet build -c Release
RUN dotnet test -c Release
RUN dotnet publish "src/Backend.Api/Backend.Api.csproj" -c Release -o /app

# Final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

COPY --from=build /app .

ENV ASPNETCORE_URLS=http://+:80
EXPOSE 80
EXPOSE 443

ENTRYPOINT ["dotnet", "Backend.Api.dll"] 