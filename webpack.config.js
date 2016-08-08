var webpack = require('webpack');
var path = require('path');

var config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },

  module: {
    preLoaders: [
      { test: /\.tsx?$/, loaders: ['tslint'] },
    ],
    loaders: [
      { test: /\.tsx?$/, loaders: ['react-hot', 'ts'], exclude: /node_modules/ },
      { test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file' },
      { test: /\.ico$/, loader: 'file?name=[name].[ext]' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
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
