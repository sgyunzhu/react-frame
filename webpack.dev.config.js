/* eslint-disable no-undef */
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {

        /*  这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader',
                'css-loader?modules&localIdentName=[local]-[hash:base64:5]',
                'postcss-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devServer: {
        port: 8080,
        // contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: 'localhost',
        proxy: {
            target: 'http://192.168.89.88:7278',    // 这个就是我们设置的代理服务器地址
            changeOrigin: true,                    // 这个值就是用来跨域的，默认为false
        }
    }
};

module.exports = merge({
    customizeArray (a, b, key) {

        /* entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);
