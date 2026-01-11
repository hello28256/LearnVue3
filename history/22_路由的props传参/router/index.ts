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
          // path:'detail/:id/:title/:content',
          component:Detail,
          // 方法一: params传参，开启props传参
          // props: true

          // 方法二: query传参，开启props传参
          props: (route) => {
            return route.query
            // return route.params} //params传参的话直接用方法一方便
          }
          
          // 方法三：默认传参
          // props:{a:1,b:2,c:3},
        }
      ]
		},
		{
      name:'guanyu',
			path:'/about',
			component:About
		}
	]
})
export default router
