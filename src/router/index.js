import Vue from 'vue'
import Router from 'vue-router'
import jianli from '@/components/jianli'
import Home from '@/components/content/home'
import MyMessage from '@/components/content/myMessage'
import Skill from '@/components/content/skill'
import Experience from '@/components/content/experience'
import Produce from '@/components/content/produce'
import FocusMe from '@/components/content/focusMe'

Vue.use(Router)

export default new Router({
   mode:'history',
 linkActiveClass:'m-r-ative',
  routes: [
    {
      path: '/',
      name: 'jianli',
      redirect:'/home',
      component: jianli,
      children:[{
        path: 'home',
        name: 'home',
        component: Home
      },
        {
          path: 'myMessage',
          name: 'myMessage',
          component: MyMessage
        },{
          path: 'skill',
          name: 'skill',
          component: Skill
        },{
          path: 'experience',
          name: 'experience',
          component: Experience
        },
        {
          path: 'produce',
          name: 'produce',
          component: Produce
        },{
          path: 'focusme',
          name: 'focusme',
          component: FocusMe
        }
         ]
    }
  ]
})
