#!/usr/bin/env bash

ENV_VARIABLES_CONFIG=$(<env-variables.json)

DIRS=("BACKEND" "ADMIN" "FRONTEND")

for DIR in "${DIRS[@]}"
  do
    ARRAY=($(echo "$ENV_VARIABLES_CONFIG" | jq -r --arg key "$DIR" '.[$key][]'))

    for VARIABLE in "${ARRAY[@]}"
      do
        echo "TARGET_$VARIABLE=production,preview,development" >> "$GITHUB_ENV"
        echo "TYPE_$VARIABLE=encrypted" >> "$GITHUB_ENV"
      done

    ENV_VARIABLES=$(printf "%s," "${ARRAY[@]}")
    echo "${DIR}_ENV_VARIABLES=${ENV_VARIABLES%,}" >> "$GITHUB_ENV"
  done
