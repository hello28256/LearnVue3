<template>
  <div class="news">
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <button @click="showNewsDetail(item)"> 查看新闻</button>
        <RouterLink
          :to="{
            name:'xiangxi',
            // params:{
            //   id:item.id,
            //   title:item.title,
            //   content:item.content
            // }
            query:{
              id:item.id,
              title:item.title,
              content:item.content
            }
          }"
        >
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
        <!-- 右侧：详情区域（嵌套路由出口） -->
    <div class="news-detail">
      <RouterView/> <!-- 👈 关键！子路由在这里渲染 -->
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from 'vue';
  import { RouterLink, RouterView, useRouter } from 'vue-router';
  const router = useRouter();
  // ts  类型接口
  interface NewsInter {
    id: number;
    title: string;
    content: string;
  }
  function showNewsDetail(item:NewsInter) {
    // 这里也可以写replace，push是记录历史，replace是不记录历史
    router.push({
      name: 'xiangxi',
      query: {
        id: item.id,
        title: item.title,
        content: item.content
      }
    });
  }



  const newsList = reactive([
    { id: 1, title: '很好的抗癌食物', content: '西兰花' },
    { id: 2, title: '一夜暴富', content: '学it' },
    { id: 3, title: '震惊万万没想到', content: '明天是周一' },
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
