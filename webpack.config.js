const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDevelopment) => !isDevelopment ? {} : {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    hot: true,
    open: true,
  }
}

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  ...devServer(development),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/inline',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Task2',
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
});
