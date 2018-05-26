#!/bin/bash

set -o errexit # Exit on error

# Build application
NODE_ENV=production npm run build

# Commit & publish to gh-pages
git subtree push --prefix dist lucy gh-pages

