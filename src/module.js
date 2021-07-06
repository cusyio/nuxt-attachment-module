const { resolve } = require('path')

module.exports = function async(moduleOptions) {
  const options = {
    ...this.options.attachment,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'nuxt-attachment.js',
    options
  })
}

module.exports.meta = require('../package.json')
