var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var baseWebpackConf = require('./webpack.config.base.js');
var conf = require('./conf.json');

var root = path.join(__dirname, '../');
var dist = path.join(root, "./dist");
var src = path.join(root);


var conf = Object.assign({}, baseWebpackConf, {
  output: {
    path: path.join(dist, './lib'),
    publicPath: '/lib',
    filename: '[name]/index.js'
  },
  plugins: [
    new ExtractTextPlugin('[name]/index.css')
  ] //.concat(getHtmlChunks())
});

module.exports = conf;