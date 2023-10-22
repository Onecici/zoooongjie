### 使用命令行执行git操作

#### 初始化仓库

```bash
git init
```

#### 把文件加入暂存区

```bash
git add 文件名
git add .
```

#### 查看仓库的状态

```bash
git status
```

#### 把暂存区代码提交到仓库区

```bash
git commit -m "提交的信息"
```

### 更加快速的提交代码到仓库区

```bash
git commit -a -m "提交信息"
```

注意：新上传的文件必须执行`git add`操作，否则没法快速提交  

Git上已经上传的话重复上传可以使用这行代码进行快速提交

#### 查看提交历史

```bash
git log
```

