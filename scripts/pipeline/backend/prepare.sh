#!/usr/bin/env bash

echo Move vercel.json...
mv apps/backend/vercel.json vercel.json

echo Build...
npm run build:backend
