#!/bin/bash

# Portfolio Build and Run Script
# This script builds the Next.js project and runs it on port 10001

set -e  # Exit on any error

echo "🚀 Starting portfolio build and run process..."

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist or is empty
if [ ! -d "node_modules" ] || [ -z "$(ls -A node_modules 2>/dev/null)" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Clean any previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next

# Build the project (ESLint errors ignored via next.config.ts)
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d ".next" ]; then
    echo "❌ Build failed! .next directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Start the application on port 10001
echo "🌟 Starting the application on port 10001..."
echo "🌐 Your portfolio will be available at: http://localhost:10001"
echo "⏹️  Press Ctrl+C to stop the server"

PORT=10001 npm run start
