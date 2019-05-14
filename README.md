## 项目介绍

此项目是某课网的视频，自己从别的地方download下来的，但是忘记了出处，在原来的基础上增加了添加地址接口和前台页面。另外是使用了nodemon，避免每次修改后台代码重启服务。还有一些其他的补充。

### 关于项目如何跑起来似乎没有太全的介绍，我就补充一下吧！

1. 分别安装前后台项目的依赖，cnpm i 或者npm i，后台项目使用nodemon ./bin/www或者在packge.json中配置

2. 导入data文件夹的数据

   - （1）找到本电脑mongobd安装的bin目录，

   - （2）执行命令

     mongo import --db vueshop --collection users --file  C:\Users\yangxin\Desktop\project\vue_shop\data\users.json     

     vueshop：数据库名称

     users：集合名称    

     C:\Users\yangxin\Desktop\project\vue_shop\data\users.json：json文件路径

3. 打开前台项目登录看效果

