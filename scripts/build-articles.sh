#!/usr/bin/env bash
# Build only explicitly published content; never scan a personal vault.
set -euo pipefail
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
content="${1:-$root/writing}"
out="${2:?Usage: bash scripts/build-articles.sh CONTENT NEW_OUTPUT_DIRECTORY}"
if [[ -e "$out" || -L "$out" ]]; then
  echo "Refusing to overwrite an existing output path: $out" >&2
  exit 1
fi
raco postly --out "$out" build "$content"
test -s "$out/index.html"
test -s "$out/feed.xml"
test -s "$out/sitemap.xml"
