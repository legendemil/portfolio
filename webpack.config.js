var path = require('path');
var webpack = require('webpack');
var debug = process.env.NODE_ENV !== 'production';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: { 
    path: debug ? __dirname : __dirname + '/dist', 
    filename: debug ? 'bundle.js' : 'bundle.min.js'
  },
  devtool: debug ? 'source-map' : null,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }, 
      {
          test: /\.sass$/,
          loader:  debug ? null : ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
          loaders: debug ? [ 'style', 'css', 'sass' ] : []
      }
    ]
  },
  plugins: debug ? [] : [
    new ExtractTextPlugin("main.min.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    
  ]
};
