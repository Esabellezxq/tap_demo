<template>
  <div id="index">
    <div v-for="item in carousel" :key="item.id">
      <img :src="domain+item.filePath" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      domain: 'http://10.3.141.20:3000/',
      carousel: []
    }
  },
  mounted() {
    let that = this;
    let instance = axios.create({
      baseURL: that.domain,
      timeout: 3000
    })
    instance.get('carousel').then(res => {
      this.carousel = res.data.carousel;
    })
  },
}
</script>

<style>
</style>
