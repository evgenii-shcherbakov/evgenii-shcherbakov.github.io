#!/usr/bin/env bash

echo Move vercel.json...
mv apps/frontend/vercel.json vercel.json

echo Generate frontend serverless function entrypoint...
npx turbo gen api --args ../apps/frontend/dist/frontend/server/server.mjs .app
