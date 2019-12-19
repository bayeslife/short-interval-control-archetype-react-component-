const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const DEMO_SOURCE_DIR=process.env.DEMO_SOURCE_DIR || 'demo'
console.log(`Demo Source Dir: ${DEMO_SOURCE_DIR}`)

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, `../../${DEMO_SOURCE_DIR}/src/index.html`),
    filename: "./index.html",
    inlineSource: '.(js|css)$' // embed all javascript and css inline
});
const htmlWebpackInlineSourcePlugin = new HtmlWebpackInlineSourcePlugin()

module.exports = {
    entry: path.join(__dirname, `../../${DEMO_SOURCE_DIR}/src/index.js`),
    output: {
        path: path.join(__dirname, `../../${DEMO_SOURCE_DIR}/dist`),
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


