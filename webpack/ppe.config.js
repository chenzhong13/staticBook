var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var assetsPath = path.resolve(__dirname, '../ppe/');
var projectRootPath = path.join(__dirname, '../');
var publicPath = '';
// var publicPath = 'http://localhost:8080/ppe/';

module.exports = {
    devtool: 'false',
    entry: {
        main: [
            path.resolve(__dirname, '../src/index.jsx')
        ],
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'history', 'immutable']
    },
    output: {
        path: assetsPath,
        filename: 'bundle.js',
        publicPath: publicPath
    },
    module: {
        loaders: [
            { test: /(\.jsx|\.js)$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css?$/, loader: ExtractTextPlugin.extract('style', 'raw') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass') },
            { test: /\.jpg|png$/, loader: 'url?limit=10000' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
        ]
    },
    resolve: {
        root: path.resolve(__dirname, '../src'),
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new CleanPlugin([assetsPath], { root: projectRootPath }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new ExtractTextPlugin('[name].css', { allChunks: true }),
        new webpack.NoErrorsPlugin()
    ]
};

// var publicPath = '';

// if(process.env.NODE_ENV == 'development') {
//     // publicPath = 'http://192.168.2.228:8080/';
//     publicPath = 'http://dev.s.56qq.cn/staticAG/ppe/dev/';
// } else if(process.env.NODE_ENV == 'production') {
//     publicPath = 'http://s.56qq.cn/staticAG/ppe/dev/';
// }

