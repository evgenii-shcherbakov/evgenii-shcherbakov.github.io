#!/usr/bin/env bash

echo Move vercel.json...
mv apps/frontend/vercel.json vercel.json

echo Build...
npm run build:frontend

#echo Generate frontend serverless function entrypoint...
#npx turbo gen api --args angular-dynamic ../apps/frontend/dist/frontend/server/server.mjs
