#!/usr/bin/env bash
# Serves the project at http://127.0.0.1:8000 (fetch does not work from file://).
set -euo pipefail
cd "$(dirname "$0")/.."
python3 -m http.server 8000 --bind 127.0.0.1
