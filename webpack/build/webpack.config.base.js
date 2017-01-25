var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var conf = require('./conf.json');

var root = path.join(__dirname, '../');
var dist = path.join(root, "./dist");
var src = path.join(root, './src');


module.exports = {
  entry: getEntry(),
  output: {
    path: path.join(dist, "./lib"),
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.woff(\?t=\d+)?$/,
        loader: "file?name=fonts/[name][hash].woff&limit=10000&minetype=application/font-woff",
        include: src
      },
      {
        test: /\.woff2(\?t=\d+)?$/,
        loader: "file?name=fonts/[name][hash].woff2&limit=10000&minetype=application/font-woff",
        include: src
      },
      {
        test: /\.ttf(\?t=\d+)?$/,
        loader: "file?name=fonts/[name][hash].ttf&limit=10000&minetype=application/octet-stream",
        include: src
      },
      {
        test: /\.eot(\?t=\d+)?$/,
        loader: "file?name=fonts/[name][hash].eot&limit=10000",
        include:src
      },
      {
        test: /\.svg(\?t=\d+)?$/,
        loader: "url?limit=10000&minetype=image/svg+xml",
        include: src
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        loader: "url-loader?mimetype=image/png",
        include: src
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      src: src,
      container: path.join(src, './index.js')
    }
  },
  plugins: []
}


function getEntry() {
  var entry = {};
  Object.getOwnPropertyNames(conf.entry).map(function (name) {
    //component
    entry[name] = path.join(path.join(src, './components'), conf.entry[name]);
    //demo
    // entry['d_'+name] = path.join(conf.demoPath,conf.entry[name]);
  });
  return entry;
}