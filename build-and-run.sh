#!/bin/bash

# Build and run script for Next.js portfolio
# Usage: ./build-and-run.sh [port]

set -e

# Default port
PORT=${1:-10001}

echo "🚀 Starting Next.js project build..."

# Install dependencies if not exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Start the project
echo "🌟 Starting project on port $PORT..."
export PORT=$PORT
npm run start