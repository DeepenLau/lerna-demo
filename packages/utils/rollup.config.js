import fs from 'fs';
import path from 'path';

import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

function find(path) {
  let results = []
  const dirs = fs.readdirSync(path)
  dirs.forEach((file) => {
    file = path + '/' + file
    const stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      results = results.concat(find(file))
    } else {
      results.push(file)
    }
  })
  return results
}

console.log(path.resolve(__dirname, './src'))

const inputs = find(path.resolve(__dirname, './src'))

module.exports = {
  input: inputs,
  output: [
    // {
    //   name: 'devopsUtils.js', // 生成UMD模块的名字
    //   file: 'lib/utils.umd.min.js',
    //   format: 'umd'
    // },
    {
      dir: 'lib',
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