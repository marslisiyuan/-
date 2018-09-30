<template>
<div>
    <!-- 提额秘籍title -->
    <div class="title titlefixed">
        <div @click="backed"><img src="../../assets/left.png" alt=""></div>
        <span>金融秘籍</span>
        <span></span>
       
    </div>

    <!-- 轮播图 -->
    <div class="Sowemap">

    </div>

    <!-- 文字广告 -->
    <div class="wzlb">
        <div id="scroll_div" class="fl"> 
            <div id="scroll_begin">
            恭喜793765***获得 50元巨人点卡奖励爱的撒旦撒旦实打实的 阿斯顿撒大声地
            </div> 
            <div id="scroll_end"></div>
        </div> 
    </div>

    <!-- 申请秘诀 -->
    <ul class="applylist">
        <li>
            <img src="../../assets/nav/increase1.png" alt="">
            <h3>"小白"办卡必成攻略</h3>
        </li>
        <li>
            <img src="../../assets/nav/increase2.png" alt="">
            <h3>信用卡提额攻略</h3>
        </li>
        <li>
            <img src="../../assets/nav/increase3.png" alt="">
            <h3>金融行业最近黑科技</h3>
        </li>
        <li>
            <img src="../../assets/nav/increase4.png" alt="">
            <h3>信用卡提额最新"口子"</h3>
        </li>
        <li>
            <img src="../../assets/nav/increase5.png" alt="">
            <h3>提额视频教程</h3>
        </li>
    </ul>
</div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        mounted(){
          this.$store.commit("shownav",false)
          setTimeout(function(){
                        ScrollImgLeft() 
                    },500)
        },
        methods:{
          backed(){
              window.history.go(-1)
          }
        }
    }
</script>
<style scoped="scoped">
 .applylist {
    margin-top: 0.266667rem;
}
.applylist li {
    height:1.866667rem;
    border-bottom: 1px solid #e8e8e8;
    background: white;
    display: flex;
    align-items: center;
    padding: .133333rem .4rem;
}
.applylist li h3{
    font-size: .48rem;
    /* font-weight:600; */
    color: black;
    margin-left: .533333rem;
}
</style>
