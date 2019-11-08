'use strict';
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');
module.exports = (env = {}) => {
    const config = {
        entry: ['./src/server.ts'],
        output: {
            path: path.resolve(__dirname, 'dist/out-tsc'),
            filename: '[name].js'
                /*
                 * filename:在使用webpack-dev-server模式时，如果要使用hash，是不可以使用chunkhash的，建议直接使用hash，必须是相对路径
                 * path：输出路径必须是绝对路径， dist输出文件目录
                 * publicPath：如果要设置热更新，必须要添加publicPath
                 * */
        },
        mode: 'development',
        target: 'node',
        devtool: 'eval-source-map',
        resolve: { // tells Webpack what files to watch.
            extensions: [".tsx", ".ts", ".js"],
            modules: ['node_modules', 'src', 'package.json'],
        },
        module: {
            rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
            }, ],
        },
        plugins: [] // required for config.plugins.push(...);
    };
    if (env.nodemon) {
        config.watch = true;
        config.plugins.push(new NodemonPlugin());
    }
    return config;
};