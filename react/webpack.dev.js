var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
  devtool: '#cheap-module-eval-source-map',

  output: {
    path: path.join(process.cwd(), '..', 'dist'),
    publicPath: "assets/",
    filename: '[name].[hash].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],

  devServer: {
    disableHostCheck: true,
    historyApiFallback: {
      index: '/assets/index.html'
    },
    stats: 'minimal',
    inline: true,
    hot: true,
    proxy: {
      '/talk-api': {
          target: 'http://localhost:9990/talk',
          secure: false
      }
    }
  }
});
