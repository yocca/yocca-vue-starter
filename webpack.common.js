const path = require('path');

const getVueAlias = function() {
	if (process.env.NODE_ENV == 'production') {
		return 'vue/dist/vue.min.js';
	} else {
		return 'vue/dist/vue.js';
	}
}

module.exports = {
	resolve: {
		extensions: ['*', '.js', '.vue', '.json', '.css', '.scss'],
		alias: {
			vue: getVueAlias(),
			'Components': path.resolve(__dirname, 'src/components'),
			'CSSModules': path.resolve(__dirname, 'src/css_modules'),
			'Mixins': path.resolve(__dirname, 'src/mixins')
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
