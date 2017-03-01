var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var conf = require('./conf.json');

var root = path.join(__dirname, '../');
var dist = path.join(root, "./dist");
var src = path.join(root);


module.exports = {
  entry: getEntry(),
  output: {
    path: path.join(dist, "./"),
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['style-loader', 'css-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.woff(\?t=\d+)?$/,
        exclude: /node_modules/,
        loader: "file-loader?name=fonts/[name][hash].woff&limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.woff2(\?t=\d+)?$/,
        exclude: /node_modules/,
        loader: "file-loader?name=fonts/[name][hash].woff2&limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.ttf(\?t=\d+)?$/,
        exclude: /node_modules/,
        loader: "file-loader?name=fonts/[name][hash].ttf&limit=10000&minetype=application/octet-stream"
      },
      {
        test: /\.eot(\?t=\d+)?$/,
        exclude: /node_modules/,
        loader: "file-loader?name=fonts/[name][hash].eot&limit=10000"
      },
      {
        test: /\.svg(\?t=\d+)?$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=10000&minetype=image/svg+xml"
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        loader: "url-loader?mimetype=image/png"
      }
    ],
  },
  resolve: {
    modules: [
      "node_modules"
    ],
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      SRC: src,
      CONTAINER: path.join(src, './tpls/index.js'),
      COMPONENTS: path.join(src, './components')
    }
  },
  devServer: {
    contentBase: dist,
    // historyApiFallback: true,
    port: 3000,
    // compress: isProd,
    // inline: !isProd,
    // hot: !isProd,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
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