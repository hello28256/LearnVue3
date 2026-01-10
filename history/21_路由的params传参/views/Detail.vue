<template>
    <div class="detail">
      <ul class="new-list">
        <!-- <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li> -->
        <!-- <li>编号：{{ route.params.id }}</li>
        <li>标题：{{ route.params.title }}</li>
        <li>内容：{{ route.params.content }}</li> -->
        <li>编号：{{ params.id }}</li>
        <li>标题：{{ params.title }}</li>
        <li>内容：{{ params.content }}</li>
      </ul>
    </div>
</template>

<script setup lang="ts" name="Detail">

  import {toRefs, computed} from 'vue'
  import {useRoute} from 'vue-router'
  const route = useRoute()
  console.log(route.params)
  const {params} = toRefs(route)
  // 这些只在 组件首次创建时执行一次：
  // <script setup> 整体
  // useRoute()
  // toRefs(route)
  // 任何顶层 console.log


  // 有时会变“非响应式”，是因为 路由变化时 route.params 这个对象会被整体替换成一个新对象，而你 toRefs 拿到的 ref 还指向旧对象的属性，所以不再跟新对象走。
  // const {id, title, content} = toRefs(route.params)

  // const id = computed(() => route.params.id)
  // const title = computed(() => route.params.title)
  // const content = computed(() => route.params.content)


</script>

<style scoped>
.detail {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  color: #333;
}
</style>
