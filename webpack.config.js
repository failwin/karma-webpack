const path = require("path");
const webpack = require("webpack");

const rootPath = __dirname;
const srcPath = path.join(rootPath, 'src');

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        script: path.resolve(srcPath, "./entry.js")
    },

    output: {
        path: "./dist",
        filename: "script.js",
        pathinfo: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'stage-0',
                            ['env', {
                                targets: {
                                    browsers: [
                                        'last 5 versions',
                                        'iOS 8.1',
                                    ],
                                },
                            }],
                        ],
                        plugins: ['transform-runtime'],
                    },
                },
            },
            {
                test: /\.js$/,
                include: srcPath,
                use: {
                    loader: 'istanbul-instrumenter-loader'
                }
            },
        ]
    }
};
