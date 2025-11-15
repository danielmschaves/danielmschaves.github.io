# Running the Portfolio with Docker

This guide explains how to run the portfolio project using Docker, which is perfect if you don't have Node.js installed locally.

## Prerequisites

- Docker installed on your system
  - Windows: [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - Mac: [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - Linux: [Docker Engine](https://docs.docker.com/engine/install/)

## Quick Start (Development Mode)

1. **Build and run the development container:**
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

2. **Access the application:**
   - Open your browser and go to: http://localhost:3000
   - The development server supports hot reload, so changes to your code will automatically refresh

3. **Stop the container:**
   ```bash
   docker-compose -f docker-compose.dev.yml down
   ```

## Production Mode

1. **Build and run the production container:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Open your browser and go to: http://localhost:3000

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

## Using Docker Commands Directly

### Development Mode

```bash
# Build the image
docker build -f Dockerfile.dev -t portfolio-dev .

# Run the container
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules portfolio-dev
```

### Production Mode

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

## Copying Images

The Docker setup will automatically copy images from the `images/` folder to `public/images/` during the build process. However, if you want to update images without rebuilding:

1. **In development mode:** Images are mounted as a volume, so just update files in the `images/` folder
2. **In production mode:** You'll need to rebuild the container after updating images

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can change it in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Change 3001 to any available port
```

Then access the app at http://localhost:3001

### Container Won't Start

1. **Check if Docker is running:**
   ```bash
   docker ps
   ```

2. **View container logs:**
   ```bash
   docker-compose logs
   ```

3. **Rebuild from scratch:**
   ```bash
   docker-compose down
   docker-compose build --no-cache
   docker-compose up
   ```

### Permission Issues (Linux/Mac)

If you encounter permission issues:

```bash
sudo docker-compose up --build
```

## Updating Content

Since content is stored in JSON files in the `data/` folder:

1. **Development mode:** Changes are reflected immediately (hot reload)
2. **Production mode:** You need to rebuild the container:
   ```bash
   docker-compose down
   docker-compose up --build
   ```

## Building for Static Export

If you want to build a static version for deployment:

```bash
# Run the build command in the container
docker run --rm -v $(pwd):/app -w /app node:20-alpine sh -c "npm ci && npm run build"

# The static files will be in the ./out directory
```

## Environment Variables

You can set environment variables in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Volume Mounts

The docker-compose files include volume mounts for:
- Source code (development mode only)
- Images directory
- Data directory (optional, for easy content updates)

## Next Steps

Once the container is running:
1. Open http://localhost:3000 in your browser
2. Explore the portfolio and resume pages
3. Make changes to content in the `data/` folder (development mode)
4. Rebuild for production when ready to deploy

