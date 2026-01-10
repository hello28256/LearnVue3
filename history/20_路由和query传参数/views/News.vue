<template>
  <div class="news">
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <!-- <RouterLink to='/news/detail'>{{ item.title }}</RouterLink> -->
        <!-- 第一种方法:跳转并携带query参数 to的字符串方法 -->
        <!-- <router-link :to="`/news/detail?id=${item.id}&title=${item.title}&content=${item.content}`">{{ item.title }}</router-link> -->
        <!-- 第二种方法:跳转并携带query参数 to的对象方法 -->
        <router-link
          :to="{
            path: '/news/detail',
            query: {
              id: item.id,
              title: item.title,
              content: item.content
            }
          }">
          {{ item.title }}
        </router-link
        >
      </li>
    </ul>
        <!-- 右侧：详情区域（嵌套路由出口） -->
    <div class="news-detail">
      <RouterView /> <!-- 👈 关键！子路由在这里渲染 -->
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import type router from '@/router';
  import { reactive } from 'vue';
  import { RouterLink } from 'vue-router'


  const newsList = reactive([
    { id: 1, title: '很好的抗癌食物', content: '西兰花' },
    { id: 2, title: '一夜暴富', content: '学it' },
    { id: 3, title: '震惊万万没想到', content: ' 明天是周一' },
    { id: 4, title: '好消息！！好消息！！', content: '快过年了' },
  ])

</script>

<style scoped>
  .news {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding: 20px; /* 👈 加内边距，确保内容可见 */
  }
</style>
