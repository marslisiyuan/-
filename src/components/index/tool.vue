<template>
    <div>
        <!-- 展示工具title -->
        <div class="title titlefixed">
            <span></span>
            <!-- <div @click="backed"><img src="../../assets/left.png" alt=""></div> -->
            <span>展示工具</span>
            <span></span>
        </div>

        <!-- 微名片和展示H5工具等等 -->
        <ul class="ehibition">
            <!-- <router-link tag="li" to="/tool/saveImage">
                <div class="ehibitionclear">
                    <div class="logo"><img src="../../assets/nav/tool/h5gj.png" alt=""></div>
                    <div class="box"><h3>展业图片</h3><span>音乐相册，非好友可参与聊天</span></div>
                </div>
            </router-link> -->
            <router-link tag="li" to="/tool/SaveImageone">
                <div class="ehibitionclear">
                    <div class="logo"><img src="../../assets/nav/tool/h5gj.png" alt=""></div>
                    <div class="box"><h3>二维码分享</h3><span>扫描二维码分享</span></div>
                </div>
            </router-link>
      
        </ul>

    </div>
</template>
<script>
    export default {
        name: 'tool',
        data() {
            return {}
        },
        mounted() {
            this.$store.commit('shownav', true)
            // console.log(this.$store.state.show)
            setTimeout(function(){
             $('.navname').map(function(index,item){
                   if($(item).attr('data')){
                       $(item).children('img').attr('src',require('@/assets/drawable/'+$(item).attr('data')+'.png'))
                   }
                })
             $('#yq').children('img').attr('src',require('@/assets/drawable/djyq.png'))
            },10)
        },
        methods:{
            backed(){
                window.history.go(-1)
            }
        }
    }
</script>
<style scoped="scoped">
    .ehibition {
        margin-top: 1.2rem;
    }
    .ehibition li {
        padding: 0.4rem;
        background: white;
        border-bottom: 1px solid #e8e8e8;
    }

    .ehibition .ehibitionclear:after {
        clear: both;
        content: '';
        display: block;
    }
    .ehibition .ehibitionclear {
        zoom: 1;
        width: 100%;
        height: 100%;
    }
    .ehibition li .logo {
        height: 1.333333rem;
        width: 1.333333rem;
        border-radius: 50%;
        float: left;
    }
    .ehibition .ehibitionclear .box {
        float: right;
        width: 7.466667rem;
        padding-top: .133333rem;
    }
    .ehibition .ehibitionclear .box h3{
        font-size: .426667rem;
        font-weight: 700;
    }
    .ehibition .ehibitionclear .box span{
        color: #999;
    }
</style>