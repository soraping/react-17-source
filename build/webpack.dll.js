const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const configJson = require('./config')

const dllPath = configJson.dllPath

module.exports = {
    mode: 'production',
    entry: {
        vendors: [
            'react', 
            'react-dom', 
            'react-router',
            'react-router-dom',
            'history',
            'dayjs',
            'axios', 
            'classnames'
        ],
    },
    output: {
        filename: '[name].[chunkhash:8].dll.js',
        path: dllPath,
        library: '[name]_lib',
        publicPath: '/dll',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(dllPath, '[name]-manifest.json'),
            name: '[name]_lib',
            context: configJson.BASE_DIR
        }),
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: dllPath,
        }),
    ],
};