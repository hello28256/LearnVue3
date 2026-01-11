import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'

const router = createRouter({
  // history:createWebHashHistory(),
	history:createWebHistory(),
	routes:[
		{
      name:'zhuye',
			path:'/home',
			component:Home
		},
    {
      name:'xinwen',
			path:'/news',
			component:News,
      children:[
        {
          name:'xiangxi',
          path:'detail',
          component:Detail,
          // query传参，开启props传参
          props: (route) => {
            return route.query
          }
        }
      ]
		},
		{
      name:'guanyu',
			path:'/about',
			component:About
		},
    // 路由重定向，访问/时，自动跳转到/home
    {
      path:'/',
      redirect:'/home'
    }
	]
})
export default router
