const path = require('path')
const { resolve } = require('path')


export default {
  base: '/cookieClicker/',
  resolve: {
      alias: {
          '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
      }
  },
  build: {
    outDir: '../dist', rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html")
      }
    }
  },
}