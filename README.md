
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Item Build Step

1: 新建项目：ng new PWA-Angular --service-worker --skip-install<br>
2:cd PWA-Angular  <br>
3:npm i  <br>
4：在github上创建一个仓库，然后将代码推到仓库。<br>
5：在本地打包项目： ng build --prod --base-href "htps://lijiadashaoye.github.io/pwa/"<br>
6:在git上新建部署分支：“gh-pages”<br>
   git checkout -b "gh-pages"<br>
   git push --set-upstream origin gh-pages<br>
   git checkout master<br>
7：安装angular部署代码工具：npm i -g angular-cli-ghpage<br>
8：终端运行：ngh<br>
9：浏览器输入网址：https://lijiadashaoye.github.io/pwa/<br>
10:pwa为项目在git上的名字