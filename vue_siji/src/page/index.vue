<template>
	<div class="wrap" v-cloak>
	 	<header class="login-head">
	 		<div class="login-left cr"></div>
	 		<div class="login-content cr">登录</div>
	 		<div class="login-right iconfont icon-zhuye cr"></div>
	 	</header>
	 	<div class='num'>{{num}}</div>
	 	<section class="login-text">
	 		<div class="login-phone">
	 			<label for="" class="phone-left">手机号<input type="text" placeholder="请输入手机号" class="text" @blur='fn' v-model='value' @focus='fn1'></label>
	 		</div>
	 		<div class="login-test">
	 			<label for="" class="phone-left">验证码<input type="text" placeholder="请输入验证码" class="text" v-model="pad"></label>
	 			<a class="ma" @click="info_pwd(1000,9999)">{{password}}</a>
	 		</div>
	 	</section>
	 	<div class="login-button">
	 		<router-link to="/tou_head" class="login">登录</router-link>
	 	</div>
	 	<div class="resgin">
	 		<router-link to="/resgin" class="zhuce">免费注册</router-link>
	 	</div>
	 </div>
</template>

<script>
	export default {
		data(){
			return{
				value:"",
				pad:"",
				password:"获取短信验证码",
				num:null
			}
		},
		methods:{
			fn:function(){
				if(this.value!=""){
	   			 	if(!(/^1[34578]\d{9}$/.test(this.value))){ 
	   			 		this.num="手机号格式不正确"
	    			}else{
	    				this.num=""
	    			} 
	   			 }else{
	   			 		this.num="手机号不能为空"
	   			 }    
			},
			fn1:function(){
				this.num = ""
			},
			info_pwd:function(min,max){					
					if(this.value==""){
						this.num = "请先输入手机号"
					}else if(!(/^1[34578]\d{9}$/.test(this.value))){
						this.num="手机号格式不正确"
					}else{
						this.pad = Math.floor(Math.random()*(max-min))+min;
					}

			} 
		}
	}
</script>

<style lang="less" scoped>
	@import "../assets/login";
</style>