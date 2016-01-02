var path = require('path');
var webpack = require('webpack');
var srcPath = path.join(__dirname, 'front');
module.exports = {
  entry: {
    app: ['webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      './front/app'
    ],
    vendor: ['react', 'react-dom', 'alt'],
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js")
  ],
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'front'],
    fallback: path.join(__dirname, "node_modules")
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'front')
    }]
  },
  devServer: {
    contentBase: './public',
  }
};