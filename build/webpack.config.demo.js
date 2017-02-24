var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var baseWebpackConf = require('./webpack.config.base.js');
var conf = require('./conf.json');

var root = path.join(__dirname, '../');
var dist = path.join(root, "./dist");
var src = path.join(root);


var conf = Object.assign({}, baseWebpackConf, {
  entry: getEntry(),
  output: {
    path: path.join(dist, './components'),
    publicPath: '/components/',
    filename: '[name]/index.js'
  },
  plugins: [
    new ExtractTextPlugin("[name]/index.css"),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ].concat(getHtmlChunks())
});

function getEntry() {
  var entry = {};
  Object.getOwnPropertyNames(conf.entry).map(function (name) {
    //component
    //entry[name] = path.join(conf.componentPath,conf.entry[name]);
    //demo
    entry[name] = path.join(path.join(src, './demo'), conf.entry[name]);
  });
  return entry;
}

function getHtmlChunks() {
  return Object.getOwnPropertyNames(conf.entry).map(function (name) {
    return new htmlWebpackPlugin({
      title: name.replace(/(.)/, function (w, $1) { return $1.toUpperCase() }),
      template: path.join(src, './tpls/basic.html'),
      filename: path.join(dist, './demo/' + [name] + '/index.html'),
      chunks: [name],
    });
  }).concat(
    new htmlWebpackPlugin({
      title: 'Chequer装逼小页面',
      content: '<ul>' + (
        Object.getOwnPropertyNames(conf.entry).map(function (n) {
          return `<li><a href='/demo/${n}/'>${n}</a></li>`
        }).join('\n')
      ) + '</ul>',
      template: path.join(src, './tpls/basic.html'),
      filename: path.join(dist, './demo/index.html'),
      inject: false
    })
    )
}


module.exports = conf;
