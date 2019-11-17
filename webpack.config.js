const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/index.js',
  devtool: false,
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ],
  },
  externals: [
    nodeExternals({
      modulesFromFile: {
        include: ['devDependencies', 'peerDependencies'],
        exclude: ['dependencies'],
      }
    })
  ]
}
