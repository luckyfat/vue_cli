<template>
	<div class="head_tiao">
		<div class="back_top iconfont icon-fanhuidingbu" @click="back_top"></div>
		<div class="header">
			<div class='header_left cr' @click="back"><</div>
			<div class="header_content cr">丝集文化</div>
			<div class='header_right iconfont icon-fangzi cr'></div>
		</div>
		<div class="gray_line"></div>
		<section class="content">
			<div class="content_text" v-for="x in data">
				<h1>{{x.title}}</h1>
				<p>{{x.summary}}</p>
				<div class="content-bottom"></div>
			</div>
		</section> 
		<div class="footer">
			<div class="footer-top"></div>
			<div class="footer-text">
				<h1>首页</h1>
				<p>
					Copyright@1016-1230 丝集网 www.siji.com版权所有
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
		 	return{
		 		data:{}
		 	}
		},
		methods:{
			back:function(){
				window.history.go(-1)
			},
			back_top:function(){
				var back_top = document.querySelector(".back_top");
				document.body.scrollTop = 0;
				back_top.style.display='none';
			}
		},
		mounted:function(){
			$.ajax({
				url:'../static/data.json',
				success:(data)=>{
					this.data = data.data.list
				}
			})

			var back_top = document.querySelector(".back_top");

			window.onscroll = function(){
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				console.log(top)
				if(top>10){
					back_top.style.display='block';
				}else{
					back_top.style.display='none';
				}
			}
			
		}
	}
</script>

<style lang="less" scoped>
	@import "../assets/head_tiao";
</style>