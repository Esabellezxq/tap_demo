<template>
  <div id="index">
    <div v-for="item in carousel" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      carousel: [
        {id: 1, imgUrl: '/static/6.jpg'},
        {id: 2, imgUrl: '/static/6.jpg'}
      ]
    }
  },
  mounted() {
    let that = this;
    // axios.get('http://localhost:3000/data').then(respone => {
    //   that.test = respone.data.result;
    // })
  },
}
</script>

<style>
</style>
