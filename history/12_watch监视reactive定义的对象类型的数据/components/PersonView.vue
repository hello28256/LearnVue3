<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{person.name}}，年龄：{{person.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <hr>
    <h2>测试：{{obj.a.b.c}}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script lang="ts" setup name="PersonView">
  import {watch, reactive} from 'vue'
  // 数据
  const person = reactive({
    name:"张三",
    age:18
  })
  const obj = {a :{b :{c : 666}}}

  // 监视，情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
  const stopWatch = watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
    if (newValue.age>=20)
    {
      stopWatch() // 停止监视
    }

  })
  watch(obj,(newValue,oldValue)=>{
    console.log('Obj变化了',newValue,oldValue)
  })

  // 方法
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changePerson(){
    Object.assign(person,{name:'李四',age:80})
  }
  function test(){
    obj.a.b.c = 888
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
