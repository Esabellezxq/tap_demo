<template>
  <div id="chat">
    <div class="container">
			<div class="row">
				<div class="col-sm-9">
					<div class="talk_con">
						<div class="talk_show">
							<div class="atalk">
                <img src="" />
                <span id="asay">hello 你吃饭了吗？hello,hello 你吃饭了吗？hello</span>
              </div>
						</div>
						<div class="talk_input">
							<input type="text" class="talk_word" id="talkwords">
							<input type="button" value="" class="talk_sub" id="talksub">
						</div>
					</div>
				</div>
				<div class="col-sm-3">
					<p class="title">在线成员</p>
					<hr />
					<div class="userimg">
						<img src="" /><span>快乐肥仔1号</span>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'chat'
}
</script>

<style scoped>
  .talk_con {
    width:100%;
    height: 500px;				
    margin: 0px auto 0;
    background: #f9f9f9;
  }
  
  .talk_show {
    width: 100%;
    height: 496px;
    /*border: 1px solid #666;
    background: #fff;*/
    margin: 10px auto 0;
    overflow: auto;
  }
  
  .talk_input {
    width: 96%;
    margin: 10px auto 0;
    height: 48px;
    background:white;
    border-radius: 14px;
    border:1px solid #D2D2D2;
    
  }
  
  .whotalk {
    width: 80px;
    height: 30px;
    float: left;
    outline: none;
  }
  
  .talk_word {
    width: 90%;
    height: 40px;
    margin: 3px 0 0 5px;
    border:none;
    float: left;								
    outline: none;
    text-indent: 10px;
  }
  
  .talk_sub {
    width: 40px;
    background:#2f7ffc;
    /* background: url(img/2.png) no-repeat #2f7ffc 8px;				 */
    border:none;
    color:white;
    height: 40px;
    float: left;
    margin: 3px 36px 0 0px;
    border-radius: 24px;
  }
  
  .atalk {
    margin: 12px;
  }
  
  .atalk span {
    display: inline-block;
    padding-left: 10px;
    background: #FFFFFF;
    border-radius: 10px;
    color: black;
    padding: 13px 10px;
    margin-left: 10px;
  }
  
  .btalk {
    margin: 12px;
    text-align: right;
  }
  
  .btalk span {
    display: inline-block;
    padding-left: 10px;
    background: #2f7ffc;
    border-radius: 10px;
    color: #fff;
    padding: 13px 10px;
    margin-right: 10px;
  }
  
  body {
    background: #dfecfc;
  }
  
  .col-sm-3 {
    background: #FFFFFF;
    height: 572px;
    border: 1px solid #d2d2d2;
    border-radius: 14px;
  }
  
  .title {
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    padding-top: 15px;
  }
  
  .userimg {
    height: 56px;
  }
  
  .userimg span {
    padding-left: 10px;
  }
</style>
