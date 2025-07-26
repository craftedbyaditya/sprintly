#!/bin/bash

# Build the app
echo "Building the app..."
npm run build

# Create or update gh-pages branch
echo "Setting up gh-pages branch..."
git branch -D gh-pages 2>/dev/null || true
git checkout -b gh-pages

# Copy the dist directory contents
echo "Copying build files..."
cp -r dist/* .

# Create a .nojekyll file to prevent GitHub from ignoring files that begin with an underscore
echo "Creating .nojekyll file..."
touch .nojekyll

# Add all files
echo "Staging files for commit..."
git add .

echo "Deployment files are ready!"
echo "To complete deployment:"
echo "1. Commit the changes: git commit -m 'Deploy to GitHub Pages'"
echo "2. Push to GitHub: git push -f origin gh-pages"
echo "3. Switch back to main branch: git checkout main"
