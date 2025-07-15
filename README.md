# Discount for Student Dev

A React TypeScript application for finding student discounts and services.

## Live Demo

This project is deployed on GitHub Pages: [View Live Demo](https://yourusername.github.io/discount-for-student-dev)

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add dist folder and GitHub Pages configuration"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The deployment will automatically trigger when you push to the main branch

3. **Access your site:**
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - Replace `yourusername` with your GitHub username and `repository-name` with your repository name

### Manual Deployment (Alternative):

If you prefer to deploy manually without GitHub Actions:

1. Go to repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select branch: `main` and folder: `/dist`
4. Save the settings

## Development

To run the project locally:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Project Structure

- `src/` - Source code
- `dist/` - Built files (included for GitHub Pages deployment)
- `.github/workflows/` - GitHub Actions workflow for automatic deployment
