# various build tasks

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
docker run -p 3000:3000 --detach --name reverse-app reverse-app:1.0
```
test http://localhost:3000

push to registry
```
docker login
docker push DOCKER_USERNAME/my-custom-app:latest
```

## helm
https://docs.bitnami.com/tutorials/create-your-first-helm-chart

## odo



## DevOps


## ibmcloud dev
