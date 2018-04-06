const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "bundle.css",
  disable: process.env.NODE_ENV === "dev"
});

module.exports = {
  entry: __dirname + "/src/client/index.tsx",

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },

  devtool: 'source-map',

  devServer: {
    port: 3000,
    contentBase: __dirname,
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    extractSass
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico|ttf|otf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
        use: 'file-loader?name=src/shared/assets/img/[name].[ext]'
      }
    ]
  }
}