# various build tasks

## local dev
```
npm install
npm run build
npm run start
# ready - started server on http://localhost:3000
```

## Docker local
confirm docker
```
docker --version
docker image ls
docker run hello-world
```

build and run app
```
cd reverse-with-nextjs-material
docker build -t reverse-app:1.0 .
```
now prove that we are not running the dev command line version which is the app listening on port 3000
now we are running the container, expose port 3000 of the app running inside the container
and expose it to the local machine via port 3001
```
docker run -p 3001:3000 --detach --name reverse-app reverse-app:1.0
```
test http://localhost:3001

```
docker stop reverse-app
docker start reverse-app
docker stop reverse-app
docker ps -a | grep reverse-app
docker rm [containerid]
```



