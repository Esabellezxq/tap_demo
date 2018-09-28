<template>
  <div id="index">
    <!--<div v-for="item in carousel" :key="item.id">-->
    <!--<img :src="domain+item.filePath" alt="">-->
    <!--</div>-->

    <!--轮播图-->
    <div class="lunBo">
      <el-carousel height="450px">
        <el-carousel-item v-for="item in carousel" :key="item.id">
          <img :src="domain+item.filePath" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--main-->
    <div class="main">
      <div class="listBox">
        <div class="listBox-hd">
          <a href=""><img src="static/main/meimei3.jpg" alt=""></a>
          <span>精彩推荐</span>
        </div>
        <div class="listBox-bd">
          <a href="#" class="bd-title"><h2>英雄联盟</h2></a>
          <a href="#" class="bd-img"><img src="static/main/meimei3.jpg" alt=""></a>
          <p>我的英雄，愿你永远是那个光芒万丈的少年！</p>
        </div>
      </div>
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
        baseURL: that.domain
        // timeout: 3000
      })
      instance.get('carousel').then(res => {
        this.carousel = res.data.carousel;
      })
    },
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
/*轮播图*/
  .lunBo {
    width: 100%;
    height: 450px;
  }

  .lunBo img {
    width: 100%;
  }

  /*main*/
  .main {
    width: 1040px;
    margin: 20px auto;
  }
  .listBox {
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
  }
  .listBox-hd {
    padding: 20px 0 10px 20px;
    text-align: left;
  }
  .listBox-hd a img {
    width: 20px;
    height: 20px;
    border: none;
    vertical-align: middle;
  }
  .listBox-hd span {
    height: 30px;
    color: #999;
    font-size: 12px;
    padding-left: 10px;
    vertical-align: middle;
  }
  .listBox-bd {
    width: 100%;
  }
  .listBox-bd .bd-title {
    display: block;
    padding: 0 0 10px 20px;
  }
  .listBox-bd a h2 {
    font-size: 18px;
    font-weight: bold;
    color: #666;
    text-align: left;
  }
  .listBox-bd .bd-img {
    display: block;
    width: 1040px;
    height: 414px;
    overflow: hidden;
  }

  .listBox-bd a img {
    width: 100%;
  }
  .listBox-bd p {
    font-size: 16px;
    color: #999;
    text-align: left;
    padding: 10px 20px 20px;
  }

</style>
