import { createApp } from "vue";
import App from "./App.vue";
import router from './router' // 导入路由器

const app = createApp(App)  // 创建app实例
app.use(router)
app.mount('#app')   // 挂载app实例到index.html中的#app元素上

