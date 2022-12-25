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

## AWS Deploy

ref: [Deploy a React-based single-page application to Amazon S3 and CloudFront](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-a-react-based-single-page-application-to-amazon-s3-and-cloudfront.html)

## 📓 note

- Look log
  ```bash 
  docker-compose logs -f
  ```

- Container Access
  ```bash
  docker exec -it beauty-parlor-salon-frontend sh
  ```
