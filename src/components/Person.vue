<template>
<div class="person">
  <h2>一辆{{car.brand}}的价格是{{car.price}}</h2>
  <button @click="addPrice">增加价格</button>
  <ul>
    <li v-for = "game in games" :key = "game.id">{{game.name}}</li>
  </ul>
  <button @click="changeFirstGameName">修改第一个游戏名称</button>

  <hr>
  <h2>测试：{{obj.a.b.c.d}}</h2>
  <button @click="changeobj">修改obj</button>
</div>
</template>
<!-- option+shift+ 向下键===> 复制当前行到下一行-->
 <!-- <script lang="ts">
  export default {
    name:'Person123', // 自定义组件名，不写就是文件名
  }
</script> -->
<script lang="ts" setup name="Person234">
  import {reactive} from 'vue'
  let car = reactive({brand:"奔驰",price:100})
  let games = reactive([
    {id: "aefasd01",name: "王者荣耀"},
    {id: "aefasd02",name: "穿越火线"},
    {id: "aefasd03",name: "生死狙击"}
  ])
  let obj = reactive({a: {b: {c: {d: 666}}}})

  function addPrice(){
    car.price+=10
  }
  function changeFirstGameName(){
    games[0].name = '4399小游戏'
  }
  
  function changeobj(){
    obj.a.b.c.d = 999
  }
  
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
    #button{
      border: 30px;
    }
</style>