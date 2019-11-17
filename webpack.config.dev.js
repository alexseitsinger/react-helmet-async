const path = require('path')


module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve('./dist'),
    filename: '[name].dev.js',
    sourceMapFilename: '[name].dev.js.map',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
