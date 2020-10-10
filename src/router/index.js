import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/Welcome.vue'
import List from '../components/dist/List.vue'
import Main from '../components/dist/Main.vue'
import Photo from '../components/dist/Photo.vue'
import WriteBlog from '../components/out/WriteBlog.vue'
import Demo from '../components/dist/Demo.vue'
import Board from '../components/dist/Board.vue'
import UserBlog from '../components/inner/UserBlog.vue'
import Myself from '../components/dist/Myself.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/main' }, 
  { path: '/welcome', 
    component: Welcome ,
    children:[
      { path: '/main', component:Main },
      { path: '/list', component:List },
      { path: '/photo', component:Photo },
      { path: '/demo', component:Demo },
      { path: '/board', component:Board },
      { path: '/userBlog/:id', component:UserBlog }
    ]
  },
  { path: '/writeBlog', component:WriteBlog },
  { path:'/myself', component:Myself}

]

const router = new VueRouter({
  routes
})

export default router
