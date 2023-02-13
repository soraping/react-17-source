const path = require("path");
const WebpackBaseConfig = require("./webpack.base");

const prodConfig = {
    output: {

    },
    mode: "production", // 开发模式
    devtool: "source-map", // 开启调试
    plugins: WebpackBaseConfig.plugins.concat(
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = Object.assign({}, WebpackBaseConfig, ...prodConfig);