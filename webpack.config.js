'use strict';
/* eslint-env node */

const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV || 'dev';
const isProd = ENV === 'production';

const DIR = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

const config = {

    entry: {
        'main': './src/index.js'
    },

    output: {
        path: './dist',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    devtool: 'source-map',

    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            common: path.join(DIR.src, 'app', 'common')
        }
    },

    plugins: [
        new CleanWebpackPlugin([DIR.dist], {
            root: __dirname,
            verbose: true
        }),

        new ExtractTextPlugin('[name].css'),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body'
        }),

        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
                loader: 'file'
            },
            {
                test: /\.js$/,
                loader: `${isProd ? 'ng-annotate!' : ''}babel`,
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss?sourceMap!sass?sourceMap')
            },
            {
                test: /\.(woff|woff2)(\?(v=\d+\.\d+\.\d+)?)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts'
            }, {
                test: /\.ttf(\?(v=\d+\.\d+\.\d+)?)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts'
            }, {
                test: /\.eot(\?(v=\d+\.\d+\.\d+)?)?$/,
                loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts'
            }, {
                test: /\.svg(\?(v=\d+\.\d+\.\d+)?)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&prefix=fonts'
            }
        ]
    }
};

// Add build specific plugins
if (isProd) {
    config.devtool = '';
    config.plugins.push(
        // Only emit files when there are no errors
        new webpack.NoErrorsPlugin(),

        // Dedupe modules in the output
        new webpack.optimize.DedupePlugin(),

        // Minify all javascript, switch loaders to minimizing mode
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config;
