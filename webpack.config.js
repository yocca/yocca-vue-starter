const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			hash: true
		})
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	resolve: {
		extensions: ['*', '.js', '.vue', '.json', '.css', '.scss'],
		alias: {
			vue: 'vue/dist/vue.js',
			'Components': path.resolve(__dirname, 'src/components'),
			'AppStandard': path.resolve(__dirname, 'src/AppStandard'),
			'CSSModules': path.resolve(__dirname, 'src/css_modules')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, { 
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			},
			{
				test: /\.scss$/,
				loader: 'sass-resources-loader',
				options: {
					resources: [
						path.resolve(__dirname, 'src/css_modules/_mixins.scss')
					]
				}
			}
		]
	}
}
