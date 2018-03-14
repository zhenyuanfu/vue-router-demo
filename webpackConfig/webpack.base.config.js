const webpack = require("webpack");
const path = require("path");
module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "build.js"
    },
    module: {
        rules:[
            {
                test:/\.vue/,
                use:[{
                    loader:"vue-loader",
                    options:{
                        js: 'babel-loader',
                        css: 'vue-style-loader!css-loader'
                    }
                }]
            }
        ],
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, "../build"),
        host:"127.0.0.1",
        port:8088
    }
};