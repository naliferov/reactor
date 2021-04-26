const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const tsRule = {
    test: /\.tsx?$/,
    loader: 'esbuild-loader',
    options: {
        loader: 'tsx', target: 'es2015'
    }
};
const cssRule = {
    test: /\.s?css$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: true
            },
        },
    ],
};

const backendConf = {
    entry: './index.ts',
    plugins: [
        new MiniCssExtractPlugin({filename: 'src/public/build/min.css'}),
    ],
    module: {
        rules: [tsRule, cssRule]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve('./'),
        filename: 'index.js',
    },

    target: 'node',
    externals: [nodeExternals()],

    mode: 'development',
    watch: true
};

const frontendConf = {
    entry: './src/frontend/ts/ui/AppFrontendInit',
    plugins: [new MiniCssExtractPlugin({filename: 'min.css'})],
    module: {
        rules: [tsRule, cssRule]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve('./src/public/build'),
        filename: 'min.js',
    },

    target: 'web',
    mode: 'development',
    watch: true
};

module.exports = [backendConf, frontendConf];
module.exports.parallelism = 1;