const path = require('path');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //抽离css
const TerserPlugin = require('terser-webpack-plugin'); //压缩js
const {CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'production', // production || development
    entry: {
        index: './js/index.js',
        case: './js/case.js'
    },
    output: {
        filename:'bundle.[chunkhash].js',
        path: path.resolve('dist')  //绝对路径
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 8080
    },
    optimization: { // 优化项
        minimizer: [
          new TerserPlugin({}),
          new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: [ 'default', { discardComments: { removeAll: true } }],
            canPrint: true
          }),
        ],
        splitChunks:{
            cacheGroups:{
              common: {
                name: "common",
                chunks: "all",
                minChunks: 2,
                priority: 10,
             }
            }
        }
      },
    module: {
        rules: [
          {  //html中使用img 标签引入图片
            test: /\.html$/,
            use: {
                    loader: 'html-loader',
                    options: {
                      minimize: true,
                      interpolate: true
                  }
                  }
         },
         {
          test: /\.(woff|woff2|eot|svg|ttf)$/,
          use: {
              loader: 'file-loader', 
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts',
             }
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: {
              loader: 'url-loader', 
              options: {
                 limit: 1024,//限制图片大小
                 outputPath: './images/',
                 esModule: false
             }
          }
        },
          {
            test: require.resolve('jquery'),
            use: [{
              loader: 'expose-loader',
              options: '$'
            }]
          },
          {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader', 
            ]
          }
        ]
      },
    devtool: 'hidden-source-map',
    plugins: [
       new CleanWebpackPlugin(),
       new HtmlWebpack({
           hash: true,
          //  minify: {
          //      collapseWhitespace: true,
          //      removeComments: true
          //  },
           chunks: ['index', 'common'],
           template: 'index.html',
           filename: 'index.html'
       }) ,
       new HtmlWebpack({
        hash: true,
        minify: {
            collapseWhitespace: true,
            removeComments: true
        },
        chunks: ['case', 'common'],
        template: 'case.html',
        filename: 'case.html'
        }) ,
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: "[name].[contenthash].css"
        })
    ]
}