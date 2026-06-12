#!/bin/bash

MASTER="$1"

if [ -z "$MASTER" ]; then
    echo "Usage: $0 /path/to/master/file"
    exit 1
fi

if [ ! -f "$MASTER" ]; then
    echo "Error: File not found: $MASTER"
    exit 1
fi

count=0

while IFS= read -r -d '' file
do
    cp -f "$MASTER" "$file"
    echo "✓ $file"
    ((count++))
done < <(
    find . -type f \
        -name "$(basename "$MASTER")" \
        ! -samefile "$MASTER" \
        -print0
)

echo "Total replaced: $count"