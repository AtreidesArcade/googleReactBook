module.exports = {
  entry : ['babel-polyfill','./app/index.js'],
  output : {
    path : __dirname + '/build',
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        test : /\.js$/,
        exclude : /node_modules/
      }
    ]
  },
  devServer : {
    port : 3333,
    contentBase : './build',
    inline : true
  }
}