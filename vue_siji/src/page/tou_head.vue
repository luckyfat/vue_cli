<template>
	<div class="si_head">
		<header class="login-head">
	 		<div class="login-left cr" @click="bk"><</div>
	 		<div class="login-content cr">丝集头条</div>
	 		<div class="login-right iconfont icon-fangzi cr"></div>
	 	</header>
	 	<div class="banner">	
	 		<swiper :dataList="picJson"></swiper>
	 	</div>
	 	<div class="router">
	 		<ul >
	 			<li v-for="(x,index) in data" @click="double(index)">{{x.name}}</li>
	 		</ul>
	 	</div>
	 	<div class="more">
	 		<router-link to="/more" class="mcls">更多>></router-link>
	 	</div>
	 	<div class= "aaaa">
	 		<section class="content">
		 		<router-link class="c1" v-for="bt in data1" :to="{path:'/id',query:{id:`${bt.id}`,tit:`${bt.title}`}}" tag="div">
		 	
		 			<p>
		 				<span>{{bt.title}}</span>
		 				<span>2017-11-2</span>
		 			</p>
		 			<div class="nr">
		 				<p>{{bt.summary}}</p>
		 			</div>
				</router-link>
		 	</section>
		 	<section class="content" style = "display:none">
		 		<router-link v-for="bt in data2" :to="{path:'/id',query:{id:`${bt.id}`,tit:`${bt.title}`}}" class="c1" tag='div'>
		 			<p>
		 				<span>{{bt.title}}</span>
		 				<span>2017-11-2</span>
		 			</p>
		 			<div class="nr">
		 				<p>{{bt.summary}}</p>
		 			</div>
		 		</router-link>
		 	</section>
		 	<section class="content" style = "display:none">
		 		<router-link class="c1" v-for="bt in data3" :to="{path:'/id',query:{id:`${bt.id}`,tit:`${bt.title}`}}" tag="div">
		 			<p>
		 				<span>{{bt.title}}</span>
		 				<span>2017-11-2</span>
		 			</p>
		 			<div class="nr">
		 				<p>{{bt.summary}}</p>
		 			</div>
		 		</router-link>	
		 	</section>
	 	</div>
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
import swiper from "./swiper"
	export default{
		data(){
			return {
				data:"",
				data1:"",
				data2:"",
				data3:"",
				picJson:"",
				info:true
			}
		},
		components:{
			swiper
		},
		mounted:function(){
			setTimeout(function(){
				$('.router>ul>li').eq(0).addClass('orange');
			})
			
			$.ajax({
				url:"../static/route.json",
				success:(data)=>{
					this.data = data.data;
				}
			})
			$.ajax({
				url:"../static/redian.json",
				success:(data1)=>{
					this.data1 = data1.data.list;
				}
			})
			$.ajax({
				url:"../static/wenhua.json",
				success:(data2)=>{
					this.data2 = data2.data.list;
				}
			})
			$.ajax({
				url:"../static/detail.json",
				success:(data3)=>{
					this.data3 = data3.data.list;
				}
			})
			$.ajax({
				url:"../static/picture.json",
				success:(pic_data)=>{
					this.picJson = pic_data.data.list;
					//console.log(this.picJson)
				}
			})
		},
		methods:{
			double:function(index){
				let aaaa = document.querySelector(".aaaa");
				let section = aaaa.querySelectorAll("section");
				let router = document.querySelector(".router");
				let routeLi = router.querySelectorAll("li");
				for(let i = 0;i<section.length;i++){
					section[i].style.display = "none";
					routeLi[i].classList.remove("orange");
				}
				section[index].style.display = "block";	
				routeLi[index].classList.add("orange");
			},
			bk:function(){
				window.history.go(-1)
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../assets/tou";
</style>