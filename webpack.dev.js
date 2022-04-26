const { default: merge } = require("webpack-merge");
const webpackCommonConfig = require("./webpack.common");
const loaders = require("./webpack/loaders");

module.exports = {
    ...webpackCommonConfig,
    mode: 'development',
    devtool: 'inline-source-map',
    module:{
        rules: [
            ...webpackCommonConfig.module.rules,
            loaders.sass('style-loader'),
            loaders.css('style-loader')
        ]
    }
}