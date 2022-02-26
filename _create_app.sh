#!/bin/sh

# docker cmd create app
docker compose build
docker compose run --rm front-end sh -c "yarn global add create-react-app && create-react-app app --template typescript"
