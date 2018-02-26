## 0.提示 ##
   webpack构建vue多页面应用配置1.0版本，请进入https://github.com/Wbiokr/multiplePagesEnv
## 1.命令 ##
- 安装依赖：cnpm install;
- 开发单页：.bat(按照提示输入页面目录，如test);
- 生成单页：pro.bat(按照提示输入页面目录，如test);
- 开发模式：npm run dev;
- 生产构建：npm run build;
- 提示：.bat与pro.bat命令只需要打开一次即可，且可以多个单页面同时开发，打开多个命令窗口即可；
## 2.目录 ##
### 2.0 static ###
    开发与生产环境下公用文件，重置css与vue库js，所以单页面开发中，不再引入vue
### 2.1 build、config ###
    webpack配置
### 2.2 src/common ###
    公用文件
### 2.3 src/pages ###
    开发多页面应用时，页面独占文件夹。
    其中目录名为pro.bat/.bat关键词，main.js为入口文件，如例子中test目录即为一个单页面
