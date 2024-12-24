const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port: 4277,
    host:'0.0.0.0',
    allowedHosts: 'all'
   /*  proxy: {
      "/api": {
        target: "http://tech-zjl:8766",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api/v1' 
        }
      }
    } */
  },
 
})
