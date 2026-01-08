<template>
  <div class="person">
    <ul>
      <li v-for="person in personList" :key="person.id">
        姓名：{{person.name}}，年龄：{{person.age}}
      </li>
    </ul>
  </div>
</template>
​
<script lang="ts" setup name="Person">
  import { type Persons } from '../types';
  const personList : Persons =[
    {id:'001',name:'张三',age:18},
    {id:'002',name:'李四',age:20},
    {id:'003',name:'王五',age:22},
  ]
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
