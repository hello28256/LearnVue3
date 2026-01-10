
import { ref } from 'vue'

export default function useSum() {

  const sum  = ref(0)


  // 方法
  const increment = ()=>{
    sum.value += 1
  }

  const decrement = ()=>{
    sum.value -= 1
  }


  // 向外部暴露数据和方法
  return {sum,increment,decrement}
}
