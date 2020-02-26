# `@deepexi-devops/utils`

> 一个服务于 devops 项目的通用工具函数库

## 安装

```shell
yarn add @deepexi-devops/utils
```

## 使用

```js
import { sum } from '@deepexi-devops/utils'
```

## 一些记录
1.
想学 lodash 按需引入方式比如
```js
import cloneDeep from 'lodash/cloneDeep'
```
lodash 是一个方法打包成一个包，并且放在根目录，且只有一个默认导出

最后发现并不适合当前场景，当前场景需要的把函数分类存放到文件里，一个文件有多个导出

2.
想去除 index.js 这个总入口文件，直接通过在src目录下创建文件就可以进行打包
在 rollup 下可以设置多入口，但是导出的 umd 和 iife 格式的文件无法进行代码分开
```shell
Error: UMD and IIFE output formats are not supported for code-splitting builds.
```

3.
rollup 默认不会解析导入第三方库，需要导入需要用 @rollup/plugin-node-resolve 这个插件，否则就配置 external 字段证明这是外部模块

