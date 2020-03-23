const path = require('path');
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name: 'janna' // 这里传入一些变量可以供插件调用
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}