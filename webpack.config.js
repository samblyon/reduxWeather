module.exports = {
  entry: [
    './src/client_index.jsx'
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  },
  devtool: 'source-maps'
};
