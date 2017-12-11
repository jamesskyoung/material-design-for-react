var path = require('path');
var webpack = require('webpack');

var config = {
    entry: './main.js',

    output: {
        path: path.join(__dirname, "./public/dist"),
        filename: 'reactmaterial.js',
        libraryTarget: 'umd'
    },

    devServer: {
        inline: true,
        contentBase: './public',
        port: 8080,
        historyApiFallback: true
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            { test: /\.svg$/, loader: 'svg-loader' },
            {
                test: /\.css$/,
                include: /src/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')

            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}
console.log('output path...' + config.output.path);
module.exports = config;