<template>
	<div class="wrap">
	 	<header class="login-head">
	 		<div class="login-left cr"><router-link to='/' style="color:#fff"><</router-link>
	 		</div>
	 		<div class="login-content cr">注册</div>
	 		<div class="login-right iconfont icon-zhuye cr"></div>
	 	</header>
	 	<div class='num'>{{num}}</div>
	 	<section class="login-text">
	 		<div class="login-phone">
	 			<label for="" class="phone-left">手机号<input type="text" placeholder="请输入手机号" class="text" v-model="value" @blur="fn" @focus="fn1"></label>
	 		</div>
	 		<div class="login-test">
	 			<label for="" class="phone-left">验证码<input type="text" placeholder="请输入验证码" class="text" v-model="pad"></label>
				<a class="ma" @click="info_pwd(1000,9999,this)">{{password}}</a>
	 		</div>
	 	</section>
	 	<div class="agreen">
	 		<router-link to='/agree' style="color:#bebebe; font-size:12px;">*注册即表示您同意《丝集用户协议》</router-link>
	 	</div>
	 	<div class="login-button">
	 		<router-link to='/' class='login'>注册</router-link>
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
				num:"",
				info:false
			}
		},
		methods:{
			fn:function(){ 
	   			 var text = document.querySelector(".text").value;
	   			 if(text!=""){
	   			 	if(!(/^1[34578]\d{9}$/.test(text))){ 
	       			 	this.num = '手机号格式不正确'
	    			}else{
	    				this.num=""
	    			}  
	   			 }else{
	   			 		this.num = '手机号不能为空'
	   			 }   
			},
			fn1:function(){
				this.num = ""
			},
			info_pwd:function(min,max){					
				if(this.value==""){
					this.num = "请先输入手机号"
				}else{
					this.pad = Math.floor(Math.random()*(max-min))+min;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../assets/resgin";
</style>
