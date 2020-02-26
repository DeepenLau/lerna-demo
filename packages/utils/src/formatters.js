import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn') // 全局使用简体中文
dayjs.extend(relativeTime)

export const formatDate = (time, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!time) {
    return ''
  }
  return dayjs(time).format(format)
}
// 格式化为几天前
export const dateFrom = time => {
  if (!time) {
    return ''
  }
  return dayjs().from(dayjs(time))
}

export const get1stPath = path => path.substr(1).split('/')[0] // eg:取path#/a/b的a

// 首字母大写
export const upper1stLetter = str => str[0].toUpperCase() + str.substr(1)

// 获取动态路由path
export const getDynamicPath = (path, route, startFlag = /^:/) =>
  path
    .split('/')
    .map(item =>
      startFlag.test(item) ? route.params[item.substring(1)] : item
    )
    .join('/')

// 设置动态路由path
export const setDynamicPath = (path, routeParmas) => {
  Object.keys(routeParmas).forEach(key => {
    path = path.replace('_' + key, routeParmas[key])
  })
  return path
}

// json字符传返回json格式
export const JsonParse = str => {
  return JSON.parse(str || '{}')
}

// 参数：毫秒
// 格式为一个包含时、分、秒的对象
// {
//   hours: 1,  //时
//   minutes: 1,   //分
//   seconds: 1 // 秒
// }
export const formatDuring = mss => {
  var days = parseInt(mss / (1000 * 60 * 60 * 24))
  var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = (mss % (1000 * 60)) / 1000
  return {
    hours,
    minutes,
    seconds,
  }
}
