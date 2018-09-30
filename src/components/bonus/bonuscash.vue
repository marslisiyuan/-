<template>
  <div>
        <!-- 分润提现title -->
        <div class="title titlefixed">
             <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>分润提现</span>
            <span></span>
            <router-link tag="span" to="/Bonus/bonuscashdetail">提现明细</router-link>
        </div>
        <div class="txmoney">
            <p>提现金额</p>
            <div class="moneynum"><input type="number" v-model="money"  placeholder="请输入提现金额"><span @click="allMoney">全部提现</span></div>
            <div><span>当前余额</span><span class="spanmoney">{{balance}}</span></div>
        </div>
        <!-- 提现须知 -->
        <div class="txabout">
            分润最低提现金额不小于100，收取1%的手续费，节假日提现，正常工作日到账。
        </div>
        <!-- 立即提现 -->
        <div class="button">
            <button @click="submit($event)">立即提现</button>
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
              show:false,
              money:'',
              version:'',
              balance:'',
              text:''
            }
        },
        mounted(){
            this.version=this.$store.state.version
         this.$store.commit("shownav",false)
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
                 this. balance=res.data['35']
             })
        },
        methods:{
          backed(){
              window.history.go(-1)
          },
          allMoney(){
              this.money=this.balance
          },
          submit(event){
              console.log(event)
              $(event.currentTarget).attr('disabled','disabled')
              var events=$(event.currentTarget)
              var _vm=this
              var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
              var MAC=$.md5('0700190888'+this.money+'2'+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
              this.$http.post(
                  'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                  {
                    '0':'0700',
                    '3':'190888',
                    '5':this.money,
                    '6':'2',
                    '42':merchantidNo,
                    '59':this.version,
                    '64':MAC
                  },{
                     emulateJSON:true
                  }).then(function(res){
                     if(res.data['39']=='00'){
                        _vm.text='提现成功'
                         var curCount = 60  
                                function SetRemainTime() {
                                    if (curCount == 0) {
                                        clearInterval(interValObj); //停止计时器
                                        events.removeClass("disabled").attr("disabled",false).html("提现");
                                    } else {
                                        curCount--;
                                        events.addClass("disabled").attr("disabled",true).html("剩余" + curCount + "秒");
                                    }
                                }
                                var interValObj = setInterval(SetRemainTime, 1000);
                     }else{
                         event.attr("disabled",false)
                         _vm.text='提现最低为100元'
                     }
                        $('.consoles').fadeIn()
                        setTimeout(function(){
                        $('.consoles').fadeOut()   
                        },2000)
                  })
              
          }
        }
    }
</script>
<style scoped="scoped">
      .txmoney{
          margin-top: 1.466667rem;
          padding: .4rem  .4rem .533333rem .4rem;
          font-size: .426667rem;
          background: white;
          line-height: .666667rem;
      }
      .txmoney .moneynum{
         display: flex;
         justify-content: space-between;
         margin: .4rem 0;
      }
      .txmoney .moneynum input{
          border: none;
      }
      .txmoney .spanmoney{
          margin-left: .266667rem;
          font-size:.586667rem;
          color: red;
      }
      .txabout{
          margin: .533333rem;
          padding: .266667rem;
          color: red;
          font-size: .4rem;
          background: white;
      }
      .button{
          margin-top: .533333rem;
          text-align: center;
      }
      .button button{
          background: #7caffd;
          color: white;
          border: none;
          width: 8.533333rem;
          height: 1.333333rem;
          font-size: .48rem;
          border-radius: .133333rem;
      }
</style>
