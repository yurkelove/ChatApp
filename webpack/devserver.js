const path = require('path'); // Базовый модуль

module.exports = function () {
	return {
		devServer: {
			contentBase: path.join(__dirname,'../source'),
			stats : 'errors-only',
			historyApiFallback: true,
			port: 9000
		}
	}
};

