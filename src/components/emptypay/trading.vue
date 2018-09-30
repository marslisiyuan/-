<template>
  <div>
        <!-- 交易记录title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>交易记录</span>
            <span></span>
        </div>
        <!-- 七日交易总额 -->
        <div class="titlenext">
            <p>七日交易总额</p>
            <p style="border-bottom:1px solid #daa289;">5601.09</p>
            <div class="tradingflex">
                <div><span>七日提现总笔数(笔)</span><br><span>18</span></div>
                <div><span>七日提现总金额(元)</span><br><span>5600</span></div>
            </div>
        </div>
        <!-- 选择无卡和养卡 -->
        <div class="selectflex">
            <p class="on" @click="choose($event,'nocard')">无卡</p>
            <p @click="choose($event,'fostercard')">养卡</p>
        </div>
        <div class="tradingmonth">
            5月
        </div>
        <ul class="tradingul nocard" style="display:block;">
            <li><span>2018-5-25</span><span>无卡</span><span>交易成功</span><span>203.42</span></li>
            <li><span>2018-5-25</span><span>无卡</span><span>交易成功</span><span>203.42</span></li>
           <li><span>2018-5-25</span><span>无卡</span><span>交易成功</span><span>203.42</span></li>
            <li><span>2018-5-25</span><span>无卡</span><span>交易成功</span><span>203.42</span></li>
        </ul>
        <ul class="tradingul fostercard">
            <li><span>2018-5-25</span><span>养卡消费</span><span>交易成功</span><span>203.42</span></li>
            <li><span>2018-5-25</span><span>养卡消费</span><span>交易成功</span><span>203.42</span></li>
           <li><span>2018-5-25</span><span>养卡消费</span><span>交易成功</span><span>203.42</span></li>
            <li><span>2018-5-25</span><span>养卡消费</span><span>交易成功</span><span>203.42</span></li>
        </ul>
  </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        created(){
        // console.log(this.$route.params.money)
        },
        mounted(){
          this.$store.commit('shownav',false)
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            choose(event,data){
                $(event.currentTarget).addClass('on').siblings().removeClass('on')
                $('.tradingul').hide()
                $('.'+data).show()
            }
        }
    }
</script>
<style scoped="scoped">
.titlenext{
    background: #7eaffc;
    padding-top: .533333rem;
}
.titlenext p{
    text-align: center;
    font-size: .586667rem;
    color: white;
    font-weight: 600;
    padding: .133333rem;
}
.tradingflex{
    display: flex;
}
.tradingflex>div{
    flex-grow: 1;
    text-align: center;
    color: white;
    padding-top:.4rem;
}
.selectflex{
    display: flex;
    text-align: center;
    background: white;
}
.selectflex p{
    flex-grow: 1;
    padding: .266667rem;
    
}
.selectflex .on{
    border-bottom: 2px solid #7eaffc;
}
.tradingmonth{
    padding: .133333rem;
    border-bottom: 1px solid #999;
}
.tradingul{
    display: none;
}
.tradingul li{
    display: flex;
    justify-content: space-between;
    background: white;
    padding: .266667rem;
    border-bottom: 1px solid #f6f6f9;
}
</style>
