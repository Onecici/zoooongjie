#### vue3在容器内运行开发服务器需在package.json配置 --host 0.0.0.0

```json
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "run-p type-check \"build-only {@}\" --",
  },
```



#### 1.项目根目录下创建dockerfile

```dockerfile
# 设置当前容器镜像
FROM node:18.12.0

# 设置项目存放目录
WORKDIR /app

#将当前目录下所有文件复制到WORKDIR目录下
COPY . .

# 安装项目依赖
RUN npm install

# 运行指令
CMD ["npm", "run", "dev"]
```

#### 2.创建.dockerignore

```
node_modules
package-lock.json
.git
.gitignore
```



#### 3.创建docker-compose.yml

```dockerfile
version: '3'
services:
  one: # 定义服务名称 应用场景如：(使用命令 docker-compose up one 指定服务名运行容器)
    build: ./ # dockerfile构建镜像文件的所在目录
    image: my-app # 使用的镜像
    container_name: my-app-container # 自定义容器名称
    ports:
      - "4000:5173" # 本机访问容器的端口:容器所暴露的端口
    volumes: # volumes用于将容器内的目录或文件与主机上的目录或文件进行映射同步
      - "./src:/app/src" # 将当前本机src目录中的文件映射容器中src目录下，当本机src目录中文件发生改动时容器中的文件也会进行同步修改
      
      
# ⚠️注意：
volumes:
	- ".:/app" 
# 这里如果映射的是整个项目的文件的话会导致node_modules也被映射了，这就导致docker容器中优先使用映射的node_modules，这就会导致npm运行时报错 所以不建议这样映射整个项目的文件
	
# 如果非要映射整个项目的文件的话 就指定使用容器内的node_modules
volumes:
	- "/app/node_modules" 
```

##### 最后运行 docker-compose up 即可启动开发服务器

