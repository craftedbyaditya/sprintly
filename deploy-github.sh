#!/bin/bash

# This script automates the process of deploying the Sprintly app to GitHub Pages

# Ensure we're starting from a clean slate
echo "Cleaning up previous builds..."
rm -rf dist

# Build the app with the correct base path for GitHub Pages
echo "Building the app for GitHub Pages deployment..."
npm run build

# Create .nojekyll file to bypass Jekyll processing
echo "Creating .nojekyll file..."
touch dist/.nojekyll

echo "✅ Build completed successfully!"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Commit and push your changes to the main branch"
echo "2. GitHub Actions will automatically deploy to GitHub Pages"
echo ""
echo "Or for manual deployment:"
echo "1. Push the dist folder to the gh-pages branch:"
echo "   git add dist -f"
echo "   git commit -m \"Deploy to GitHub Pages\""
echo "   git subtree push --prefix dist origin gh-pages"
echo ""
echo "Your site will be available at: https://yourusername.github.io/sprintly/"
