const path = require('path'); // Базовый модуль
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
		entry: PATHS.source + '/index.ts', // точка входа
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: [ '.tsx', '.ts', '.js' ]
		},
		output: { // Имена файлов и деректории
			path: PATHS.build,
			filename: 'bundle.js' // Автоматически будут подставлятся имена файлов
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Chat App'
			})
		],
	},
	extractCSS(),
	sass()
]);



module.exports = function (env) {
	if(env === 'production'){
		return merge([
			common,
			uglifyJS()
		]);
	}
	if(env === 'development'){
		return Object.assign(
			{},
			common,
			devserver()
		)
	}
};
