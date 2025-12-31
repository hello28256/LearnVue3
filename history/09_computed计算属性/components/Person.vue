<template>
<div class="person">
  姓：<input type="text" v-model="firstName"><br>
  名：<input type="text" v-model="lastName"><br>
  全名：<span>{{fullName}}</span> <br>
  <button @click="changeFullName">修改全名</button>
</div>
</template>
<script lang="ts" setup name="Person">
  import { reactive, ref, computed} from 'vue';

  let firstName = ref("zhang")
  let lastName = ref("san")
  
  // 只能读取，不能修改
/*   let fullName = computed(
    ()=>{
      return firstName.value + "-" + lastName.value
    }
  ) */

  // 能读取也能修改
  // computed和函数的区别是computed计算属性有缓存
  let fullName = computed({
    // 读取
    get(){
      return firstName.value + '-' + lastName.value
    },
    // 修改
    set(val){
      console.log('有人修改了fullName',val)
      firstName.value = val.split('-')[0]
      lastName.value = val.split('-')[1]
    }
  })

  function changeFullName(){
    fullName.value = 'li-si'
  }

</script>

<style scoped>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    #button{
      border: 30px;
    }
</style>