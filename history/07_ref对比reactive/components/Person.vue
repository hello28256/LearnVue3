<template>
<div class="person">
  <h2>一辆{{car.brand}}的价格是{{car.price}}</h2>
  <button @click="addPrice">增加价格</button>
  <button @click="changeCar">修改车</button>
  <hr>
  <h2>一辆{{car1.brand}}的价格是{{car1.price}}</h2>
  <button @click="addPrice1">增加价格</button>
  <button @click="changeCar1">修改车</button>
  <ul>
    <li v-for = "game in games" :key = "game.id">{{game.name}}</li>
  </ul>
  <button @click="changeFirstGameName">修改第一个游戏名称</button>


</div>
</template>
<script lang="ts" setup name="Person234">
  import {ref} from 'vue'
  import {reactive} from 'vue'
  let car = ref({brand:"奔驰",price:100})
  let car1 = reactive({brand:"宝马",price:200})
  let games = ref([
    {id: "aefasd01",name: "王者荣耀"},
    {id: "aefasd02",name: "穿越火线"},
    {id: "aefasd03",name: "生死狙击"}
  ])
  let obj=reactive({x:999})
  console.log(obj)
// Proxy(Object) {x: 999}
// [[Handler]]
// : 
// MutableReactiveHandler
// [[Target]]
// : 
// Object
// [[IsRevoked]]
// : 
// false
  console.log(games)
//   RefImpl {dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: Array(3), _value: Proxy(Array)}
// dep
// : 
// Dep {computed: undefined, version: 0, activeLink: undefined, subs: Link, map: undefined, …}
// __v_isRef
// : 
// true
// __v_isShallow
// : 
// false
// _rawValue
// : 
// (3) [{…}, {…}, {…}]
// _value
// : 
// Proxy(Array) {0: {…}, 1: {…}, 2: {…}}
// value
// : 
// Proxy(Array)
// [[Prototype]]
// : 
// Object
//若ref接收的是对象类型，内部其实也是调用了reactive函数
// 若需要一个基本类型的响应式数据，必须使用ref。

// 若需要一个响应式对象，层级不深，ref、reactive都可以。

// 若需要一个响应式对象，且层级较深，推荐使用reactive。

  function addPrice(){
    car.value.price+=10
  }
 
  function changeCar(){
    car.value={brand:"雅迪",price:1}
  }
  function addPrice1(){
    car1.price+=10
  }
 
  function changeCar1(){
    // car1={brand:"雅迪1",price:10}
    Object.assign(car1,{brand:"雅迪1",price:10})
  }
  function changeFirstGameName(){
    games.value[0].name = '4399小游戏'
  }
  
  
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