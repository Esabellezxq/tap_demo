import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import chat from '@/pages/chat'
import games from '@/pages/games'
import discover from '@/pages/discover'
import main from '@/pages/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/games',
      name: 'games',
      component: games
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
