import { defineStore } from 'pinia'

export const useCountStore = defineStore('count',{
  // 动作
  actions:{
    increment(value:number){
      this.sum += value
    }
  },
  // 状态
  state(){
    return {
      sum: 6,
      school: 'atguigu',
      address: '北京'
    }
  },
  // 计算
  getters:{}

})
