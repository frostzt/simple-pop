const path = require("path");

const app_dir = __dirname + "/src";

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: app_dir + "/index.tsx",
  output: {
    path: __dirname + "/dist",
    filename: "index.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: [/node_modules/],
        loader: "file-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [/node_modules/],
        loader: "file-loader",
      },
      {
        test: /\.(pdf)$/i,
        exclude: [/node_modules/],
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    port: 8080,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
};

module.exports = config;
