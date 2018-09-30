<template>
  <div class="addcardcolor">
        <!-- 添加信用卡title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>落地商户</span>
            <span></span>
        </div>
        <!-- 姓名和信用卡号 -->
        <div class="myname xykfixed">
           <div class="mycard"><input type="text" readonly :placeholder="bankInfo.name"></div>
           <div class="mycard"><input type="text" readonly :placeholder="bankInfo.idcard"></div>
           <div class="mycard"><input type="text" readonly  :placeholder="bankInfo.bankAccount"></div>
           <div class="mydata"><input type="text" readonly  :placeholder="bankInfo.expdate"><input  type="text" :placeholder="bankInfo.limitMoney"></div>
        </div>
        <!-- 选择银行 -->
        <div class="myname">
            <div class="mycard">
                <input type="text" readonly  :placeholder="bankInfo.bankName">
            </div>
                       <div class="mydata"><input type="text" :placeholder="bankInfo.billDay"><input type="text" :placeholder="bankInfo.repaymentDay"></div>
            <div class="mycard"><input type="text" :placeholder="bankInfo.cvn"></div>
        </div>
        <!-- 预留手机号 -->
        <div class="myname" v-if="code!='8068'">
            <div class="mycard"><input type="text" readonly  :placeholder="bankInfo.bankPhone"></div>
            <div class="mydata"><input type="text"  v-model="cardCode" placeholder=" 输入短信验证码"><input type="submit" class="timeremain" @click="phoneCode($event)" style="background: #7caffd;color: white;" value="发送短信验证"></div>
        </div>
        <div class="mysubmit" @click="submit"><button>确定</button></div>
        <!-- 弹出 -->
    <el-dialog
        :visible.sync="unbind"
        width="90%"
        top="30vh"
        >
        <span>{{text}}</span>
        <span slot="footer" class="dialog-footer">
            <!-- <el-button @click="unbind = false">取 消</el-button> -->
            <el-button type="primary" @click="unbind = false">确 定</el-button>
        </span>
     </el-dialog>
      <div class="consoles" style="display:none;">
            <div>
                {{contents}}
            </div>
        </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
             contents:'',
             cardCode:'',
             version:'',
            unbind:false,
            text:'',
            bankInfo:'',
            code:"",
            url:'',
            bandids:''
            }
        },
        mounted(){
            this.version=this.$store.state.version
        this.bankInfo=JSON.parse(sessionStorage.getItem('bank'))
        console.log(this.bankInfo)
       this.code=this.$route.params.code
       console.log(this.code)
       this.url=this.$store.state.url
        // console.log(JSON.parse(sessionStorage.getItem('bank')))
        },
        methods:{
           backed(){
               window.history.go(-1)
           },
           phoneCode(event){
               var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].id
               $(event.currentTarget).attr('disabled',true)
                var events=$(event.currentTarget)
               var _vm=this
                 var MAC=$.md5('0700'+'490002'+this.bankInfo.limitMoney+this.bankInfo.billDay+this.bankInfo.repaymentDay+this.bankInfo.id+this.bankInfo.bankAccount+
               this.bankInfo.idcard+this.bankInfo.name+this.bankInfo.bankPhone+this.bankInfo.expdate+this.bankInfo.cvn+this.code+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                   this.$http.post(
                  this.url, 
                  {   
                      '0':'0700',
                      '3':'490002',
                      '5':this.bankInfo.limitMoney,
                      '6':this.bankInfo.billDay,
                      '7':this.bankInfo.repaymentDay,
                      '37':this.bankInfo.id,
                      '41':this.bankInfo.bankAccount,
                      '42':this.bankInfo.idcard,
                      '43':this.bankInfo.name,
                      '46':this.bankInfo.bankPhone,
                      '47':this.bankInfo.expdate,
                      '48':this.bankInfo.cvn,
                      '49':this.code,
                      '50':merchantidNo,
                      '59':this.version,
                      '64':MAC
                  },{
                      emulateJSON:true
                  }).then(function(res){
                   if(res.data['39']=='00'){
                       _vm.bandids=res.data['31']
                       var curCount = 60  
                        function SetRemainTime() {
                            if (curCount == 0) {
                                clearInterval(interValObj); //停止计时器
                                events.removeClass("disabled").attr("disabled",false).val("重新发送");
                            } else {
                                curCount--;
                                events.addClass("disabled").attr("disabled",true).val("剩余" + curCount + "秒");
                            }
                        }
                        var interValObj = setInterval(SetRemainTime, 1000);
                   }else{
                     this.contents=res.data['39']
                     $('.consoles').show()  
                    setTimeout(function(){
                     $('.consoles').hide()},1500) 
                   }
                })
              
           },
          submit(){
              var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].id
            if(this.code=='8068'){
                    var MAC=$.md5('0700'+'490003'+this.bankInfo.limitMoney+this.bankInfo.billDay+this.bankInfo.repaymentDay+this.bandids+this.bankInfo.id+this.bankInfo.idcard+merchantidNo+this.bankInfo.bankAccount+this.bankInfo.bankPhone+this.bankInfo.expdate+this.bankInfo.cvn+this.code+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                    this.$http.post(
                    this.url, 
                    {    
                      '0':'0700',
                      '3':'490003',
                      '5':this.bankInfo.limitMoney,
                      '6':this.bankInfo.billDay,
                      '7':this.bankInfo.repaymentDay,
                      '31':this.bandids,
                      '37':this.bankInfo.id,
                      '41':'',
                      '42':this.bankInfo.idcard,
                      '43':merchantidNo,
                      '45':this.bankInfo.bankAccount,
                      '46':this.bankInfo.bankPhone,
                      '47':this.bankInfo.expdate,
                      '48':this.bankInfo.cvn,
                      '49':this.code,
                      '59':this.version,
                      '64':MAC
                    },
                    {
                    emulateJSON:true
                    }).then(function(res){
                        // console.log(res)
                    if(res.data['39']=='00'){
                        window.location.href=res.data['38']
                        // this.contents='请求成功'
                        // $('.consoles').show()  
                        // setTimeout(function(){
                        // $('.consoles').hide()
                        // window.history.go(-1)},1000)
                    }else{
                       this.contents=res.data['39']
                       $('.consoles').show()  
                        setTimeout(function(){
                        $('.consoles').hide()},1000)
                    }
                    })
            }else{
                 if(!this.cardCode){
                     this.contents='请输入验证码'
                     $('.consoles').show()  
                    setTimeout(function(){
                     $('.consoles').hide()},1500)
                 }else{
            var MAC=$.md5('0700'+'490003'+this.bankInfo.limitMoney+this.bankInfo.billDay+this.bankInfo.repaymentDay+this.bandids+this.bankInfo.id+this.cardCode+this.bankInfo.idcard+merchantidNo+this.bankInfo.bankAccount+this.bankInfo.bankPhone+this.bankInfo.expdate+this.bankInfo.cvn+this.code+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                    this.$http.post(
                    this.url, 
                    {    
                      '0':'0700',
                      '3':'490003',
                      '5':this.bankInfo.limitMoney,
                      '6':this.bankInfo.billDay,
                      '7':this.bankInfo.repaymentDay,
                      '31':this.bandids,
                      '37':this.bankInfo.id,
                      '41':this.cardCode,
                      '42':this.bankInfo.idcard,
                      '43':merchantidNo,
                      '45':this.bankInfo.bankAccount,
                      '46':this.bankInfo.bankPhone,
                      '47':this.bankInfo.expdate,
                      '48':this.bankInfo.cvn,
                      '49':this.code,
                      '59':this.version,
                      '64':MAC
                    },
                    {
                    emulateJSON:true
                    }).then(function(res){
                        // console.log(res)
                    if(res.data['39']=='00'){
                        this.contents='请求成功'
                        $('.consoles').show()  
                        setTimeout(function(){
                        $('.consoles').hide()
                        window.history.go(-1)},1000)
                    }else{
                       this.contents=res.data['39']
                       $('.consoles').show()  
                        setTimeout(function(){
                        $('.consoles').hide()},1000)
                    }
                    })
                 }
              }
           }
          }
        
    }
</script>
<style scoped="scoped">
       .addcardcolor{
           background: white;
           padding-top: .266667rem;
           height: 100%;
       }
       .myname{
         margin: .4rem .266667rem  .4rem .266667rem ;
         padding: .186667rem 0;
         background:  #f6f6f9;;
        border-radius: .08rem;
       }
       .xykfixed{
            margin-top: 1.2rem;
        }
      .myname .mycard{
         padding:.186667rem .266667rem;
         display: flex;
         
       }
       .myname .mycard select{
           width: 100%;
           padding: .213333rem;
           border-radius: .08rem;
           border: none;
           background: white;
           /* color: #a9a9a9; */
       }
      .myname .mycard input{
           width: 100%;
           padding: .213333rem;
           border-radius: .08rem;
           border: none;
       }
      .myname .mydata{
           display: flex;
           justify-content: space-between;
       }
      .myname .mydata input{
           flex-grow: 1;
           margin:.186667rem .266667rem;
           padding:.213333rem 0;
           border-radius: .08rem;
           border:none; 
           width: 40%;
       }
       .mysubmit{
        padding: .4rem 0;
        margin: .4rem .266667rem  .4rem .266667rem ;
       }
       .mysubmit button{
           width: 100%;
           background: #7caffd;
           font-size: .48rem;
           color: white;
           padding: .213333rem;
           border: none;
           border-radius: 0.08rem;
       }
</style>
