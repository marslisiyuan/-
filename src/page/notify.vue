<template>
    <div>
        <!-- 通知 -->
        <div class="title titlefixed">
             <!-- <Icon type="ios-arrow-back"></Icon> -->
             <div @click="backed"><img src="../assets/left.png" alt=""></div>
            <span>通知</span>
            <span></span>
        </div>

        <!-- 系统消息和佣金提醒 -->
        <ul class="xtmassage">
            <li><img src="../assets/nav/xtxx.png" alt=""><span>系统消息</span></li>
            <li><img src="../assets/nav/yjts.png" alt=""><span>佣金提醒</span></li>
        </ul>
        <!-- 客服 -->
        <ul class="kful">
            <li>  <a href="mqqwpa://im/chat?chat_type=wpa&uin=2200940221&version=1&src_type=web&web_src=bjhuli.com"><img src="../assets/nav/wdtjr.png" alt=""></a><span>我的推荐人</span></li>
            <li><img src="../assets/nav/zxkh.png" alt=""><span>客服1号</span></li>
            <li><img src="../assets/nav/zxkh.png" alt=""><span>客服2号</span></li>
            <li><img src="../assets/nav/zxkh.png" alt=""><span>客服3号</span></li>
            <li><img src="../assets/nav/bzxkh.png" alt=""><span>客服4号</span></li>
            <li><img src="../assets/nav/bzxkh.png" alt=""><span>客服5号</span></li>
            <li><img src="../assets/nav/bzxkh.png" alt=""><span>客服6号</span></li>
            <li><img src="../assets/nav/bzxkh.png" alt=""><span>客服7号</span></li>
            <li><img src="../assets/nav/zxkh.png" alt=""><span>客服8号</span></li>       
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted(){

        },
        methods:{
            backed(){
                window.history.go(-1)
            }
        }
    }
</script>
<style scoped="scoped">
    .titlefixed {
        position: fixed;
        top: 0;
        width: 100%;
    }
    .xtmassage {
        margin-top: 1.466667rem;
    }
    .xtmassage li {
        margin-top: .133333rem;
        height: 1.8rem;
        display: flex;
        padding: .266667rem;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
        background: #fff;
        font-size: 0.426667rem;
    }
    .xtmassage li span{
        margin-left: .4rem;
    }
    .kful{
        padding: .533333rem;
        display: flex;
        flex-wrap:wrap;
    }
    .kful li{
        width: calc(100%/3);
        display: flex;
        flex-direction: column;
        height: 2.4rem;
        margin-bottom: .8rem;
        align-items: center;

    }
    .kful li img{
        width: 1.466667rem;
        height: 1.466667rem;
    }
    .kful li span{
        background: #006bd2;
        color: white;
        padding: 0 .133333rem;
        border-radius: .266667rem;
    }
</style>