//@ts-check

'use strict';

const path = require('path');
const WebpackObfuscator = require('webpack-obfuscator');

const config = {
    target: 'node',
    mode: 'none',

    entry: './src/MyLibrary.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'MyLibrary.js',
        libraryTarget: 'commonjs2'
    },

    devtool: 'nosources-source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        // new WebpackObfuscator({
        //     // compact: true,
        //     // // controlFlowFlattening: true,
        //     // // controlFlowFlatteningThreshold: 1,
        //     // numbersToExpressions: true,
        //     // simplify: true,
        //     // shuffleStringArray: true,
        //     // splitStrings: true,
        //     // stringArrayThreshold: 1
        // })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            // {
            //     test: /.js$/,
            //     exclude: /node_modules/,
            //     enforce: 'post',
            //     use: [
            //         {
            //             loader: WebpackObfuscator.loader,
            //             options: {
            //                 // compact: true,
            //                 // // controlFlowFlattening: true,
            //                 // // controlFlowFlatteningThreshold: 1,
            //                 // numbersToExpressions: true,
            //                 // simplify: true,
            //                 // shuffleStringArray: true,
            //                 // splitStrings: true,
            //                 // stringArrayThreshold: 1
            //             }
            //         }
            //     ]
            // }
        ]
    }
}
module.exports = config;
