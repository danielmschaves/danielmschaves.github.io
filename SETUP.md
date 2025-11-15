# Setup Instructions

## Initial Setup

1. **Install Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Copy Images**
   The images from the root `/images` folder need to be accessible. Since Next.js serves static files from the `public` folder, you have two options:

   **Option A: Copy images to public folder (Recommended)**
   ```bash
   # On Windows PowerShell
   Copy-Item -Path "images\*" -Destination "public\images\" -Recurse
   
   # On Linux/Mac
   cp -r images/* public/images/
   ```

   **Option B: Create a symlink**
   ```bash
   # On Windows (as Administrator)
   mklink /D public\images images
   
   # On Linux/Mac
   ln -s ../images public/images
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## Image Optimization

The current setup uses unoptimized images for static export. If you want to optimize images:

1. Remove `unoptimized: true` from `next.config.js`
2. Ensure images are in the `public/images` folder
3. Note: Image optimization requires a Node.js server, so for static export, images remain unoptimized

## Deployment

### GitHub Pages (Automatic)

The repository is configured with GitHub Actions to automatically deploy on push to `main` branch.

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

### Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. The `out/` folder contains all static files

3. Deploy the `out/` folder contents to your hosting provider

## Troubleshooting

### Images not loading
- Ensure images are in `public/images/` folder
- Check image paths in `data/projects.json` start with `/images/`
- Clear browser cache

### Build errors
- Ensure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 18+)
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### GitHub Pages not updating
- Check GitHub Actions workflow status
- Ensure GitHub Pages is enabled in repository settings
- Verify the workflow file is in `.github/workflows/deploy.yml`

