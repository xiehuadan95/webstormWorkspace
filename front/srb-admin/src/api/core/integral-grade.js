//引入axios的初始化模块
import request from '@/utils/request'


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
  //新增的时候传数据对象过来 因为接口需要传入的是requestBody 需要传入一个json对象，需要用关键字 data
  save(integralGrade) {
    return request({
      url:'/admin/core/integralGrade/save',
      method:'post',
      data: integralGrade
    })
  },
  //回显api 修改的时候跳转页面将查询到的数据进行回显 然后修改
  getById(id){
    return request({
      url: '/admin/core/integralGrade/get/'+id,
      method:'get',
    })
  },

  updateById(integralGrade){
    return request({
      url:'/admin/core/integralGrade/update',
      method:'put',
      data: integralGrade
    })
  }
}
