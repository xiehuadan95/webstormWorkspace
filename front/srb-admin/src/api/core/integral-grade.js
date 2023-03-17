//引入axios的初始化模块
import request from '@/utils/request'
import {id} from "html-webpack-plugin/lib/chunksorter";

//我们导出 默认模块，list方法
export default {
  //定义模块成员 ，成员方法获取积分等级列表
  list() {
    //调用axios 的初始化模块，发送远程ajax请求
    return request({
      url: '/admin/core/integralGrade/list',
      method: 'get'
    })  //不在这里做渲染，所以不then .catch
  },
  removeById(id) {
    return request({
      url:'/admin/core/integralGrade/remove/' + id,
      method:'delete'
    })
  },
}
