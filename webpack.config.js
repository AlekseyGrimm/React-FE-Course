const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

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
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },

            //add fonts and svg
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },

            // load css in DOM
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ],
    }
}