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
  import {useRoute, useRouter} from 'vue-router'

  defineProps(['id','title','content'])

</script>

<style scoped>
.detail {
  padding: 20px;
  background: rgb(26, 1, 1);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(235, 98, 98, 0.1);
  color: #f14a4a;
}
</style>
