#!/usr/bin/env bash

set -euo pipefail

pnpm build:fonts
pnpm build:site
