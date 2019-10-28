const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ScriptExtHTMLWebpackPlugin = require('script-ext-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: ['./src/index.js'],
	devServer: {
		compress: true,
		publicPath: '/',
		contentBase: path.join(__dirname, './public'),
		hot: true,
		port: 8080
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'app.[hash].js'
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: 4,
				sourceMap: true
			})
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			hash: true,
			filename: path.resolve(__dirname, 'public/index.html'),
			template: './src/template.html',
			inject: 'head',
			meta: {
				'application-name': 'snake',
				charset: 'utf-8',
				viewport: 'width=device-width,initial-scale=1',
				description: 'Classic Snake Game',
				robots: 'index,follow',
				googlebot: 'index,follow',
				rating: 'general'
			},
			minify: {
				collapseWhitespace: true,
				removeComments: true
			},
			title: 'snake'
		}),
		new ScriptExtHTMLWebpackPlugin({
			defaultAttribute: 'defer'
		})
	],
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			Component: path.resolve(__dirname, 'src/components/'),
			Context: path.resolve(__dirname, 'src/contexts/'),
			Utility: path.resolve(__dirname, 'src/utils/')
		}
	}
};
