const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    })
  ],

  // uncomment to make it work
  // resolve: {
  //   roots: [
  //     __dirname
  //   ]
  // }
};
