const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const env = process.env.NODE_ENV || 'development';
const isDev = env == 'development';
const baseAPIUrl = isDev ? 'http://localhost:8080' : 'https://api.pinem.com';

const App = {
  env: env,
  entry: {
    vendor: [
      'jquery',
      'popper.js',
      'react',
      'react-dom'
    ],
    app: ['./src/index.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: isDev,
      __BASE_API_URL__: JSON.stringify(baseAPIUrl)
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'index.html'),
      minify: {
        removeComments: !isDev,
        collapseWhitespace: !isDev
      },
      inject: true
    })
  ],
  devtool: (isDev ? 'cheap-module-eval-source-map' : 'source-map')
};

if (isDev) {
  App.entry.app.unshift(
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch'
  );

  App.plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  App.plugins.unshift(new CleanWebpackPlugin(['dist']));
  App.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id]-[hash].css'
    })
  );
}

let config = {
  mode: App.env,
  entry: App.entry,
  plugins: App.plugins,
  devtool: App.devtool,

  output: {
    publicPath: '/',
    filename: isDev ? 'bundle.js' : 'bundle-[hash].js',
    path: path.join(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

if (!isDev) {
  config.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          mangle: true,
          output: {
            comments: false
          },
          compress: {
            drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: 'vendor',
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
}

module.exports = config
