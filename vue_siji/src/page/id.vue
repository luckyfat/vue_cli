<template>
<div class="si_head">
	<header class="login-head">
	 		<div class="login-left cr" @click="bk"><</div>
	 		<div class="login-content cr">丝集详情</div>
	 		<div class="login-right iconfont icon-fangzi cr"></div>
	</header>
	<div class="cot">
		<h3>{{title}}</h3>
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

 export default{
 	data(){
 		return {	
 			json:"",
 			title:""
 		}
 	},
 	methods:{
 		bk:function(){
 			window.history.go(-1)
 		}
 	},
 	mounted:function(){
 		let xqy = this.$route.query.id
 		let title = this.$route.query.tit
 		$.ajax({
 			url:"../static/wenhua.json",
			success:(xq)=>{
			let data = xq.data.list;
				for(let i in data){
					if(data[i].id == xqy){
						$('.cot').html(data[i].detail);
					}
				}
			}
 		})
 		/*this.$http.get("../static/wenhua.json").then(function(res){
 			let json = eval("("+res.bodyText+")").data.list;
 			console.log(json);
 			for(let i in json){
 				if(json[i].id == xqy){
 					$('.con').html(json[i].detail)
 				}
 			}
 		})*/
 		$.ajax({
 			url:"../static/detail.json",
			success:(xq)=>{
			let data = xq.data.list
				for(let i in data){
					if(data[i].id == xqy){
						$('.cot').html(data[i].detail);
					}
				}
			}
 		})
 		$.ajax({
 			url:"../static/redian.json",
			success:(xq)=>{
			let data = xq.data.list
				for(let i in data){
					if(data[i].id == xqy){
						$('.cot').html(data[i].detail);
					}
				}
			}
 		})
 	}
 }
</script>

<style lang="less" scoped>
.si_head{
	.login-head{
		height:45px;
		background:#5b248a;
		display:-webkit-box;
		-webkit-box-align:center;
		.cr{
			color:#fff;
		}
		.login-left{
			-webkit-box-flex:1;
			margin-left:15px;
		}
		.login-content{
			-webkit-box-flex:1;
		}
		.login-right{
			margin-right:15px;
		}
	}

	.footer{	
		width:100%;
		height:84px;
		border-top:1px solid #ccc;
		background:#E6E6E6;
		margin-top:10px;
		.footer-top{
			height:15px;
			background:#F2F2F2;
		}
		.footer-text{
			h1{
				font-size:12px;
				color:#666666;
				padding-top:15px;
				text-align:center;
			}
			p{
				font-size:10px;
				color:#AEAEAE;
				padding-top:11px;
				text-align:center;
			}	
		}
	}	
}					
</style>

