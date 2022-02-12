#!/bin/zsh

docker compose up -d
docker compose exec blog bash
docker compose down
