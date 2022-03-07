const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Webpack  = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "./src", "index.js"),
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "/"
    },
    devServer: {
        port: 3042,
        historyApiFallback: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{ loader: "babel-loader" }]
            },
            {
                test: /.*\.(gif|png|jp(e*)g|svg)$/i,
                use: {
                    loader: "url-loader",
                }
            },
            // Vendor CSS loader
            // This is necessary to pack third party libraries like antd
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, './public', 'index.html'),
            favicon: './public/images/ISOTIPO.png'
        }),
        new Webpack.ProvidePlugin({
            React: 'react'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
}