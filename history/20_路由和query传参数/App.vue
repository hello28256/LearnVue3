<template>
  <div class="app">
    <!-- <h2 class="title">Vue路由测试</h2> -->
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>

      <!-- to的两种写法 -->
      <!-- 对象和字符串 -->
      <!-- <router-link active-class= "active" :to="{name:'zhuye'}">首页</router-link>
      <router-link active-class= "active" to="/about">关于</router-link> -->
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
  import {RouterLink,RouterView} from 'vue-router'
</script>

<style scoped>

.app {
  background-color: skyblue;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.navigate {
  display: flex;
  gap: 12px; /* 框与框之间的间距 */
  margin-bottom: 20px;
  justify-content: center; /* 居中对齐（可改为 flex-start 靠左） */
}

/* 给每个链接加框 */
.navigate a {
  display: block;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: all 0.2s ease;
}

/* 鼠标悬停效果 */
.navigate a:hover {
  background-color: #f0f8ff;
  border-color: #007bff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 当前激活的路由高亮 */
.navigate a.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}


</style>

