const path = require('path')
/*
 *"webpack": "^3.12.0",
 *"webpack-dev-server": "^2.11.2"
 */

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: path.join(__dirname, './src/js/app.js'), // 入口，表示，要使用 webpack 打包哪个文件
    output: { // 输出文件相关的配置
        path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
       // publicPath: '/dist/js', // 静态资源在服务器上运行时的访问路径，可以直接http://localhost:8080/dist/js/bundle.js访问到服务器中的bundle.js文件
        filename: 'bundle.js' // 这是指定 输出的文件的名称
    },
    module:{
        rules:[
            { test: /\.css$/,use:['style-loader','css-loader']},
            { test: /\.less$/,use:['style-loader','css-loader','less-loader']},
            { test: /\.scss$/,use:['style-loader','css-loader','sass-loader']},
            { test: /\.(png|jpe?g|gif|bmp|svg)$/,use:[{loader:'url-loader',options:{limit:50000}}]},
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ }
        ]
    },
    devServer: {
        open: true,
        port: 3030,
        contentBase: 'src',
        hot: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
            filename: 'index.html' // 设置生成的内存页面的名称
        })
    ]
}

module.exports = config