var webpack = require('webpack');
var path = require('path');

var config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.tsx'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  target: 'web',

  devServer: {
    contentBase: './src'
  },

  devtool: 'cheap-module-eval-source-map',

  debug: true
};

module.exports = config;
