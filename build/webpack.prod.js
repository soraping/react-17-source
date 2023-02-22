const webpack = require('webpack')
const WebpackBaseConfig = require("./webpack.base");
const configJson = require('./config')


const prodConfig = {
    output: {
        path: configJson.distPath,
        filename: 'bundle-[name]-[hash].js',
        chunkFilename: 'chunk.[id].[chunkhash].js',
        publicPath: './'
    },
    optimization: {
        splitChunks: {
            // 三选一："initial" 初始化，"all"(默认就是all)，"async"（动态加载）
            chunks: 'all',
            // 当导入的模块最小是多少字节才会进行代码分割
            minSize: 20000,
            maxSize: 50000,
            // 当一个模块被导入(引用)至少多少次才对该模块进行代码分割
            minChunks: 1,
            // 同时加载的模块数是多少个（即打包前5个模块会做代码分割，超过5个模块做了代码分割就不再做代码分割（减少http请求次数））
            maxAsyncRequests: 5,
            // 入口文件前多少个做代码分割，超过3个的入口文件就不再做代码分割（减少http请求次数））
            maxInitialRequests: 3,
            // 文件生成的时候文件名连接符,如vendors~main.js
            automaticNameDelimiter: '-',
            // cacheGroups里的文件名有效
            name: true,
            //缓存组，抽取公共模块什么的，都在这个地方
            cacheGroups: {
                async: {
                    chunks: 'async',
                    minSize: 3000,
                    minChunks: 2,
                    maxAsyncRequests: 5,
                    maxInitialRequests: 3,
                    priority: -1,
                    reuseExistingChunk: true,
                },
                commons: {
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/](@babel|core-js|css-loader|style-loader|ansi-html|html-entities|querystring)/,
                    // 如果一个模块同时符合default和vendors，vendors的优先级更高，就优先将模块打包到vendors里
                    priority: 1,
                    minChunks: 1,
                    enforce: true,
                    // 不重复打包，碰到已打包过的模块就直接使用
                    reuseExistingChunk: true,
                    filename: 'commons.js'
                },
                vendors: {
                    filename: 'vendors.js',
                    chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    reuseExistingChunk: true,
                    priority: 0,
                    minChunks: 1,
                    enforce: true,
                    test: /[\\/]node_modules[\\/]/,
                }
            }
        }
    },
    mode: "production",
    // 没有sourcesContent，调试只能看到模块信息和行信息，不能看到源码
    // devtool: "nosources-source-map",
    devtool: "none",
    plugins: WebpackBaseConfig.plugins.concat(
        new webpack.DllReferencePlugin({
            context: configJson.BASE_DIR,
            manifest: configJson.manifestPath,
        }),
    )
}

let webpackConfig = Object.assign({}, WebpackBaseConfig, {...prodConfig});
module.exports = webpackConfig