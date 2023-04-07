<template>
  <div class="app-container">

    <div style="margin-bottom: 10px;">
      <!-- Excel 导入按钮-->
      <el-button
        @click="dialogVisible = true"
        type="primary"
        size="mini"
        icon="el-icon-download"
      >
        导入Excel
      </el-button>
<!--  Excel 导出按钮-->
      <el-button
        @click="exportData"
        type="primary"
        size="mini"
        icon="el-icon-upload2"
      >
        导出Excel
      </el-button>
    </div>
    <!-- dialog 当点击这个按钮的时候 会弹出一个文件上传表单  dialog的修饰符 sync 加上后就可以自动关闭 右上角的x就好使了 语法糖 -->
    <el-dialog title="数据字典导入" :visible.sync="dialogVisible" width="30%">
      <el-form>
        <el-form-item label="请选择Excel文件">
<!-- 这里面的 请求响应拦截 和ajax请求 和axios没有关系 这里自己处理
on-success： 成功回调  以数据绑定形式出现的on- ， 可以理解为一个事件 钩子函数，当某个事件发生的时候会自动调用
 multiple=false 只能一次性选一个文件 不能一次性选多个   limit=1  只能传一个
 auto-upload =true 选中后自动上传，可设置为false 可以选多个文件，再点击按钮手动确认上传
-->
          <el-upload
            :auto-upload="true"
            :multiple="false"
            :limit="1"
            :on-exceed="fileUploadExceed"
            :on-success="fileUploadSucess"
            :on-error="fileUploadError"
            :action="BASE_API +'/admin/core/dict/import'"
            name="file"
            accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          >
<!-- 接收 xls,    xlsx 文件-->
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">
          取消
        </el-button>
      </div>
    </el-dialog>
<!-- 加载函数load-->
    <el-table :data="list" border row-key="id" lazy :load="load">
      <el-table-column label="名称" align="left" prop="name">
<!--        用模板 易于后续扩展 -->
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="编码" align="left">
        <template slot-scope="{ row }">
         {{ row.dictCode  }}
        </template>
      </el-table-column>
      <el-table-column label="值" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.value  }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import  dictApi  from '@/api/core/dict'

export default {
  data() {
    return {
      dialogVisible: false,   //对话框是否显示
      BASE_API: process.env.VUE_APP_BASE_API,   //获取后端接口地址 从环境变量中拿
      list: []   //数据字典列表
    }
  },
  //页面一加载的时候就展示出来
  created() {
    this.fetchData()
  },
  methods: {
    //获取数据字典列表 顶层类别就是1  对dictApi进行数据绑定
    fetchData() {
      dictApi.listByParentId(1).then(response => {
        this.list = response.data.list
      })
    },


    //上传多于一个文件时
    fileUploadExceed() {
      this.$message.warning('只能选取一个文件')
    },
    //上传成功回调
    fileUploadSucess(response) {
      if (response.code === 0) {
        this.$message.success('数据导入成功')
        this.dialogVisible = false
      } else {
        //业务失败
        this.$message.error(response.message)
      }
    },
    //上传失败回调：通信失败
    fileUploadError(error) {
      this.$message.error('数据导入失败')
    },
    exportData() {
      //导出excel并下载 由于是web端的写 不能用ajax请求，ajax是无状态的，需要显示的去调用刷新当前页面 才能以附件形式下载
      window.location.href = this.BASE_API + '/admin/core/dict/export'
    },
    //加载二级节点
    load(tree, treeNode, resolve) {
      console.log('tree',tree)
      console.log('treeNode',treeNode)
      //获取数据
      dictApi.listByParentId(tree.id).then(response => {
        //把拿到的子节点传递给resolv这个回调函数，自动折叠
        resolve(response.data.list)
      })
    },


  }

}
</script>


