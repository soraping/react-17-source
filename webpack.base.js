const os = require('os')
const path = require('path')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// const alias = () => {
//   const { baseUrl, paths } = tsconfigJSON["compilerOptions"];
//   let aliasConfig = {};
//   Object.keys(paths).map(key => {
//     aliasConfig[key] = path.resolve(__dirname, baseUrl, paths[key][0]);
//   });
//   return aliasConfig;
// }

module.exports = {
    entry: {
      index: "./src/index.tsx"
    },
    output: {
      path: path.join(__dirname, "dist"),
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
        'react': '/Users/caoping/www/resources/react/build/node_modules/react/cjs/react.development.js',
        'react-dom': '/Users/caoping/www/resources/react/build/node_modules/react-dom/cjs/react-dom.development.js',
        '@': path.resolve(__dirname, 'src')
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
        template: path.resolve(__dirname, "src", "index.html"),
        chunks: ["index"]
      }),
    ]
  };