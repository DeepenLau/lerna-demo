# lerna 使用文档

## lerna 是什么
单仓库多包版本管理库
[官网](https://lerna.js.org/)

## 添加模块

1. 在 packages 目录下手动创建目录，并初始化 package.json
`yarn init -y`
2. 并且 name 字段的命名增加命名空间 如：`@deepexi-devops/module-1`
3. main 字段指定好改包的导出文件，一般是代码转义打包后的压缩文件

> 也可以通过 `lerna create` 命令创建

## 模块间引用
1. 初始化 执行`lerna bootstrap` 会 link packages 目录下的包，并且安装所有包的依赖
2. 被依赖的模块根据 package.json 的字段设定好之后，在其他模块通过和平时一样的引入 npm 模块方法引入即可
   例如在 packages/vue-component-2/src/App.vue 下应用 vue-component 模块：`import vueComponent from '@deepexi-devops/vue-component'`

## 模块版本管理的两种模式
> 这里的默认前提是 git 处于完全提交状态，没有暂存的内容，因为会自动操作 git 提交版本号信息
> 不想自动操作 git 命令的话，加上 --skip-git

执行 `lerna publish` 的相关行为

- 统一模式（默认）
  执行上述命令后，所有的包，包括本仓库的版本都会进行统一处理
- 独立模式
  执行上述命令后，会依次询问有改动的包的更新版本号，没改动过的不会询问，所以这个模式可以让各个包有自己的独立版本号

切换方式是在 lerna.json 修改 version 字段
`"version": "independent"` 独立模式
`"version": "1.0.0"` 统一模式，数字为具体的版本号


## workspace
workspace 主流用的是 yarn 的 workspace 功能
为的是在 yarn install 的时候，自动 link 工作区的包，而不是去远程下载回来
并且为 link 增加作用域，避免使全局的 link 混乱，影响其他项目
[yarn workspace 官网介绍](https://classic.yarnpkg.com/zh-Hans/docs/workspaces)

配置：
```json
// lerna.json
{
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

```json
// root package.json
{
  "private": true,
  "workspaces": [
    "packages/*"
  ],
}
```

> 所以目前的主流用法都是 lerna 管理版本和发包，yarn 管理依赖 二者结合使用

## 更多用法
参考[官网](https://lerna.js.org/)或者直接打印 `lerna --help`

## 注意点
1.如果模块 package.json 里面有个 private: true 的字段
  执行 `lerna list` 的时候就会扫描不出这个模块

2.首次执行 `lerna publish` 可能会出现
  `You must sign up for private packages`
  这个问题主要在于首次发包，需要先进入这个包，手动单独发一次这个包，执行 `npm publish --access public`