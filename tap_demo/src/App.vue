<template>
  <div id="app">
    <Theader></Theader>
    <router-view/>
  </div>
</template>

<script>
import Theader from '@/components/Theader'
export default {
  name: 'App',
  components:{
    Theader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
