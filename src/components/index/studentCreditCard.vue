<template>
  <div>
    <!-- 排行榜title -->
    <div class="title titlefixed">
        <div @click="backed"><img src="../../assets/left.png" alt=""></div>
        <span>校园卡申请</span>
        <span></span>
    </div>
    <!-- 轮播 -->
    <div class="titlenext cardlb">

    </div>

    <!-- 办卡解说 -->
    <div class="apllywrap">
        <div class="apllytitle">
            <p>最新推荐</p>
            <p>解说></p>
        </div>
        <ul class="apllyul">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

    <!-- 办卡备注 -->
    <div class="cardtext">
        备注：
    </div>
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
        },
        methods:{
            backed(){
                window.history.go(-1)
            }
        }
    }
</script>
<style scoped="scoped">
.cardlb{
    height: 4.266667rem;
    background: red;
}
.apllywrap{
    padding-left: .4rem;
    background: white;
}
.apllytitle{
    height: 1.253333rem;    
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: .4rem;
}
.apllyul li{
border-top: 1px solid #ddd;
height:3.146667rem;
padding:.6rem 0;
}
.cardtext{
    margin:.266667rem 0; 
    padding:0 .266667rem;
    height: 3.2rem;
    background: saddlebrown;
}
</style>
