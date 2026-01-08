<!-- 父组件App.vue -->
<template>
  <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/PersonView.vue'
  import {ref} from 'vue'
  const isShow = ref(true)

</script>

