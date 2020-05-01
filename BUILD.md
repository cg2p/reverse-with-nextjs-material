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
// running and stopped
docker ps -a

## DevOps


## odo


## ibmcloud dev
