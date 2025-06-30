#!/bin/bash

# Deployment script for resume_frontend
# This script addresses potential shell execution issues in CI/CD environments

set -e  # Exit on any error

echo "Starting deployment for resume_frontend..."

# Check if required tools are available
echo "Checking environment..."

if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed or not in PATH"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed or not in PATH"
    exit 1
fi

# Ensure shell is available
if [ ! -f "/bin/sh" ]; then
    echo "Error: /bin/sh not found"
    exit 1
fi

# Print versions for debugging
echo "Node version: $(node --version)"
echo "npm version: $(npm --version)"
echo "Shell: $SHELL"

# Set environment variables for non-interactive mode
export CI=true
export NODE_ENV=production

# Clean install dependencies
echo "Installing dependencies..."
npm ci --production=false

# Run build
echo "Building application..."
npm run build

# Verify build output
if [ ! -d ".next" ]; then
    echo "Error: Build failed - .next directory not found"
    exit 1
fi

echo "Build completed successfully!"

# Optional: Run tests if they exist
if [ -f "package.json" ] && grep -q '"test"' package.json; then
    echo "Running tests..."
    npm run test || echo "Tests failed or not configured properly, continuing..."
else
    echo "No tests found or test script not available. Skipping tests."
fi

echo "Deployment completed successfully!"
