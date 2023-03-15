import request from '@/utils/request'
//登录 登录页面继续用mock的接口 需要手动加baseURL 否则根据导入的request模块 会拼接为 localhost
export function login(data) {
  return request({
    baseURL: '/dev-api',
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}
//获取用户信息
export function getInfo(token) {
  return request({
    baseURL: '/dev-api',
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}
//登出
export function logout() {
  return request({
    baseURL: '/dev-api',
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
