<template>
  <div class="talk">
    <button @click="getLoveTalk">添加一句土味情话</button>
    <ul>
      <li v-for="item in loveTalkStore.talkList" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">

  import { reactive } from 'vue'
  import axios from 'axios'
  import { nanoid } from 'nanoid'
  import {useLoveTalkStore} from '@/store/lovetalk'
  const loveTalkStore = useLoveTalkStore()

  // 获取土味情话
  async function getLoveTalk() {
    // 模拟从服务器获取数据
    const {data:{hitokoto}} = await axios.get('https://v1.hitokoto.cn/')
    const obj = {id:nanoid(),content:hitokoto}
    console.log(obj);

    loveTalkStore.talkList.unshift({id:nanoid(),content:hitokoto})
  }

</script>

<style scoped>
    .talk {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }

</style>
