const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "../../demo/src/index.html"),
    filename: "./index.html",
    inlineSource: '.(js|css)$' // embed all javascript and css inline
});
const htmlWebpackInlineSourcePlugin = new HtmlWebpackInlineSourcePlugin()

module.exports = {
    entry: path.join(__dirname, "../../demo/src/index.js"),
    output: {
        path: path.join(__dirname, "../../demo/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin,htmlWebpackInlineSourcePlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};


