1、可以通过**git log**查看当前版本指向
2、然后 **git reset --hard HEAD~1（也可以是其他退回语句）** 退回一个版本

 HEAD~2退回上2个版本以此类推

**git reset --hard 版本号**  可以通过**git log**查看当前版本号回退

3、可以通过**git log**再次查看，指向应该变为上一个版本了
4、直接**git push origin 分支 --force**强推到远程分支