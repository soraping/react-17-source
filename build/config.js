const path = require('path')

// 环境变量
const NODE_ENV = process.env.NODE_ENV
// 项目目录
const BASE_DIR = path.resolve(__dirname, '..')
// 根目录
const srcPath = path.join(BASE_DIR, 'src')
// 静态资源
const staticPath = path.join(BASE_DIR, 'static')
// dll路径
const dllPath = path.join(staticPath, 'dll')
// output
const distPath = path.join(BASE_DIR, 'dist')

// manifest path
const manifestPath = path.join(dllPath, 'vendors-manifest.json')




module.exports = {
    BASE_DIR,
    srcPath,
    NODE_ENV,
    staticPath,
    dllPath,
    distPath,
    manifestPath
}