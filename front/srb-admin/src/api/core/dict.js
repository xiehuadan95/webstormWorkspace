//引入axios的初始化模块
import request from '@/utils/request'

//导出默认模块
export default {
  listByParentId(parentId) {
    return request({
      url: `/admin/core/dict/listByParentId/${parentId}`,
      method:'get'
    })
  },

}
