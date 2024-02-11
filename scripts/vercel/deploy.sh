#!/usr/bin/env bash

TARGETS=$(echo "$DEPLOYMENT_TARGETS" | jq -r 'keys[]')

npm run deploy:environment

for TARGET in $TARGETS
  do
    VALUE=$(echo "$DEPLOYMENT_TARGETS" | jq -r --arg key "$TARGET" '.[$key]')

    if [ "$VALUE" = "true" ]; then
      echo "$TARGET prebuild..."
      PREBUILD_SCRIPT="scripts/vercel/$TARGET/prepare.sh"
      chmod +x $PREBUILD_SCRIPT
      $PREBUILD_SCRIPT

      echo "$TARGET deployment..."
      npm run deploy:project $TARGET
    fi
  done
