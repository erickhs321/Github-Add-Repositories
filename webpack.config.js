module.exports = {
  entry: ['@babel/polyfill', './src/main.js'], //arquivo principal
  output: {
    path: __dirname + '/public',
    filename:'bundle.js'
  }, //lugar para enviar o código transpilado para versão antiga do javascript
  devServer: {
    contentBase: __dirname + '/public',
  },
  module: {
    rules: [
      {
        test:  /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' //qual loader que vai ser usado
        }
      }
    ] //como o webpack deve ser comportar quando o usuario importar js
  }
};