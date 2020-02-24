module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  chainWebpack: (config) => {
    // @see https://github.com/vuejs/vue-cli/issues/4749#issuecomment-546844477
    config.resolve.symlinks(false)
  }
}