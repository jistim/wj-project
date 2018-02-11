var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var extractLess = new ExtractTextPlugin({
  filename: '[name].[hash].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {

  entry: {
    'app': './src/App.js'
  },

  resolve: {
    modules: [path.resolve(__dirname, "src"), 'node_modules'],
    alias: {
      moment$: 'moment/moment.js'
    },
    descriptionFiles: ["package.json"],
    extensions: ['.js', '.jsx']
  },

  module: {
    noParse: /moment\.js/,
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot-loader']
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          plugins: [
            ['import', {
              libraryName: 'antd',
              style: 'true'
            }]
          ],
          presets: ['es2015', 'stage-2', 'react'],
          compact: false
        }
      },
      {
        test: /\.less$/i,
        use: extractLess.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      baseUrl: '/',
      xhtml: true
    }),
    new CopyWebpackPlugin([
      {
        from: './static/img',
        to: 'img',
        context: path.join(__dirname)
      },
      {
        from: './static/national-img',
        to: 'national-img',
        context: path.join(__dirname)
      }
    ]),
    extractLess
  ]
};
