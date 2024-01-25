// webpack.config.js
const path = require('path');

module.exports = {
    entry: {
        firstEntry: './src/index1.js',
        secondEntry: './src/index2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    mode: 'development'
};
