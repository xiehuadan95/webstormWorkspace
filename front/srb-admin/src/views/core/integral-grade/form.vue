<template>
  <!--  自定义组件 一般只有一个div块-->
<!--  模板渲染-->
  <div class="app-container">
<!-- 输入表单-->
    <el-form label-width="120px">
      <el-form-item label="借款额度">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0"/>
      </el-form-item>
      <el-form-item label="积分区间开始">
        <el-input-number v-model="integralGrade.integralStart" :min="0"/>
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number v-model="integralGrade.integralEnd" :min="0"/>
      </el-form-item>
      <el-form-item >
       <el-button
         :disabled="saveBtnDisabled"
          type="primary"
         @click="saveOrUpdate()"
       >
         保存
       </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//引入api模块
import integralGradeApi from '@/api/core/integral-grade'
import {resetRouter} from "@/router";


export default {
  //数据模型data
  data() {
    return {
      saveBtnDisabled: false,  //是否禁用保存按钮，防止表单重复提交 默认不禁用
      //定义数据模型 积分等级对象
      integralGrade:{},
    }
  },
  created() {
    //当路由中存在id属性的时候就是回显表单，需要调用回显数据的接口
    if(this.$route.params.id){
    this.fetchById(this.$route.params.id)
    }
  },

  methods: {
    fetchById(id){
      integralGradeApi.getById(id).then(response=>{
        this.integralGrade=response.data.record
      })
    },
    //保存或更新
    saveOrUpdate() {
      //禁用保存按钮
      this.saveBtnDisabled=true
      if(!this.integralGrade.id){
        //调用新增
        this.saveData()
      }else {
        //调用更新
        this.updateData()
      }
    },
    //需要参数integralGrade 通过表单的字段填充上
    saveData() {
      integralGradeApi.save(this.integralGrade).then(response=>{
        this.$message({
          type: 'success',
          message: response.message
        })
        //保存完以后进行路由跳转到 积分等级列表
        this.$router.push('/core/integral-grade/list')
        //简写方式
        //this.$message.success(response.message)
      })
    },
    updateData() {
      integralGradeApi.updateById(this.integralGrade).then(response=>{
        this.$message.success(response.message)
        this.$router.push('/core/integral-grade/list')
      })
    },

  }

}
</script>
