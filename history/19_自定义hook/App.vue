<!-- 父组件App.vue -->
<template>

  <div>
    <h1>sum: {{sum}}</h1>
    <button @click="increment">点我加1</button>
    <button @click="decrement">点我减1</button>
    <hr>
  <ul>
    <button @click="getDog">获取狗狗图片</button>
  </ul>
  <img v-for="(dogUrl, index) in dogList" :key="index" :src="dogUrl" alt="Dog Image" />
  <span v-show="dogList">加载中......</span><br>
  </div>
</template>

<script lang="ts" setup name="App">


  import useSum from './hooks/useSum.ts';
  import useDog from './hooks/useDog.ts';

  const {sum,increment,decrement} = useSum();
  const {dogList, getDog} = useDog();
</script>

<style scoped>

  #img {
    width: 20px;
  }
</style>

