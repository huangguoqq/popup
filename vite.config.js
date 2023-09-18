module.exports = {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'popup',
    },
    rollupOptions: {
      external: ['vue'], // 如果你的组件依赖了其他的库，可以在这里指定外部依赖
      output: {
        globals: {
          vue: 'Vue', // 如果有外部依赖，这里需要指定全局变量的名称
        },
      },
    },
  },
};