<template>
  <div>
        <!-- 我的资料title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>我的资料</span>
            <span></span>
        </div>
        <!-- 身份信息 -->
        <div class="detailsNumber">
            <div class="detailflex"><span>卡号</span><span>{{bank.bankAccount}}</span></div>
            <div class="detailflex"><span>姓名</span><span>{{bank.name}}</span></div>
            <div class="detailflex"><span>手机号</span><p>{{bank.bankPhone}}</p></div>
            <div class="detailflex"><span>身份证</span><span>{{bank.idcard}}</span></div>
            <div class="detailflex"><p><span>有效期</span><span>{{bank.expdate}}</span></p><p><span>额度</span><span>{{bank.limitMoney}}</span></p></div>
        </div>
         <!-- 卡信息 -->
         <div class="bankmassage">
            <div >{{bank.bankName}}</div>
            <div class="detailflex"><span>账单日&#x3000;&#x3000;{{bank.billDay}}</span><span>还款日&#x3000;&#x3000;{{bank.repaymentDay}}</span></div>
            <div class="detailflex"><span>cvv2</span><span>{{bank.cvn}}</span></div>
         </div>
         <ul class="myData-ul">
              <li v-for="(item,index) in state" :key="index" >
                 <div>
                     <span>{{item.name}}</span><span>{{item.status}}</span>
                 </div>
                 <div>
                     <span>(查看通道规则)</span><button v-if="item.status=='开通'" class="on">点击开通</button><button v-else @click="openup(item.code)">点击开通</button>
                 </div>
             </li>
         </ul>
  </div>
</template>
<script>
    export default {
        data(){
            return{
               bank:'',
               myInfo:'',
               url:'',
               version:'',
               state:'',
            }
        },
        mounted(){
          this.$store.commit("shownav",false)
          this.bank=JSON.parse(sessionStorage.getItem('bank'))
          this.myInfo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0]
          this.url=this.$store.state.url
          this.version=this.$store.state.version
          console.log(this.url)
        //   console.log(this.bankInfo.bankAccount)
        //   console.log(JSON.parse(localStorage.getItem('info'))['42'])
          var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
          
          var MAC=$.md5('0700390021'+merchantNo+this.bank.bankAccount+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
          this.$http.post(this.url,
                {    
                        '0':'0700',
                        '3':'390021',
                        '42':merchantNo,
                        '45':this.bank.bankAccount,
                        '59':this.version,
                        '64':MAC
                    },
                    {
                emulateJSON:true
                }).then(function(res){
                    // this.state=res.data['38']
                    this.state=JSON.parse(res.data['36'])
                })
        },
        methods:{
          backed(){
              window.history.go(-1)
          },
          openup(code){
             this.$router.push({name:'TiedCard',params:{code}})
          }
        }
    }
</script>
<style scoped="scoped">
        .detailsNumber{
            margin: 1.6rem .266667rem .533333rem .266667rem;
            padding: .4rem .533333rem;
            background: #d1d1d3;
            border-radius: .133333rem;
        }
        .detailsNumber .detailflex,.bankmassage .detailflex{
            display: flex;
            justify-content: space-between;
            text-align: center;
            margin-top: .266667rem;
        }
        .detailsNumber .detailflex p span:nth-child(2){
            margin-left: .8rem;
        }
        .bankmassage{
            margin: .533333rem .266667rem .533333rem .266667rem;
            padding: .4rem .533333rem;
            background: #d1d1d3;
            border-radius: .133333rem;
            text-align: center;
        }
        .myData-ul{
            margin: 0 .266667rem;
            background: #d1d1d3;
            border-radius: .133333rem;
        }
        .myData-ul li{
            padding: .266667rem;
            border-bottom: 1px solid #efefef;
        }
        .myData-ul li>div{
            display: flex;
            align-items: center;
        }
        .myData-ul li>div span:nth-child(1){
            width: 4.266667rem;
        }
        .myData-ul li>div:nth-child(1) span:nth-child(2){
          padding:0 0 .133333rem .4rem;
        }
        .myData-ul li>div button{
            width: 3.466667rem;
            height: .8rem;
            border: none;
            border-radius: .8rem;
            background: #2472c8;
            color: #fff;
        }
        .myData-ul .on{
            background: #999;
        }
</style>
