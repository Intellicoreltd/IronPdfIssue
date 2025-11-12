FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
#USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081
RUN apt-get update && apt-get install -y \
    libc6-dev \
    libgtk2.0-0 \
    libnss3 \
    libatk-bridge2.0-0 \
    libx11-xcb1 \
    libxcb-dri3-0 \
    libdrm-common \
    libgbm1 \
    libasound2 \
    libappindicator3-1 \
    libxrender1 \
    libfontconfig1 \
    libxshmfence1 \
    libgdiplus \
    libva-dev

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["WebApplication/WebApplication.csproj", "WebApplication/"]
RUN dotnet restore "WebApplication/WebApplication.csproj"
COPY . .
WORKDIR "/src/WebApplication"
RUN dotnet build "./WebApplication.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./WebApplication.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WebApplication.dll"]
