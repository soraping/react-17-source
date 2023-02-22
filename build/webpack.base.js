const os = require('os')
const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const configJson = require('./config')
const dllBundleConfig = require('../static/dll/bundle-config');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });


module.exports = {
    entry: {
      index: path.join(configJson.srcPath, "index.tsx")
    },
    output: {
      path: path.join(configJson.BASE_DIR, "dist"),
      filename: "[name].[hash].js",
      publicPath: "/"
    },
    mode: "development", // 开发模式
    devtool: "source-map", // 开启调试
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "happypack/loader?id=happytsxloader"
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".less", ".json", ".css"],
      alias: {
        // 'react': '/Users/caoping/www/resources/react/build/node_modules/react/cjs/react.development.js',
        // 'react-dom': '/Users/caoping/www/resources/react/build/node_modules/react-dom/cjs/react-dom.development.js',
        '@': configJson.srcPath
      },
      modules: ["node_modules"]
    },
    plugins: [
      new HappyPack({
        id: "happytsxloader",
        loaders: [
          {
            path: "ts-loader",
            query: { happyPackMode: true }
          }
        ],
        threadPool: happyThreadPool,
        verbose: true
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(configJson.srcPath, "index.html"),
        inject: true,
        chunks: ["index"],
        // favicon: path.join(ctxPath, 'static/favicon.ico'),
        dllName: configJson.NODE_ENV == 'production' ? dllBundleConfig.vendors.js : null

      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(configJson.NODE_ENV),
      })
    ]
  };