Git 全局设置:

git config --global user.name "CZihooo"
git config --global user.email "CZihaooo@163.com"

创建 git 仓库:

mkdir wap
cd wap
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://git.oschina.net/name/package.git
git push -u origin master
已有项目?

git add .
git commit -m "注释"

cd existing_git_repo
git remote add origin https://github.com/CZihooo/DSguanli.git
git push -u origin master

git pull --rebase origin master //下载GitHub文件
git rebase --continue//下一步
git rebase --abort //取消目前的进程
git checkout -b login //创建跳转到login分支
git branch //查看分支
git checkout master //切换分支
git merge login //合并分支
git push //推送

//删除分支
 显示所有本地分支（初始化时只有一个master分支）
$ git branch
 初始化本地版本库（重新初始化一次，可以忽略）
$ git init
 找到目录下隐藏的 .git
$ ls -a
 删除 .git
$ rm -rf .git
 可以看到master分支已经删除
$ ls -a