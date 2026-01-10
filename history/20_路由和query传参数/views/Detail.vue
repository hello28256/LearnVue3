<template>
    <div class="detail">
      <ul class="new-list">
        <li>编号：{{ query.id }}</li>
        <li>标题：{{ query.title }}</li>
        <li>内容：{{ query.content }}</li>
      </ul>
    </div>
</template>

<script setup lang="ts" name="Detail">

  import {toRefs} from 'vue'
  import {useRoute} from 'vue-router'
  const route = useRoute()
  const {query} = toRefs(route)


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
