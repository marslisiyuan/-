<template>
    <div>
        <!-- 账户管理 -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>账户管理</span>
            <span></span>
        </div>

        <!-- 可提现金额 -->
        <div class="xtmassage txje">
            <p>￥0</p>
            <p>可提现金额</p>
            <p>立即提现</p>
        </div>

        <!-- 阅读条款 -->
        <div class="readtext">
            <p>是打算</p>
            <p>大</p>
        </div>

        <!-- 收益明细和提现记录等等 -->
        <div>
            <ul>
                <li class="accordion zhglsfq">
                    <p>收益明细</p>
                    <p><img src="../../assets/right.png" alt=""></p>
                </li>
                <li class="accordion zhglsfq">
                    <p>提现记录</p>
                    <p><img src="../../assets/right.png" alt=""></p>
                </li>
                <li class="accordion zhglsfq">
                    <p>银行卡</p>
                    <p><img src="../../assets/right.png" alt=""></p>
                </li>
                <li class="accordion zhglsfq">
                    <p>积分提现</p>
                    <p><img src="../../assets/right.png" alt=""></p>
                </li>
                <li class="accordion zhglsfq">
                    <p>保险明细</p>
                    <p><img src="../../assets/right.png" alt=""></p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted() {
            this.$store.commit('shownav', false)
            // console.log(this.$store.state.show)
        //   $('.nav-list').css('display','none')
        },
        methods:{
         backed(){
           window,history.go(-1)
         }
        }
    }
</script>
<style scoped="scoped">
    .txje {
        height: 4rem;
        background: linear-gradient(#0a0f12,#2a3f4b);
        text-align: center;
    }
    .txje p {
        padding-top: 0.533333rem;
        font-size: 0.426667rem;
    }
    .readtext {
        padding: 0.266667rem;
    }
    .zhglsfq {
        height: 1.733333rem;
        display: flex;
        justify-content: space-between;
        align-items:center;
        border-bottom: 1px solid #eee;
        background: white;
        padding: 0 .266667rem;
    }
    .zhglsfq img{
        height: .4rem;
    }
</style>