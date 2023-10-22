### 克隆（下载）远程仓库

```bash
git clone 远程仓库的地址 
```

克隆下来的文件可以在当前目录下使用Git命令工具进行 git push上传文件 git pull更新文件

如果Git上的文件被其他人修改过  自己又要上传修改过的文件上去会产生冲突  要解决这个冲突的话 要先git pull 更新本地文件 然后Git会在vscode中提示选择合并的修改内容

然后再将合并后的内容保存到本地仓库区 再通过git push上传到Git上

### 创建自己的远程仓库

#### 1、已有本地仓库与远程仓库进行关联

第一步：本地仓库和远程仓库建立一个关联关系

```bash
git remote add origin 远程仓库地址
```

第二步：把本地代码推送到远程仓库

```
git push -u origin master
```

#### 2、本地没有仓库的情况下

先需要创建一个本地仓库，然后必须有一个commit才能推送给远程仓库



如果远程仓库设置错误，或者需要重新设置远程仓库

git remote set-url origin远程仓库地址



### 把代码推送到远程仓库

```
git push
```

注意：推送前，确保本地有`commit`



### 拉取本地仓库

把仓库上和本地差异的文件拿下来

```
git pull 
```

git pull 和 git clone 的区别

pull表示获取差异的文件，clone表示整个仓库克隆下来。

一般情况下，把新的仓库获取到本地，用clone

**git push 和git pull 只能上传和拉取第一次clone或设置好的远程地址仓库的分支上**