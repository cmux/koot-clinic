<p align="center">
  <img src="https://raw.githubusercontent.com/cmux/koot-clinic/master/src/assets/logo-blue.svg?sanitize=true" width="438" height="100" />
</p>

# Koot Clinic

专业诊疗机构

## 服务器

-   部署 docker
-   部署 docker

## 线上 docker 环境部署

-   拉取镜像

```
docker pull cmux/koot-clinic:tag

```

-   启动镜像

```
docker run --name koot-clinic -d -p 8080:8080 -p 8081:8081 -v /dockerData/koot-clinic/logs:/koot-clinic/logs  docker.io/cmux/koot-clinic:tag
```

-   注：日志在服务器的

```
cd /dockerData/koot-clinic/logs
```

## 线上数据库 mysql 搭建

-   拉取镜像

```
docker pull mysql
```

-   数据文件夹

```
mkdir -p /dockerData/mysql/data
```

-   执行容器

```
docker run -p 端口:端口 --name mysql -v /dockerData/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=密码 -d --privileged=true mysql:latest

```
