class CopyrightWebpackPlugin {
  constructor(options) { // 这里可以调用参数进行传递。
    console.log('插件被使用了', options.name)
  }
  apply(compiler) { // compiler为webpack实例，存放了webpack.config.js中配置和打包的内容
    compiler.hooks.emit.tap('CopyrightWebpackPlugin', () => {
      console.log('compiler')
    })

    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (Compilation, cb) => { // Compilation存放着跟this打包相关的内容
      debugger // 这里使用node调试工具对webpack进行调试
      Compilation.assets['copyright.txt'] = { // 简单的插件，可以打包生成copyright.txt文件
        source: function() {
          return 'copyright by janna'
        },
        size: function() {
          return 18
        }
      }
      cb()
    })
  }
}
module.exports = CopyrightWebpackPlugin