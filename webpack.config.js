const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');

module.exports = {
  entry: [
    bootstrapEntryPoints.dev,
    // bootstrapEntryPoints.prod,
    "./src/main.tsx"
  ],
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist")
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],

    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },

      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // NODE_ENV: JSON.stringify('production')
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new ExtractTextPlugin("styles.css"),
    // new webpack.optimize.UglifyJsPlugin()
  ]
};