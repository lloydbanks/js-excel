const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const getPath = (dir = 'dist') => path.resolve(__dirname, dir)
const getFile = (ext = 'js') => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ]

  if (isDev) loaders.push('eslint-loader')

  return loaders
}

module.exports = {
  context: getPath('src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: getFile(),
    path: getPath()
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': getPath('src'),
      '~core': getPath('src/core')
    }
  },
  devtool: isDev && 'source-map',
  devServer: {
    port: 3000,
    hot: isDev
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html',
      minify: isProd
    }),
    new CopyPlugin({
      patterns: [
        {
          from: getPath('src/favicon.ico'),
          to: getPath(),
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: getFile('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true
            }
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      }
    ]
  }
}
