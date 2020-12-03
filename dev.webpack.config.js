const merge = require('webpack-merge');
const common = require('./common.webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: 'Google Chrome',
    publicPath: '/',
    port: 9000
  }
});
