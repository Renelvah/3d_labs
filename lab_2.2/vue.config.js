module.exports = {
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist',
  filenameHashing: true,
  productionSourceMap: false,
  css: {
    sourceMap: process.env.NODE_ENV === 'development'
  },
  configureWebpack: {
    plugins: []
  },
  devServer: {
    port: 8080
  }
};
