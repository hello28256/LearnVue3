<template>
<div class="person">
  <h2>姓名：{{person.name}} --{{name}}</h2>
  <h2>年龄：{{person.age}} --{{nl}}</h2>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">修改年龄</button>
</div>
</template>
<script lang="ts" setup name="Person">
  import { reactive, toRefs, toRef} from 'vue';

  let person = reactive({name: '张三',age: 18})

  // 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
  let {name, age} = toRefs(person)

  // 通过toRef将person对象中的gender属性取出，且依然保持响应式的能力
  let nl = toRef(person, 'age')

  function changeName(){
    person.name += "~"
  }
  function changeAge(){
    nl.value+=1
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