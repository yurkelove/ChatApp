const path = require('path'); // Базовый модуль
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/uglify');

const PATHS = { // Обьект
	source : path.join(__dirname,'source'), // Исходники приложения
	build : path.join(__dirname,'build') // Результаты работы webpack
};

// И для Development и для Production
const common = merge([
	{
		// точка входа
		entry: PATHS.source + '/index.js', // точка входа
		output: { // Имена файлов и деректории
			path: PATHS.build,
			filename: '[name].js' // Автоматически будут подставлятся имена файлов
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Chat App'
			})
		],
	},
]);



module.exports = function (env) {
	if(env === 'production'){
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if(env === 'development'){
		return Object.assign(
			{},
			common,
			devserver(),
			sass()
		)
	}
};
