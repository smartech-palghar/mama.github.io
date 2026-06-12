#!/bin/bash

old="$1"
new="$2"

if [ -z "$old" ] || [ -z "$new" ]; then
    echo "Usage: $0 old_filename new_filename"
    exit 1
fi

# Rename files
find . -type f -name "$old" -execdir mv {} "$new" \;

# Update references in source files
find . -type f \( \
    -name "*.html" -o \
    -name "*.css"  -o \
    -name "*.js"   -o \
    -name "*.php"  -o \
    -name "*.jsx"  -o \
    -name "*.tsx"  -o \
    -name "*.ts"   \
\) -exec sed -i "s|$old|$new|g" {} +

echo "Done."
