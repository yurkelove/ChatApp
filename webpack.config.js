const path = require('path'); // Базовый модуль
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = { // Обьект
	source : path.join(__dirname,'source'), // Исходники приложения
	build : path.join(__dirname,'build') // Результаты работы webpack
};

// И для Development и для Production
const common = {
	entry: PATHS.source + '/index.js', // точка входа
	output: { // Имена файлов и деректории
		path: PATHS.build,
		filename : '[name].js' // Автоматически будут подставлятся имена файлов
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Chat App'
		})
	],
};



const developmentConfig = {
	devServer: {
		stats : 'errors-only',
		port: 9000
	}
};

module.exports = function (env) {
	if(env === 'production'){
		return common;
	}
	if(env === 'development'){
		return Object.assign(
			{},
			common,
			developmentConfig
		)
	}
}
