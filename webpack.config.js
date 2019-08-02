const path = require('path');
const GasPlugin = require("gas-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }      
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]    
  },
  plugins: [
    new GasPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/index.html' },
      { from: 'src/css.html' },
      { from: 'src/feedback.jq1102.min.js.html' },
    ])
  ]
};
