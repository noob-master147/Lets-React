#!/usr/bin/env bash
git add .
read commitMessage
git commit -m "$commitMessage"
git push origin master