#!/bin/sh

# docker cmd create app
docker compose build
docker compose run --rm frontend sh -c "yarn global add create-react-app && create-react-app app --template typescript"
