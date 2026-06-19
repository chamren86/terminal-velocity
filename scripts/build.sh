#!/bin/bash
# scripts/build.sh
# Build the extension with proper constants compilation

set -e

echo "🧹 Cleaning..."
rm -rf out

echo "📦 Compiling constants..."
mkdir -p out/constants
cd src/constants
for file in *.ts; do
    echo "  Compiling $file..."
    tsc "$file" --outDir ../../out/constants --module Node16 --target ES2022 --esModuleInterop true --skipLibCheck
done
cd ../..

echo "🔨 Compiling extension..."
tsc --skipLibCheck --esModuleInterop

echo "✅ Build complete!"
echo ""
echo "📁 Output structure:"
find out -name "*.js" | grep -v "node_modules" | sort
