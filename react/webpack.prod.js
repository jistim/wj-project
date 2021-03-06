var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var path = require('path');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {

  output: {
    path: path.join(process.cwd(), '..', 'dist'),
    publicPath: 'assets/',
    filename: '[name].[hash].js'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      },
      drop_console: true,
      sourceMap: true,
      mangle: {
        keep_fnames: true,
        except: ['$super']
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
    NODE_ENV: JSON.stringify('production')
}
    })
  ]
});
