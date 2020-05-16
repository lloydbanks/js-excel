const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getPath = (dir = 'dist') => path.resolve(__dirname, dir)
const getFile = (ext = 'js') => `bundle.[hash].${ext}`

module.exports = {
	context: getPath('src'),
	mode: 'development',
	entry: './index.js',
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
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: 'index.html'
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
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}