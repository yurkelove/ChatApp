const path = require('path'); // Базовый модуль
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./devserver');
const sass = require('./sass');
const extractCSS = require('./css.extract');
const uglifyJS = require('./uglify');

const PATHS = { // Обьект
	source : path.join(__dirname,'..','source'), // Исходники приложения
	build : path.join(__dirname,'..','build') // Результаты работы webpack
};

// И для Development и для Production
const common = merge([
	{
		// точка входа
		entry: PATHS.source + '/index.tsx', // точка входа
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
			// modules: [path.resolve(__dirname, '/src'), 'node_modules/'],
			// descriptionFiles: ['package.json'],
			extensions: [ '.tsx', '.ts', '.js' ]
		},
		output: { // Имена файлов и деректории
			path: PATHS.build,
			filename: 'bundle.js' // Автоматически будут подставлятся имена файлов
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: PATHS.source + '/index.html'
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
			uglifyJS(),
			{
				mode: 'production'
			},
		]);
	}
	if(env === 'development'){
		return merge([
			common,
			devserver(),
			{
				mode: 'development'
			},
		]);
	}
};
