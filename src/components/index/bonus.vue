<template>
    <div>
        <!-- 我的分润title -->
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>我的分润</span>
            <router-link tag="span" to="/Bonus/BonusDetailed">分润明细</router-link>
        </div>
        
        <!-- 分润账单 -->
        <div class="jmfenrun">
          <div>
              <p>10.92</p>
              <p>昨日分润</p>
          </div>
          <div>
              <p>12.53</p>
              <p>今日分润</p>
          </div>
        </div>

        <!--  当前提现金额 -->
        <div class="txje">
            <div class="money">
                <p>当前可提现分润</p>
                <p>99.2</p>
            </div>
            <div class="txjebutton"><router-link tag="button" to="/Bonus/bonuscash">我要提现</router-link></div>
            <div class="money">
                <p>862.00</p>
                <p>累计分润</p>
            </div>
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
            this.$store.commit('shownav',false)
        },
        methods:{
            backed(){
                window.history.go(-1)
            }
        }
    }
</script>
<style scoped="scoped">
        .jmfenrun{
            margin:1.6rem .533333rem;
            font-size: .56rem;
            display: flex;
            justify-content: space-between;
            text-align: center;
        }
        .jmfenrun div{
            flex-grow: 1;
        }
        .jmfenrun div:nth-child(1){
            border-right: 1px solid #333;
        }
         .txje{
             padding: 4.8rem  1.333333rem 1.333333rem .8rem;
             background: white;
             text-align: center;
             font-size: .533333rem;
             color: #7caffd;
         }
         .txje .txjebutton button{
             width: 100%;
             background: #80c269;
             border: none;
             font-size: .533333rem;
             padding: .266667rem;
             color: white;
             margin: .8rem 0;
         }
         .txje .money p:nth-child(2){
           margin-top: .4rem;
         }
</style>
