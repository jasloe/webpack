const path = require("path");
const webpack = require("webpack");

const HtmlWebPackPlugin = require('html-webpack-plugin');

const webpack_rules = [];

const webpackOption = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: webpack_rules
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
  ],
};


let babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"]
    }
  }
};

webpack_rules.push(babelLoader);

module.exports = webpackOption;
