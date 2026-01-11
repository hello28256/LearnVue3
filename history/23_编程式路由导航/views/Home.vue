<template>
  <div class="home">
    <img id="img" src="https://images.dog.ceo//breeds//pembroke//n02113023_6015.jpg" alt=""/>
  </div>
</template>

<script setup lang="ts" name="Home">
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  // 看3秒后自动跳转到新闻页
  // onMounted(() => {
  //   setTimeout( ()=> {
  //     router.push("/news")
  //   }, 3000);
  // });
</script>

<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
