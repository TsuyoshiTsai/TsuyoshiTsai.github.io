/**
 * Production
 */
var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name]-[chunkhash].js',
        chunkFilename: 'js/[id]-[chunkhash].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        },
                    ],
                    publicPath: "../",
                })
            },
            {
                test: /\.(png|gif|jpg|svg)$/i,
                include: path.join(__dirname, '../src/image'),
                use: 'url-loader?limit=10240&name=image/[name]-[hash].[ext]',
            },
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'tether': 'tether',
            'Tether': 'tether',
            'window.Tether': 'tether'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name]-[contenthash].css',
            disable: false,
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..')
        }),

    ]
};