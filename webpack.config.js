const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development', 
    devServer: {
        contentBase: './dist'
    },   
    
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // clean folder 'dist' with new build
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Task 2',
        }),
        new CleanWebpackPlugin(),
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [

            //add js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },

            //add images
            {
                test: /\.(ico|gif|png|jpg|jpeg)$/i,
                use: ["file-loader"]
            },

            // add fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: ["file-loader"]
            },


            // load css in DOM
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },

            // Babel 
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                  }
                }
            },                    
        ],
    }
}