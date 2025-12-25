<template>
<div class="person">
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">增加1岁</button>
  <button @click="showTel">查看联系方式</button>
</div>
</template>
<!-- option+shift+ 向下键===> 复制当前行到下一行-->
 <!-- <script lang="ts">
  export default {
    name:'Person123', // 自定义组件名，不写就是文件名
  }
</script> -->
<script lang="ts" setup name="Person234">
    import {ref} from 'vue';
     // 数据，原来写在data中（注意：此时的name、age、tel数据都不是响应式数据）
    let name=ref("张三")
    let age=ref(18)
    let tel="13888888888"
    function changeName(){
      name.value="zhangsan"
    }
    function changeAge(){
      age.value+=1
    }
    function showTel(){
      alert(tel)
    }
    //return{name, age, tel, changeName, changeAge, showTel}
  
</script>
<!-- vue2可以访问vue3的setup里的属性和方法，反过来不行 -->
<!-- setup先于data methods执行 -->
<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>