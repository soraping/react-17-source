const path = require("path");
const WebpackBaseConfig = require("./webpack.base");

// devServer 配置
const devServer = {
    static: path.resolve('./dist'), // 对外提供的访问内容的路径，只有在提供静态文件访问的情况下才需要使用该配置。
    compress: true, // 配置是否启用 gzip 压缩。boolean 为类型，默认为 false。
    host: 'localhost',
    port: 8000,
    // quiet: true, // 当启用该配置，除了初始化信息会被写到console中，其他任何信息都不会被写进去。
    //             // errors和warnings也不会被写到console中。
    // useLocalIp: baseDevServer.useLocalIp || false,
    // overlay: { // 在编译过程中有任何错误，可以显示在网页上,在浏览器上全屏显示编译的errors或warnings。默认是关闭的
    //   warnings: false,
    //   errors: true
    // },
    // headers: { // 向所有的请求添加headers
    //   "X-Custom-Foo": "bar"
    // },
    historyApiFallback: true, // 当使用html5 history api,将会在响应404时返回index.html。
    // historyApiFallback: { 
    //    rewrites: [ // 通过传递一个object来对该共呢个做更多的定
    //      { from: /^\/$/, to: '/views/landing.html' },
    //      { from: /^\/subpage/, to: '/views/subpage.html' },
    //      { from: /./, to: '/views/404.html' }
    //    ],
    //    disableDotRule: true // 当在路径中使用.符号，需要使用disableDotRule配置。
    // },
    // https: true, // 默认情况下dev-server使用http协议，通过配置可以支持https
    // https: {
    //    key: fs.readFileSync("/path/to/server.key"),
    //    cert: fs.readFileSync("/path/to/server.crt"),
    //    ca: fs.readFileSync("/path/to/ca.pem"),
    // },
    // open: false, // 第一次构建是否自动用浏览器打开网页，默认是true
    // openPage: '/different/page', // 配置项用于打开指定 URL 的网页
    hot: true, // 开启热更新HMR，只能跟新css。js和图片需要手动更新
    // hotOnly:true, // 启用HMR，当编译失败时，不刷新页面。
    // proxy: {
    //  '/api': {
    //      target: 'https://api.github.com', // 代理地址
    //      pathRewrite: {
    //        '^/api': ''
    //      },
    //      // 默认代理服务器，会以我们实际在浏览器请求的主机名【localhost:8080】，作为代理服务器的主机名，
    //      // 然后代理服务器会带上这个主机名，去请求github，然而 github是不认识 【localhost:8080】
    //      //  changeOrigin: true 就是以实际代理请求发生过程中的主机名去请求，如：代理服务器的主机名
    //      changeOrigin: true
    //   }
    // }
}
  
module.exports = Object.assign({}, WebpackBaseConfig, { devServer });