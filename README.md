# Full Stack Application

A production-ready full-stack application showcasing modern development practices.

## Tech Stack

### Frontend

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint
- Docker

### Backend

- ASP.NET Core (.NET 8)
- C#
- xUnit for testing
- Swagger/OpenAPI
- Docker

### DevOps

- Docker
- GitHub Actions for CI/CD
- Automated testing
- Containerized deployment

## Project Structure

```
.
├── frontend/              # Next.js frontend application
├── backend/              # ASP.NET Core backend API
│   ├── src/             # Main API project
│   └── tests/           # xUnit test project
└── .github/             # GitHub Actions workflows
```

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- .NET SDK 8.0
- Docker
- Git

### Development Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd full-stack-app
```

2. Start the frontend:

```bash
cd frontend
npm install
npm run dev
```

3. Start the backend:

```bash
cd backend
dotnet restore
cd src/Backend.Api
dotnet run
```

4. Using Docker:

```bash
docker-compose up
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Swagger UI: http://localhost:5000/swagger

## Testing

### Frontend Tests

```bash
cd frontend
npm test
```

### Backend Tests

```bash
cd backend
dotnet test
```

## Environment Variables

### Frontend

Create `.env.development` and `.env.production` files in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend

The backend uses the following environment variables:

```env
ASPNETCORE_ENVIRONMENT=Development
CORS__ORIGINS__0=http://localhost:3000
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests
4. Create a pull request

## License

MIT
