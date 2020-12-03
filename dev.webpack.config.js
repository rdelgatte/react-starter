const merge = require("webpack-merge");
const path = require("path");
const common = require("./common.webpack.config.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: "Google Chrome",
    port: 9000,
  },
});
