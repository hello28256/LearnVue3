<template>
  <div class="person">
    <ul>
      <li v-for="person in list" :key="person.id">
        姓名：{{person.name}}，年龄：{{person.age}}
      </li>
    </ul>
    <!-- <h1>{{a}}</h1> -->
  </div>
</template>
​
<script lang="ts" setup name="Person">
  import { type Persons } from '../types';
  // 仅接收父组件传递的数据
  // const props=defineProps(['a','list'])

  // 接收父组件传递的数据,限制类型
  // defineProps<{a:number,list:Persons}>()


// 第三种写法：接收+限制类型+指定默认值+限制必要性
  withDefaults(defineProps<{list:Persons}>(),{list:()=>[{id:'e98219e115',name:'赵六',age:21}]})
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
