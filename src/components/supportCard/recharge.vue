<template>
    <div>
        <div class="title"><div @click="backed"><img src="../../assets/left.png" alt=""></div><span>账户充值</span><router-link tag="span" to="/supportCard/Deposit">提现</router-link></div>
        <div>
            <h2 class="recharge-h2">余额￥<span style="font-size:.533333rem;color:#e5630e;">{{balance}}</span></h2>
            <div class="recharge-input"><input type="number" v-model="money" placeholder="充值金额"></div>
        </div>
        <div class="paytype">
            <h2>支付方式</h2>
            <div class="paycheck">
                <div><img src="../../assets/nav/zfbpay.png" alt=""><span>支付宝</span></div>
                <input type="radio" name="paytype" v-model="checkedValue" value="z">
            </div>
            <div class="paycheck">
                <div><img src="../../assets/nav/wxpay.png" alt=""><span>微信支付</span></div>
                <input type="radio" name="paytype" v-model="checkedValue" value="w">
            </div>
        </div>
        <div class="button">
            <button @click="codeimg">充值</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                checkedValue:'z',
                money:'',
                version:'',
                balance:"",
            }
        },
        mounted(){
           this.$store.commit('shownav', false)
           var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
            this.version=this.$store.state.version
            var MAC=$.md5('0700390089'+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
           this.$http.post(
               'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
               {
                   '0':'0700',
                   '3':'390089',
                   '42':merchantidNo,
                   '59':this.version,
                   '64':MAC
               },{
                   emulateJSON:true
               }).then(function(res){
                   if(res.data['39']=='00'){
                       this.balance=res.data['36']
                   }
               })
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            codeimg(){
                this.$router.push({path:'/supportCard/codeImg',query:{'money':this.money,'type':this.checkedValue}})
            }
        }
    }
</script>
<style scoped="scoped">
 .recharge-h2{
     font-size: .48rem;
     text-align: center;
     margin: .8rem 0;
     
 }
 .recharge-input{
     margin: .8rem;
 }
 .recharge-input input{
      font-size: .48rem;
      padding: .266667rem;
      width: 100%;
      border-radius: .266667rem;
      border: 1px solid #666;
 }
 .paytype{
     padding: .533333rem 0;
     background: #fff;
 }
 .paytype h2{
     font-size: .426667rem;
     padding: .266667rem;
 }
 .paytype .paycheck{
     display: flex;
     padding: .266667rem .533333rem;
     justify-content: space-between;
 }
 .paytype .paycheck>div{
     display: flex;
     align-items: center;
 }
 .paytype .paycheck>div span{
     margin-left: .266667rem;
 }
 .paytype .paycheck img{
     width: .8rem;
 }
 .button{
     margin-top: .8rem;
     display: flex;
     justify-content: center;
 }
 .button button{
     width: 8.533333rem;
     height: 1.333333rem;
     line-height: 1.333333rem;
     /* padding: .4rem; */
     border: none;
     font-size: .426667rem;
     color: #fff;
     background: #13c8d6;
     border-radius: .133333rem;
 }
</style>
