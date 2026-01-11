<template>
    <div class="detail">
      <ul class="new-list">
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
      </ul>
    </div>
</template>

<script setup lang="ts" name="Detail">

  import {useRoute} from 'vue-router'
  const route = useRoute()
  defineProps(['id','title','content'])

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
