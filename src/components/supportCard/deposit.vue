<template>
    <div>
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div><span>提现</span><span></span>
        </div>
        <div>
            <h2 class="recharge-h2">余额￥<span style="font-size:.533333rem;color:#e5630e;">{{balance}}</span></h2>
            <div class="recharge-input"><input type="number" v-model="money" placeholder="充值金额"></div>
        </div>
        <div class="button">
            <button @click="deposit">提现</button>
        </div>
        <div class="consoles" style="display:none;">
            <div>
                {{text}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
             version:'',
             money:'',
             text:'',
             balance:'',
            }
        },
        mounted(){
          this.version=this.$store.state.version
           var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
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
            deposit(){
               var _vm=this
                var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
         var MAC=$.md5('0700190888'+this.money+'1'+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {
                       '0':'0700',
                       '3':'190888',
                       '5':this.money,
                       '6':'1',
                       '42':merchantidNo,
                       '59':this.version,
                       '64':MAC
                },{
                emulateJSON:true
                }).then(function(res){
                   if(res.data['39']=='00'){
                       _vm.text='提交成功正在审核'
                          $('.consoles').fadeIn()
                          setTimeout(function(){
                           $('.consoles').fadeOut()  
                           window.history.go(-1) 
                          },1000)
                     }else{
                          _vm.text='余额不足，最低提现金额不小于10'
                          $('.consoles').fadeIn()
                          setTimeout(function(){
                           $('.consoles').fadeOut()   
                          },2000)
                     }
                })
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
 .button{
     margin-top: .8rem;
     display: flex;
     justify-content: center;
 }
 .button button{
     width: 8.533333rem;
     height: 1.333333rem;
     line-height: 1.333333rem;
     border: none;
     font-size: .426667rem;
     color: #fff;
     background: #13c8d6;
     border-radius: .133333rem;
 }
</style>
