# 技术栈
> react
> fis3/webpack
> gulp
> sass


# 安装模块
```
npm install
```
若安装过程中出现错误，可通过以下方式解决：  
1、检查node及npm版本（node@6.x，npm@3.x）  
2、项目中需要下载sass-loader，若通过npm安装此模块失败，可通过以下方式解决：  

1）全局安装`cnpm`,通过cnpm安装sass-loader  
```
npm install cnpm -g
cnpm install sass-loader --save-dev
```
2）直接下载二进制文件

- 根据系统下载sass二进制文件至本地，放在某个盘符下即可。[下载地址](https://github.com/sass/node-sass/releases)
- 配置环境变量
```
set SASS_BINARY_PATH=D:\win32-x64-48_binding.node
echo %SASS_BINARY_PATH%
```
- 重新安装sass-loader即可

# 运行项目
开发环境
- 通过webpack运行
```
npm run demo
npm run start
```
命令运行后，浏览器自动运行项目，待资源打包完成，访问http://localhost:3000/chequer/即可

- 通过fis3运行  

cmd1
```
npm start
```
cmd2
```
fis3 server start -p 3000 --www output 
```

# 其它命令
1、新建组件对应文件夹
```
gulp component -n [组件名]
```
功能：  
1、在`/src/components/[组件名]`下创建js及scss文件  
2、在`/src/demo/[组件名]`下创建js及scss文件  
3、在`/build/conf.json`中创建入口路径  
