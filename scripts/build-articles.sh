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
raco postly build "$content" --out "$out"
for file in index.html blog/index.html static/style.css feed.xml sitemap.xml; do
  if [[ ! -s "$out/$file" ]]; then
    echo "Missing or empty build output: $out/$file" >&2
    exit 1
  fi
done
