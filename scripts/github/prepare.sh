#!/usr/bin/env bash

echo Build for Github Pages...
cd apps/frontend
ng build --configuration production --base-href $GITHUB_BASE_URL
cd ../..
