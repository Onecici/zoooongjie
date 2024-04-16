![image-20240415195209615](./assets/image-20240415195209615.png)

找到最后一个分支到提交，然后在vscode控制台执行命令

![image-20240415195248244](./assets/image-20240415195248244.png)

##### 执行后输入i进入修改模式 :wq保存

![image-20240415195534468](./assets/image-20240415195534468.png)

![image-20240415195626868](./assets/image-20240415195626868.png)

:wq保存后出现冲突

![image-20240415195814552](./assets/image-20240415195814552.png)

在vscode里解决冲突后输入git rebase --continue即可

最后git push --force远程强制提交