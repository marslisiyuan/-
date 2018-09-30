<template>
  <div class="addcardcolor">
        <!-- 添加信用卡title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>添加信用卡</span>
            <span></span>
        </div>
        <!-- 姓名和信用卡号 -->
        <div class="myname xykfixed">
           <div class="mycard"><input type="text" readonly :placeholder="this.name"></div>
           <div class="mycard"><input type="text" readonly :placeholder="this.idcard"></div>
           <div class="mycard"><input type="text" v-model="cardNum" placeholder="请输入本人信用卡卡号"></div>
           <div class="mydata"><input type="text" v-model="cardDate" placeholder=" 有效日期(如0523)"><input v-model="limit" type="text" placeholder=" 输入信用卡额度"></div>
        </div>
        <!-- 选择银行 -->
        <div class="myname">
            <div class="mycard">
                <select name="" id="">
                    <option value="">请选择信用卡银行名称</option>
                    <option v-for="(item,index) in bank" :key="index" value="item.bankid">{{item.bankname}}</option>
                </select>
            </div>
            <div class="mydata"><input type="text" v-model="cardBill" placeholder=" 输入账单日(如5)"><input type="text" v-model="cardrRefund" placeholder=" 输入还款日(如25)"></div>
            <div class="mycard"><input type="text" v-model="cardCvv2" placeholder="输入CVV2码(卡背面最后三位数)"></div>
        </div>
        <!-- 预留手机号 -->
        <div class="myname">
            <div class="mycard"><input type="text" v-model="cardPhone" placeholder="输入银行预留手机号"></div>
            <div class="mydata"><input type="text" v-model="cardCode" placeholder=" 输入短信验证码"><input type="submit" class="timeremain" @click="phoneCode($event)" style="background: #7caffd;color: white;" value="发送短信验证"></div>
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
             name:'',
             idcard:'',
             merchantidNo:'',
             contents:'',
             bank:[
                    {bankname:"北京银行",bankid:"313003"},
                    {bankname:"光大银行",bankid:"303"},
                    {bankname:"广发银行",bankid:"306"},
                    {bankname:"建设银行",bankid:"105"},
                    {bankname:"交通银行",bankid:"301"},
                    {bankname:"民生银行",bankid:"305"},
                    {bankname:"农业银行",bankid:"103"},
                    {bankname:"平安银行",bankid:"307"},
                    {bankname:"浦发银行",bankid:"310"},
                    {bankname:"邮政储蓄银行",bankid:"403"},
                    {bankname:"招商银行",bankid:"308"},
                    {bankname:"中国工商银行",bankid:"102"},
                    {bankname:"中国银行",bankid:"104"},
                    {bankname:"中信银行",bankid:"302"},
                    {bankname:"上海银行",bankid:"313062"},
                    {bankname:"杭州银行",bankid:"313027"},
                    {bankname:"北京农商银行",bankid:"402002"},
                    {bankname:"华夏银行",bankid:"304"},
                    {bankname:"兴业银行",bankid:"309"},
                    {bankname:"台州银行股份有限公司",bankid:"313066"},
                    {bankname:"浙江农村信用社联合社",bankid:"402015"},
                    {bankname:"浙江泰隆商业银行",bankid:"313080"},
                    {bankname:"浙江民泰商业银行",bankid:"313079"},
                    {bankname:"浙商银行",bankid:"316"},
                    {bankname:"河北银行",bankid:"313028"}
             ],
             cardPhone:'',
             cardCode:'',
             cardCvv2:'',
             cardNum:'',
             cardDate:'',
             cardName:'',
            //  账单日
             cardBill:'',
            //  还款日
             cardrRefund:'',
            //  额度
             limit:'',
             version:'',
            unbind:false,
            text:'',
            bandids:''
            }
        },
        mounted(){
         this.version=this.$store.state.version
          this.$store.commit("shownav",false)
          this.merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].id
           this.name=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].bankAccountName
           this.idcard=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].idCardNumber
        //    console.log($.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0])
           var test = window.location.href;  
            // console.log(test)
        },
        methods:{
           backed(){
               window.history.go(-1)
           },
           phoneCode(event){
             this.unbind=true
            //  console.log(this.cardphone+','+this.cardNum)
             if(!this.cardNum){
                 this.text='请输入信用卡号'
             }else if(!this.cardPhone){
                 this.text='请输入手机号码'
             }else if(!this.cardDate){
                 this.text='请输入有效如期'
             }else if(!this.cardBill){
               this.text='请输入账单日'
            }else if(!this.cardrRefund){
                this.text='请输入还款日'
            }else if(!this.limit){
                this.text='请输入信用卡额度'
            }else if(!this.cardCvv2){
                 this.text='请输入cardCvv2'
             }else{
                 $(event.currentTarget).attr('disabled',true)
                 var events=$(event.currentTarget)
                 this.unbind=false
                 var _vm=this
                 var MAC=$.md5('0700'+'490002'+this.limit+this.cardBill+this.cardrRefund+'0'+this.cardNum+this.idcard
                 +this.name+this.cardPhone+this.cardDate+this.cardCvv2+'A'+
               this.merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                   this.$http.post(
                  'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app', 
                  {   
                      '0':'0700',
                      '3':'490002',
                      '5':this.limit,
                      '6':this.cardBill,
                      '7':this.cardrRefund,
                      '37':'0',
                      '41':this.cardNum,
                      '42':this.idcard,
                      '43':this.name,
                      '46':this.cardPhone,
                      '47':this.cardDate,
                      '48':this.cardCvv2,
                      '49':'A',
                      '50':this.merchantidNo,
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
                       this.unbind=true
                       this.text=res.data['39']
                   }
                })
              
             }
           },
          submit(){
            var MAC=$.md5('0700'+'490003'+this.limit+this.cardBill+this.cardrRefund+this.bandids+'0'+this.cardCode+this.idcard+this.merchantidNo+
           this.cardNum+this.cardPhone+this.cardDate+this.cardCvv2+'A'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
           if(!this.cardCode){
               this.text='请输入验证码'
           }else if(!this.cardBill){
               this.text='请输入账单日'
           }else if(!this.cardrRefund){
               this.text='请输入还款日'
           }else if(!this.limit){
               this.text='请输入信用卡额度'
           }else{
                 this.$http.post(
                  'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app', 
                  {    
                      '0':'0700',
                      '3':'490003',
                      '5':this.limit,
                      '6':this.cardBill,
                      '7':this.cardrRefund,
                      '31':this.bandids,
                      '37':'0',
                      '41':this.cardCode,
                      '42':this.idcard,
                      '43':this.merchantidNo,
                      '45':this.cardNum,
                      '46':this.cardPhone,
                      '47':this.cardDate,
                      '48':this.cardCvv2,
                      '49':'A',
                      '59':this.version,
                      '64':MAC
                  },
                  {
                emulateJSON:true
                }).then(function(res){
                    // console.log(res)
                   if(res.data['39']=='00'){
                     this.contents='添加成功'
                      $('.consoles').show()  
                    setTimeout(function(){
                     $('.consoles').hide()
                     window.history.go(-1)},1000)
                   }else{
                        this.contents=res.data['39']
                      $('.consoles').show()  
                    setTimeout(function(){
                     $('.consoles').hide()},2000) 
                   }
                })
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
