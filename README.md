## Project App Frow

1. create app
```bash
chmod 755 _create_app.sh
./_create_app.sh
```

2. App launch
```bash
docker-compose up -d
```

3. Access
* http://localhost:3000/

## Refarence
* [【React】Docker Composeで開発環境を構築](https://zenn.dev/chida/articles/51ba4ec06a0724)
## Start App

```bash
yarn start PORT=3000
```

## 📓 note

- Look log
  ```bash 
  docker-compose logs -f
  ```

- Container Access
  ```bash
  docker exec -it beauty-parlor-salon-frontend sh
  ```
