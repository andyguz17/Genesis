const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },

  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 4000,
    hot: true
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};
