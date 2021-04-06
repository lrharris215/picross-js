const path = require('path');
const webpack = require('webpack');

const config = {
    entry: path.join(__dirname, './public/javascripts/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './public'),
    },
    plugins: [new webpack.ProgressPlugin()],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
        ],
    },
};

module.exports = config;
