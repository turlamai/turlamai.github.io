#!/usr/bin/env bash
set -euo pipefail

generated="${1:?Usage: bash scripts/assemble-portal.sh GENERATED_ARTICLES NEW_PORTAL_DIRECTORY}"
stage="${2:?Provide a new portal directory}"
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

test -s "$generated/index.html"
test -s "$generated/feed.xml"
mkdir "$stage"
git -C "$root" archive HEAD | tar -x -C "$stage"
rm -r "$stage/articles"
cp -R "$generated" "$stage/articles"
rm -r "$stage/.github" "$stage/writing"

test -s "$stage/index.html"
test -s "$stage/articles/static/style.css"
test "$(cat "$stage/CNAME")" = jrtx.site
