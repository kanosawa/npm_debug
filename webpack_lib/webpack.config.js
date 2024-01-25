// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-library.bundle.js',
        library: 'myLibrary',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    mode: 'development'
};
