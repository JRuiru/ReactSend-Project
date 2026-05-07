#!/bin/bash
# Upload email assets to GCS with automatic compression
# Usage: ./scripts/upload-assets.sh                    # all files in assets/
#        ./scripts/upload-assets.sh assets/ring-one.jpg  # single file
#        ./scripts/upload-assets.sh assets/photo.jpg 800 # custom max width

BUCKET="gs://seemyhealth-email-assets"
ASSETS_DIR="assets"
MAX_WIDTH="${3:-560}"   # default 560px (email container width)
QUALITY=75              # JPEG quality
MAX_SIZE_KB=200         # warn if still over 200KB after compression
TEMP_DIR=$(mktemp -d)

compress_and_upload() {
  local FILE="$1"
  local FILENAME=$(basename "$FILE")
  local EXT="${FILENAME##*.}"
  local EXT_LOWER=$(echo "$EXT" | tr '[:upper:]' '[:lower:]')
  local COMPRESSED="$TEMP_DIR/$FILENAME"
  local ORIGINAL_SIZE=$(stat -f%z "$FILE" 2>/dev/null || stat -c%s "$FILE" 2>/dev/null)
  local ORIGINAL_KB=$((ORIGINAL_SIZE / 1024))

  # Only compress image files
  if [[ "$EXT_LOWER" =~ ^(jpg|jpeg|png|gif|webp)$ ]]; then
    # Get current width
    local WIDTH=$(sips -g pixelWidth "$FILE" 2>/dev/null | tail -1 | awk '{print $2}')

    if [ -n "$WIDTH" ] && [ "$WIDTH" -gt "$MAX_WIDTH" ]; then
      echo "  Resizing ${WIDTH}px → ${MAX_WIDTH}px..."
      sips --resampleWidth "$MAX_WIDTH" "$FILE" --out "$COMPRESSED" >/dev/null 2>&1

      # Apply JPEG quality compression
      if [[ "$EXT_LOWER" =~ ^(jpg|jpeg)$ ]]; then
        sips --setProperty formatOptions "$QUALITY" "$COMPRESSED" --out "$COMPRESSED" >/dev/null 2>&1
      fi
    else
      # Already small enough, just copy
      cp "$FILE" "$COMPRESSED"
    fi

    local FINAL_SIZE=$(stat -f%z "$COMPRESSED" 2>/dev/null || stat -c%s "$COMPRESSED" 2>/dev/null)
    local FINAL_KB=$((FINAL_SIZE / 1024))

    echo "  ${ORIGINAL_KB}KB → ${FINAL_KB}KB"

    if [ "$FINAL_KB" -gt "$MAX_SIZE_KB" ]; then
      echo "  ⚠ Still over ${MAX_SIZE_KB}KB — consider a smaller source image"
    fi

    gcloud storage cp "$COMPRESSED" "$BUCKET/$FILENAME" >/dev/null 2>&1
  else
    # Non-image files upload as-is
    gcloud storage cp "$FILE" "$BUCKET/$FILENAME" >/dev/null 2>&1
  fi

  echo "  ✓ https://storage.googleapis.com/seemyhealth-email-assets/$FILENAME"
}

echo ""
echo "Uploading to $BUCKET (max width: ${MAX_WIDTH}px, quality: ${QUALITY}%)"
echo ""

if [ -n "$1" ]; then
  FILE="$1"
  echo "$(basename "$FILE")"
  compress_and_upload "$FILE"
else
  for FILE in "$ASSETS_DIR"/*; do
    [ -f "$FILE" ] || continue
    [[ "$(basename "$FILE")" == .DS_Store ]] && continue
    echo "$(basename "$FILE")"
    compress_and_upload "$FILE"
  done
fi

rm -rf "$TEMP_DIR"
echo ""
echo "Done!"
