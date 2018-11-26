const path = require('path'); // Базовый модуль
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = { // Обьект
	source : path.join(__dirname,'source'), // Исходники приложения
	build : path.join(__dirname,'build') // Результаты работы webpack
};

module.exports = {
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
	devServer: {
		stats : 'errors-only'
	}

};
