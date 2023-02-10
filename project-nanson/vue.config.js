// vue.config.js
// 官方配置参考：https://cli.vuejs.org/zh/config/#vue-config-js
// csdn文章参考：https://blog.csdn.net/qq_40279656/article/details/107805720
module.exports = {
  		publicPath:'/',    // 启动页地址
  		outputDir: 'dist', // 打包的目录
 		lintOnSave: true, // 在保存时校验格式
  		productionSourceMap: false, // 生产环境是否生成 SourceMap
  		devServer: {
    			open: true, // 启动服务后是否打开浏览器
    			host: '0.0.0.0',
    			port: 8080, // 服务端口
    			https: false,
    			hotOnly: false,
   			 proxy: null, // 设置代理
    			before: app => {}
  		},
	}
 // 注意：项目完成之后，打包时，服务器代理并不会被打进发布包，在打包之前一定要把本地代理地址改为真正的在线地址；
// 修改这个文件，需要重启服务器

// 项目开发完，需要打包项目，执行npm run build。会在我们的项目目录下面生成一个dist的文件夹，里面存放的就是打包后的代码；
// 发布：只需要将dist文件中所有的内容复制到服务器的静态文件夹(public)中就可以了