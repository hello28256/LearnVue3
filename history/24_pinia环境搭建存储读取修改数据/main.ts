import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
const app = createApp(App)  // 创建app实例
const pinia = createPinia() // 创建pinia实例

app.use(pinia)        // 将pinia安装到app实例中
app.mount('#app')   // 挂载app实例到index.html中的#app元素上

