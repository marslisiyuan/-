<template>
  <div  id="bankCard"
     v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%">
        <!-- 选择银行卡title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>请选择银行卡</span>
            <router-link tag="span" to="/supportCard/addCard">添加</router-link>
        </div>
        <!-- 绑定银行卡 -->
        <div class="taggleyhk">
            <p class="on">绑定成功</p>
            <p>解绑信用卡</p>
        </div>

        <ul class="bank">
            <li v-for="(item,index) in cardInfo" :key="index" @click="passageway(item.short_cn_name,item.BANK_ACCOUNT,item.ID,item.STATUS,item.cvn,item.expdate)" >
                <p class="bankname">{{item.short_cn_name}}</p>
                <span class="bankfixed">刷卡</span>
                <p class="banknum">{{item.BANK_ACCOUNT | change}}&#x3000;&#x3000;&#x3000;</p>
            </li>
        </ul>
        <div class="consoles" style="display:none;">
            <div>
                您的信用卡还没落地
            </div>
        </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
              cardInfo:'',
              money:'',
              version:'',
              loading2: true,
              url:''
            }
        },
        mounted(){
            this.money=sessionStorage.getItem('money')
            this.version=this.$store.state.version
            this.url=this.$store.state.url
          this.$store.commit('shownav',false)
            var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
            var MAC=$.md5('0700190932'+merchantNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post(this.url, 
                    {    
                        '0':'0700',
                        '3':'190932',
                        '42':merchantNo,
                        '59':this.version,
                        '64':MAC
                    },
                    {
                emulateJSON:true
                }).then(function(res){
                    if(res.data['39']=='00'){
                        this.cardInfo=$.parseJSON(eval(JSON.stringify(res.data['57'])))
                    }else{
                      
                    }
                    // console.log($.parseJSON(eval(JSON.stringify(res.data['57']))))
                    this.loading2=false
                })
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            passageway(bankName,bankAccount,bankid,status,cvn,expdate){
                  this.$router.history.push('/emptypay/passageway')
                  sessionStorage.setItem('bank',JSON.stringify({'bankName':bankName,'bankAccount':bankAccount,'bankid':bankid,'cvn':cvn,'expdate':expdate}))
                
            }
        },
        filters:{
            change(event){
                return event.replace(event.slice(5,12),'***')
            }
        }
    }
</script>
<style scoped="scoped">
      #bankCard{
          height: 100%;
      }
      .taggleyhk{
          /* margin-top: 1.466667rem; */
          width: 100%;
          padding: 1.466667rem  .4rem 0 .4rem;
          display: flex;
          justify-content: center;
      }
      .taggleyhk p{
          flex-grow: 1;
          text-align: center;
          font-size: .426667rem;
          padding: .08rem;
          background: white;
          border: 1px solid #505050;
          color: black;
      }
      .taggleyhk p:nth-child(2){
        border-bottom-right-radius:.266667rem; 
        border-top-right-radius:.266667rem; 
        
      }
      .taggleyhk p:nth-child(1){
        border-bottom-left-radius:.266667rem; 
        border-top-left-radius:.266667rem; 
      }
      .taggleyhk .on{
          background: #505050;
          color: white;
      }
      .bank{
          width: 100%;
          margin-top: .533333rem;
          padding: 0 .4rem;
      }
      .bank li{
          height: 2.933333rem;
          width: 100%;
          border-radius: .266667rem;
          font-size: .533333rem;
          background: #f0515f;
          position: relative;
          color: white;
          margin-top:.266667rem;
      }
      .bank li .bankname{
          position: absolute;
          top: .4rem;
          left: 1.866667rem;
      }
      .bank li .bankfixed{
        position: absolute;
        right: .8rem;
        top: .533333rem;
      }
      .bank li .banknum{
          position: absolute;
          left: 1.866667rem;
          bottom: .4rem;
      }
</style>
