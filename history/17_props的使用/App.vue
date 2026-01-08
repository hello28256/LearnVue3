<!-- 父组件App.vue -->
<template>
  <Person :a='1+1' :list="persons"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/PersonView.vue'
  import {type Persons} from './types'
  import {reactive} from 'vue'
  const persons= reactive<Persons>([
    {id:'e98219e12',name:'张三',age:18},
    {id:'e98219e13',name:'李四',age:19},
    {id:'e98219e14',name:'王五',age:20}
  ])

</script>

