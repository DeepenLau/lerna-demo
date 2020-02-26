/**
 * 根据RFC, 99%正确率的表达式 http://emailregex.com/
 */
export const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 手机正则
export const cellPhone = /^1[3-9]\d{9}$/

// QQ正则
export const qqPattern = /^[1-9][0-9]{4,10}$/

// url
export const url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=]+$/

// gitRepo url
export const gitRepoUrl = /^(?:http(s)?:\/\/|git@[\w.-_]+:[\w.-_]+)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=]+/

// app名字
export const appNamePattern = /^[a-z]([-a-z0-9]*[a-z0-9])?$/

// TODO 后端分组名名正则表达式
export const groupIdPattern = /^([a-zA-Z][0-9a-zA-Z]*(.[a-zA-Z][0-9a-zA-Z]*)+)$/

// artifactId正则 数字,字母,中划线
export const numberLetterDashPattern = /^[a-zA-Z0-9-]+$/

// package正则 数字,字母,中划线
export const packagePattern = /^([a-zA-Z][0-9a-zA-Z]*(.[a-zA-Z][0-9a-zA-Z]*)*)$/

// 固话
export const landlinePhone = /((d{3,4})|d{3,4}-|s)?d{8}/

export const tableNamePattern = /^[a-zA-Z_]+$/
