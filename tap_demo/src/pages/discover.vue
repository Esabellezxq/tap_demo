<template>
  <div id="discover">
    <div class="item"  v-for="(item,index) in discoverList" :key="index">
			<div class="app-item-title">
				<h3>{{item.type}}</h3>
				<a href="#">更多</a>
			</div>
			<div class="flex-row">
        <div class="app-item" v-for="(sub,i) in item.games" :key="i">
				<img :src="domain+sub.filePath" />
				<div class="app-item-caption">
					<span class="item-caption-icon">
					  <a href="#">{{sub.title}}</a>
				  </span>
					<span class="item-caption-label">
				    <a href="#">卡牌</a>
					</span>
          <span class="score">9.9 ★</span>
				</div>
			</div>
      </div>
		</div>
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
      that.discoverList = res.data.result;
      console.log(res.data.result)
    })
  },
}
</script>

<style>
#discover{
  width: 1040px;
  margin: 0 auto;
}
.flex-row{
  display: flex;
  flex-direction: row;
}
.app-item {
	width: 168px;
	height: 233px;
	vertical-align: middle;
	margin: 8px;
	background-color: white;
	display: inline-block;
	overflow: hidden;
	border-radius: 4px;
  box-shadow: 0 5px 50px rgba(0, 0, 0, .05);
}
.score{
  display: block;
  text-align: right;
}
.app-item img {
	width: 136px;
	height: 136px;
	display: block;
	margin: 16px;
}

.item-caption-icon a {
	margin: 0 17px;
	line-height: 20px;
	font-size: 16px;
	white-space: nowrap;
	-webkit-box-flex: 1;
	flex: auto;
	overflow: hidden;
	text-overflow: ellipsis;
	text-decoration: none;
	color: black;
}

.item-caption-icon a:hover {
	text-decoration: underline;
	color: black;
}

.item-caption-label a {
	display: inline-block;
	color: #666;
	text-decoration: none;
	line-height: 20px;
	font-size: 14px;
}

.item-caption-label a:hover {
	text-decoration: underline;
	color: #666;
}

.score {
	color: #999;
	font-size: 14px;
	float: right;
	margin: 0 20px 0 0;
}

.item-caption-label {
	line-height: 40px;
  margin: 0;
  float: right;
}

.app-item-caption {}

.app-item-title {
	margin: 30px 0 15px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}

.app-item-title h3 {
	font-weight: normal;
	margin: 0 0 10px;
	padding: 0 0 0 8px;
	line-height: 20px;
	font-size: 18px;
	border-left: 4px solid #14B9C8;
	display: inline-block;
}

.app-item-title a {
	line-height: 20px;
	color: #14B9C8;
	float: right;
	text-decoration: none;
	font-size: 14px;
}

.item {
	margin-left: auto;
	margin-right: auto;
}
</style>
