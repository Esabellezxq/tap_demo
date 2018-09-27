<template>
  <div id="discover">
  discover
  </div>
</template>

<script>
export default {
  name: 'discover',
  data() {
    return {
      domain: 'http://10.3.141.20:3000/',
      discoverList: []
    }
  },
  mounted() {
    let that = this;
    let instance = axios.create({
      baseURL: that.domain,
      timeout: 3000
    })
    instance.get('discover').then(res => {
      this.carousel = res.data;
    })
  },
}
</script>

<style>
</style>
