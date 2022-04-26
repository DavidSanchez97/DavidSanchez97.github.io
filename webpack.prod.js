const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackCommonConfig = require("./webpack.common");
const loaders = require("./webpack/loaders");

module.exports = {
    ...webpackCommonConfig,
    mode: 'production',
    devtool: 'source-map',
    module:{
        rules: [
            ...webpackCommonConfig.module.rules,
            loaders.sass(MiniCssExtractPlugin.loader),
            loaders.css(MiniCssExtractPlugin.loader)
        ]
    },
    plugins: [...webpackCommonConfig.plugins, new MiniCssExtractPlugin()]
}