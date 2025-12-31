<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【复杂类型】数据</h1>
    <h2>姓名：{{person.name}}，年龄：{{person.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="PersonView">
  import {ref,watch} from 'vue'
  // 数据
  const person = ref({
    name:"张三",
    age:18
  })
  // 监视，情况二：监视【ref】定义的【复杂类型】数据
  const stopWatch = watch(person,(newVal,oldVal)=>{
    console.log('person数据变化了');
    console.log('旧值为：',oldVal);
    console.log('新值为：',newVal);
    if (newVal.age>=20){
      stopWatch() // 停止监视
    }
  },{deep:true}) // 深度监视

  // 方法
  function changeName(){
    person.value.name += '~'
  }
  function changeAge(){
    person.value.age += 1
  }
  function changePerson(){
    person.value = {name:'李四',age:90}
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
