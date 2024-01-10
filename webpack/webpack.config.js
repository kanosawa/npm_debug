const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, './'),
      }
    ],
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
