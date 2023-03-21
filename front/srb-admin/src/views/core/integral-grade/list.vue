<template>
  <!--  自定义组件 一般只有一个div块-->
<!--  获取到的list数据渲染-->
  <div class="app-container">
<!-- 表格-->
    <el-table  :data="list"  border stripe >
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="borrowAmount" label="借款额度" ></el-table-column>
      <el-table-column prop="integralStart" label="积分区间开始" ></el-table-column>
      <el-table-column prop="integralEnd" label="积分区间结束"></el-table-column>
      <el-table-column  label="操作">
<!-- 取id-->
        <template slot-scope="scope">
<!-- scope.row 当前行的所有数据 上下文对象-->
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeById(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//引入api模块
import integralGradeApi from '@/api/core/integral-grade'

export default {
  data() {
    return {
      list:[]  //积分等级列表
    }
  },
  //页面一加载就调
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      integralGradeApi.list().then(response=>{
        this.list=response.data.list
      })
    },
    removeById(id) {
      //debugger 断点调试
      console.log('id',id)

      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'   //sucess ,info,error warning
      })
        .then(() => {
        return integralGradeApi.removeById(id)
      })
        .then(response=>{
          //element 的消息提示框
          this.$message({
            //如果没有 showclose 弹出的框就没有关闭的叉在后面
            // showClose: true,
            message: response.message,
            type: 'success'
          })
          //  一旦删除成功
          this.fetchData()
        })
        .catch((error) => {
          console.log('catch的error',error)
          if(error=='cancel') {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          }
      })

    }
  }
}
</script>
<!--<style scoped></style>-->
