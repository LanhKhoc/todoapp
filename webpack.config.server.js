const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "bundle.css",
  disable: process.env.NODE_ENV === "dev"
});

module.exports = {
  entry: __dirname + "/src/server/index.tsx",

  output: {
    path: __dirname + "/dist",
    filename: "server.js"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },

  plugins: [
    extractSass
  ],

  target: 'node',

  node: {
    fs: 'empty',
    net: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            { loader: "css-loader" }, 
            { loader: "sass-loader" }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico|ttf|otf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
        use: 'file-loader?name=src/shared/assets/img/[name].[ext]'
      }
    ]
  }
}