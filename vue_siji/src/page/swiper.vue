<template>
    <div class="swiper-container aaa">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in dataList">
                <img :src="'http://m.joinsilk.com/File/download?id='+item.resourceId+'&M=fixed&L=0&W=750&H=334'" alt="sijibanner"/>
                <div class="dw">{{item.title}}</div>
            </div>
        </div>
        <div class="swiper-pagination bbb"></div>
    </div>
</template>
<script>
export default{
    props: ['dataList'],
	data(){
        return{
           
        }
    },
    mounted: function() {
        console.log(this.dataList)
        setTimeout(function(){
            new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop:true,
                autoplay:1000
            })
        },200)
    }
}
</script>
<style lang="less" scoped>
	@import "../assets/swiper";
</style>