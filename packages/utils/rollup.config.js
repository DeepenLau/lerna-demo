import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

module.exports = {
  input: './src/index.js',
  output: [
    {
      file: 'lib/index.es.min.js',
      format: 'es',
    },
  ],
  browser: true,
  external: ['dayjs', 'dayjs/plugin/relativeTime', 'dayjs/locale/zh-cn'],
  plugins: [
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    // terser(),
  ]
};