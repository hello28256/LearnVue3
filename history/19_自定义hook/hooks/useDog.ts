import { onMounted, reactive } from "vue";
import axios, {AxiosError} from "axios";



export default function useDog() {
  const dogList = reactive(<string[]>([]));

  // 获取狗狗图片列表
  async function getDog() {
    try {
      const {data:{message:imageUrl}}= await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
      dogList.push(imageUrl);
    } catch (error) {
       // 处理错误
      const err = <AxiosError>error
      console.log(err.message)
    }
  }
  onMounted(() => {
    getDog()
  })

  return { dogList, getDog};
}
