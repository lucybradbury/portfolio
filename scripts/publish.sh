#!/bin/bash

set -o errexit # Exit on error

# Commit & publish to gh-pages
git subtree push --prefix dist lucy master

