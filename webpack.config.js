const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  entry: './src/index.tsx',
  mode: 'development',

  output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
    },
  plugins: [
      new HtmlWebpackPlugin({
              filename: 'index.html',
              template: path.join(__dirname, '/src/index.html'),
            }),
            new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
          hot: true,
          historyApiFallback: true,
          port: 3000,
        },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: 'tslint-loader',
        include: PATHS.src,
      },
      {
        test: /\.(js|ts)x?$/,
        use: 'babel-loader',
        include: PATHS.src,
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
       },
      {
        test: /\.(png|svg|jpg)$/,
        use: 'url-loader?limit=8192',
      },
    ],
  },
};