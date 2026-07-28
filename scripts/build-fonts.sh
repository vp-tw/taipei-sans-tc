#!/usr/bin/env bash

set -euo pipefail

package_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages/core" && pwd)"
cd "$package_root"

split_font() {
  local source="$1"
  local output="$2"
  local weight="$3"

  if ! command -v font-splitter >/dev/null 2>&1; then
    echo 'font-splitter is required. Install requirements-fonts.txt first.' >&2
    exit 1
  fi

  font-splitter "src/${source}" \
    --flavor woff2 \
    --chunk 256 \
    --output "dist/${output}" \
    --family "Taipei Sans TC" \
    --weight "$weight"
}

split_font 'TaipeiSansTCBeta-Regular.ttf' 'Regular' 400
split_font 'TaipeiSansTCBeta-Light.ttf' 'Light' 300
split_font 'TaipeiSansTCBeta-Bold.ttf' 'Bold' 700
