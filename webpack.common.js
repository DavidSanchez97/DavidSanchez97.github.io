const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loaders = require("./webpack/loaders");

module.exports = {
  entry: ["./src/js/index.jsx"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
  },
  module:{
    rules: [
      loaders.jsx
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"],
    alias: {
      js: path.resolve(__dirname, "src/js"),
      styles: path.resolve(__dirname, "src/styles"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Portafolio",
      template: "public/index.html",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
};
