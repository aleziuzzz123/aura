#!/bin/bash

# Aura Beauty Salon - Deployment Script
echo "🚀 Deploying Aura Beauty Salon to Netlify..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Netlify (if Netlify CLI is installed)
    if command -v netlify &> /dev/null; then
        echo "🌐 Deploying to Netlify..."
        netlify deploy --prod --dir=dist
    else
        echo "⚠️  Netlify CLI not found. Please:"
        echo "   1. Install Netlify CLI: npm install -g netlify-cli"
        echo "   2. Run: netlify login"
        echo "   3. Run: netlify deploy --prod --dir=dist"
        echo ""
        echo "📁 Build files are ready in the 'dist' folder"
        echo "   You can manually drag and drop the 'dist' folder to Netlify"
    fi
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

echo "🎉 Deployment process completed!"



