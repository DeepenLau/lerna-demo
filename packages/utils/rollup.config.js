import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

module.exports = {
  input: 'src/index.js',
  output: [
    {
      name: 'devopsUtils.js', // 生成UMD模块的名字
      file: 'lib/utils.umd.min.js',
      format: 'umd'
    },
    {
      file: 'lib/utils.esm.min.js',
      format: 'esm'
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    terser(),
  ]
};