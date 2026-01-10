<template>
  <div>
    <h2>当前求和为{{ sum }}</h2>
    <button @click="changeSum">点击+1</button>
  </div>
</template>
​
<script lang="ts" setup name="Person">

  // 创建阶段：setup
  // 挂载阶段：onBeforeMount、onMounted
  // 更新阶段：onBeforeUpdate、onUpdated
  // 卸载阶段：onBeforeUnmount、onUnmounted
  // Vue3生命周期钩子
  import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'

  // 数据
  const sum =ref(0)

  // 方法
  function changeSum(){
    sum.value += 1
  }

  console.log('setup')
  // 生命周期钩子函数
  onBeforeMount(()=>{
    console.log('挂载前')
  })
  onMounted(()=>{
    console.log('挂载后')
  })
  onBeforeUpdate(()=>{
    console.log('更新前')
  })
  onUpdated(()=>{
    console.log('更新')
  })
  onBeforeUnmount(()=>{
    console.log('卸载前')
  })
  onUnmounted(()=>{
    console.log('卸载后')
  })

</script>


<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    #button{
      border: 30px;
    }
</style>
