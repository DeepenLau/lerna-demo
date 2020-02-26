import babel from 'rollup-plugin-babel';

module.exports = {
  input: 'src/index.js',
  output: [
    {
      name: 'devopsUtils.js', // 生成UMD模块的名字
      file: 'lib/utils.umd.js',
      format: 'umd'
    },
    {
      file: 'lib/utils.esm.js',
      format: 'esm'
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
};