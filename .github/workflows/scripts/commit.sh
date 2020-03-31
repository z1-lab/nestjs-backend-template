#!/bin/bash

git config --local user.email "$(git log -1 --format='%ae' HEAD)"
git config --local user.name "$(git log -1 --format='%an' HEAD)"
git add --all

SHOULD_COMMIT=$(git diff-index --quiet HEAD; echo $?)

if [ ! "$SHOULD_COMMIT" = "0" ]; then
  git commit -m "style: fix autofixable lint issues" -a --no-verify
fi

echo "::set-output name=should_commit::$SHOULD_COMMIT"