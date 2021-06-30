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
  },
  chainWebpack: config => {
    config.module
        .rule('glb')
        .test(/\.(glb|gltf)$/)
        .use('file-loader')
        .loader('file-loader')
  }
};
