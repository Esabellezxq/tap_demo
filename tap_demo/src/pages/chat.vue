<template>
	<div class="box">
		<div class="box1">
			<div class="join">
				<p class="name">王者荣耀尬聊群</p>
				<p class="introduce">打了三千把没上过王者</p>
				
			</div>
			<div class="photo">
				<img src="/static/chat/royal.jpg" />
			</div>
		</div>
		<div class="box1">
			<div class="join">
				<p class="name">俄罗斯方块尬聊群</p>
				<p class="introduce">打了三千把没上过王者</p>
			</div>
			<div class="photo">
				<img src="/static/chat/russianBlock.jpg" />
			</div>
		</div>
		<div class="box1">
			<div class="join">
				<p class="name">qq炫舞尬聊群</p>
				<p class="introduce">打了三千把没上过王者</p>
			</div>
			<div class="photo">
				<img src="/static/chat/qqDance.jpg" />
			</div>
		</div>
		<div class="box1">
			<div class="join">
				<p class="name">qq飞车尬聊群</p>
				<p class="introduce">打了三千把没上过王者</p>
			</div>
			<div class="photo">
				<img src="/static/chat/qqCar.jpg" />
			</div>
		</div>
		<div class="box1">
			<div class="join">
				<p class="name">dnf尬聊群</p>
				<p class="introduce">打了三千把没上过王者</p>
			</div>
			<div class="photo">
				<img src="/static/chat/dnf.jpg" />
			</div>
		</div>
		<div class="box1">
			<div class="join">
				<p class="name">cf尬聊群</p>
				<p class="introduce">打了三千把没上过王者</p>
			</div>
			<div class="photo">
				<img src="/static/chat/cf.jpg" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'choice',
  data() {
  	return {

	  }
  }
  
}
</script>
<style>

.box2{
	width: 1366px;
	height: 80px;
	text-align: center;
	overflow: hidden;
	
}

/*游戏框*/
.box{
	width: 1040px;
	margin: 10px auto 0;
	display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height:100vh;
}
.box1{
	width: 30%;
	height: 380px;
	position: relative;
	text-align: center;
	border: 0.5px solid #beb4c7;
    background: #fff;
    margin: 20px 5px 15px 15px ;
    padding: 0 15px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #d7d6d8;
    float: left;
}
.join{
	position: absolute;
	width: 300px;
	height: 50px;
}
.name{
	text-align: left;
	margin: 20px 10px 0;
	font-size:1em;
}
.introduce{
	text-align: left;
	margin: 5px 10px;
	font-size: 0.8em;
	color:darkgray ;
}
.join img{
	position: absolute;
	height: 35px;
	left: 5px;
	top: 10px;
}
.join input{  
	display: block;
	width: 60px;
	height: 30px;
	outline: none;
	border-radius: 15px;
	background: #ce2840;
	position: absolute;
	top: 15px;
	right: 10px;
	text-align: center;
	
}
.photo{
	position: absolute;
	overflow: hidden;
	width: 100%;
	height: 300px;
	bottom: 10px;
	left: 0px;
}
.photo img{
	display: block;
	width: 100%;
	height: 300px;
}

</style>