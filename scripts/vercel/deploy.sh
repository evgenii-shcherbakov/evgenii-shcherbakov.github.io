#!/usr/bin/env bash

TARGETS=$(echo "$DEPLOYMENT_TARGETS" | jq -r 'keys[]')

npm run deploy:environment

for TARGET in $TARGETS
  do
    VALUE=$(echo "$DEPLOYMENT_TARGETS" | jq -r --arg key "$TARGET" '.[$key]')

    if [ "$VALUE" = "true" ]; then
      echo "$TARGET deployment..."
      npm run deploy:project $TARGET
    fi
  done
