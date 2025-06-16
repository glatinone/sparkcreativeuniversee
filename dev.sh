#!/bin/bash

# Create necessary directories
mkdir -p public
mkdir -p src/components

# Download sample background image if it doesn't exist
if [ ! -f "public/space-bg.jpg" ]; then
  echo "Downloading sample background image..."
  curl -o public/space-bg.jpg https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop
fi

# Start development server
echo "Starting development server..."
npm run dev 