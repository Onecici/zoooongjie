## 克隆指定分支

 git clone -b 分支名字 仓库地址 

## 查看所有分支

```
git branc



初始化git init的时候默认会有一个master分支  必须先提交过一次文件才能查看分支
```



## 创建分支

```
git branch 分支名字

在一个分支下创建一个新分支的时候 该新分支所有上级分支的文件都可以查看到
```



## 切换分支

```
git checkout 分支名字
```



## 创建分支并自动进入分支

```
git checkout -b 分支名字
```



## 删除分支

```
git branch -D 分支名字



不能删除当前所在分支  如需删除先切换
```



## 合并分支

```
git merge 分支名称



把分支的代码合并到当前所在分支

如果合并分支和当前分支内容相同 合并会提示Already up to date
如果产生冲突 解决完之后需要git add .   git commit -a -m "解决冲突"
```



## 本地分支上传到远程分支

```
git push origin 本地分支:远程分支     如果远程分支没有的话就会自动创建

git push -u origin master 将本地仓库上传到master分支  

origin表示当前所绑定的git远程地址
-u会记录当前远程git仓库地址和分支 下次可以直接使用git push直接提交到这个地址分支上了
```

### 将远程指定分支 拉取到 本地指定分支上

![](E:\前端\Git\整理过的\assage\解决冲突问题.png)

```
git pull origin "远程分支名":"本地分支名"

如果产生冲突 解决完之后需要git add .   git commit -a -m "解决冲突"
```



## 真实开发场景

**master** 主分支 不要在这个分支写代码，一般这个分支是需要保持干净，用于产品发布

**develop **分支，开发分支，一般情况下也不要在这里提交代码   

**feature** 功能分支，用来开发功能