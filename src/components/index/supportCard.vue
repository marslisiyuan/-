<template>
  <div id="supportcard"
       v-loading="loading2"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%">
               <!-- 养卡计划title -->
        <div class="title titlefixed">
            <span></span>
            <!-- <router-link tag="span" to="/supportCard/Recharge">账户余额</router-link> -->
            <!-- <div @click="backed"><img src="../../assets/left.png" alt=""></div> -->
            <span>卡包</span>
            <!-- <router-link tag="span" to="/supportCard/addCard">添加</router-link> -->
            <span @click="addcard">添加</span>
            <!-- <router-link tag="span" to="/supportCard/addCard">添加</router-link> -->
        </div>
        <el-dialog
            :visible.sync="unbind"
            width="90%"
            top="30vh"
            >
            <span>{{dialogtext}}</span>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="unbind = false">取 消</el-button> -->
                <el-button type="primary" @click="unbind = false">确 定</el-button>
            </span>
        </el-dialog>
         <div class="mycard">
            <p>我的信用卡</p>
         </div>
         <ul class="ykjh">
             <li v-for="(item,index) in cardInfo" v-if="item.INCREASE_LIMIT_STATUS
=='10B'" :key='index' @click="plan(item.short_cn_name,item.BANK_ACCOUNT,item.ID,item.BANK_NAME,item.BANK_PHONE,item.cvn,item.expdate,item.ID_CARD_NUMBER,item.BANK_ACCOUNT_NAME,item.LIMIT_MONEY,item.BILL_DAY,item.REPAYMENT_DAY)">
                <div class="name">
                    <div class="logo">
                        <img :src='item.BANK_NAME | img(banks)' alt="">
                        <p>{{item.short_cn_name}}</p>
                    </div>
                    <div>创建养卡计划</div>
                </div>
                <div class="cardnum">{{item.BANK_ACCOUNT | change}}</div>
                <div class="xyed">
                    <p>信用额度</p>
                    <p>出账单日</p>
                    <p>还款日期</p>
                </div>
                <div class="xyed xyeddata">
                    <p>{{item.LIMIT_MONEY}}</p>
                    <p>{{item.BILL_DAY}}</p>
                    <p>{{item.REPAYMENT_DAY}}</p>
                </div>
             </li>
        </ul>
  </div>
</template>
<script>
    export default {
        data(){
            return{
               cardInfo:'',
               banks:[
                    {bankid:"313003",bankname:"北京银行",bankpic:"beijinyinhang"},
                    {bankid:"303",bankname:"光大银行",bankpic:"guangdayinhang"},
                    {bankid:"306",bankname:"广发银行",bankpic:"guangfayinhang"},
                    {bankid:"105",bankname:"建设银行",bankpic:"jiansheyinhang"},
                    {bankid:"301",bankname:"交通银行",bankpic:"jiaotongyinhang"},
                    {bankid:"305",bankname:"民生银行",bankpic:"minshenyinhang"},
                    {bankid:"103",bankname:"农业银行",bankpic:"nongyeyinhang"},
                    {bankid:"307",bankname:"平安银行",bankpic:"pinanyinhang"},
                    {bankid:"310",bankname:"浦发银行",bankpic:"pufayinhang"},
                    {bankid:"403",bankname:"邮政储蓄银行",bankpic:"youzhenyinhang"},
                    {bankid:"308",bankname:"招商银行",bankpic:"zhaoshangyinhang"},
                    {bankid:"102",bankname:"中国工商银行",bankpic:"gonshangyinhang"},
                    {bankid:"104",bankname:"中国银行",bankpic:"zhonguoyinhang"},
                    {bankid:"302",bankname:"中信银行",bankpic:"zhonxinyinhang"},
                    {bankid:"313062",bankname:"上海银行",bankpic:"shanghaiyinhang"},
                    {bankid:"313027",bankname:"杭州银行",bankpic:"yl"},
                    {bankid:"402002",bankname:"北京农商银行",bankpic:"beijinnongshang"},
                    {bankid:"304",bankname:"华夏银行",bankpic:"huaxiayinhang"},
                    {bankid:"309",bankname:"兴业银行",bankpic:"xinyeyinhang"},
                    {bankid:"313066",bankname:"台州银行股份有限公司",bankpic:"taizhouyinhang"},
                    {bankid:"402015",bankname:"浙江农村信用社联合社",bankpic:"noncunxinyonsheyinhang"},
                    {bankid:"313080",bankname:"浙江泰隆商业银行",bankpic:"tailongyinhang"},
                    {bankid:"313079",bankname:"浙江民泰商业银行",bankpic:"mintaiyinhang"},
                    {bankid:"316",bankname:"浙商银行",bankpic:"yl"},
                    {bankid:"313028",bankname:"河北银行",bankpic:"yl"}
                ],
                version:'',
                loading2: true,
                unbind:false,
                dialogtext:'',
                status:'',
                bank:''
            }
        },
        mounted(){
            // var url = window.location.href;
            // console.log(url)
            this.$store.commit('shownav',true)
            this.bank=eval(JSON.parse(localStorage.getItem('info'))['42'])[0]
            setTimeout(function(){
             $('.navname').map(function(index,item){
                   if($(item).attr('data')){
                       $(item).children('img').attr('src',require('@/assets/drawable/'+$(item).attr('data')+'.png'))
                   }
                })
             $('#kb').children('img').attr('src',require('@/assets/drawable/djkb.png'))
            },10)
            // console.log(JSON.parse(localStorage.getItem('info'))['42'])
            this.version=this.$store.state.version
            if(localStorage.getItem('Certificationstatus')){
                this.status=localStorage.getItem('Certificationstatus')
                
            }else{
                this.status=this.bank.freezeStatus
            }
       
            var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
            var MAC=$.md5('0700190932'+merchantNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app', 
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
                    this.loading2=false
                    // console.log($.parseJSON(eval(JSON.stringify(res.data['57']))))
                    
                })
        },
        methods:{
           backed(){
               window.history.go(-1)
           },
           plan(bankName,bankAccount,id,bankAccountName,bankPhone,cvn,expdate,idcard,name,limitMoney,billDay,repaymentDay){
               sessionStorage.setItem('bank',JSON.stringify({'bankPhone':bankPhone,'bankName':bankName,'bankAccountName':bankAccountName,'bankAccount':bankAccount,'id':id,'cvn':cvn,'expdate':expdate,'idcard':idcard,'name':name,'limitMoney':limitMoney,'billDay':billDay,'repaymentDay':repaymentDay}))
               this.$router.history.push({name:'Plan'})
           },
           addcard(){
            //    var freezeStatus = sessionStorage.getItem('freezeStatus');
            console.log(this.status)
                if(this.status == '10B'){
                    this.$router.push('/supportCard/addCard');
                }else{
                    this.unbind=true;
                    this.dialogtext = '请先完成实名认证';
                    return;
                }
           }
        },
        filters:{
            change(event){
                return event.replace(event.slice(5,12),'***')
            },
            img(event,bank){
                for(var i=0;i<bank.length;i++){
                    
                     if(bank[i].bankid==event){

                     return  require('@/assets/pic/bank/xhdip/'+bank[i].bankpic+'.png')
                    }
                    
                }
            }
        },
        
    }
</script>
<style scoped="scoped">
       #supportcard{
         height: 100%;
       }
       .mycard{
           padding-top: 1.733333rem;
           margin: 0 .533333rem .533333rem .533333rem;
       }
       .mycard p{
           width: 100%;
           background: #7eaffc;
           text-align: center;
           color: white;
           padding: .266667rem 0;
           border-radius: .533333rem;
           font-size: .426667rem;
           font-weight: 700;
       }
       .ykjh{
           line-height: 1.1;
           margin: 0 .533333rem;
       }
       .ykjh li{
           height: 3.6rem;
           width:8.933333rem; 
           margin: .266667rem auto 0 auto;
           background-image: url(../../assets/pic/pic/tongyong_bg.png);
           padding: .266667rem;
           color: white;
       }
       .ykjh .name{
           display: flex;
           

       }
       .ykjh .name>div{
        width: 4.2rem;
       }
       .ykjh .name .logo{
           display: flex;
           align-items: center;
       }
       .ykjh .name .logo img{
        width: 1.333333rem;
        height: 1.333333rem;
        /* background: black; */
       }
       .ykjh .name .logo p{
           font-size: .373333rem;
           width: 2.853333rem;
           text-align: center;
           height: .666667rem;
           line-height: .666667rem;
           vertical-align: middle;
           font-weight: 700;
           border-right: 1px solid #fff;
       }
       .ykjh .name div:nth-child(2){
           text-align: center;
           height: 1.333333rem;
           line-height: 1.333333rem;
           font-size: .373333rem;
       }
       .cardnum{
           text-align: center;
           font-size: .4rem;
       }
      .ykjh .xyed{
         display: flex;
         margin-top: .133333rem;
       }
       .ykjh .xyed p{
           flex-grow: 1;
           text-align: center;
           width: 2.8rem;
       }
       .ykjh .xyeddata{
           margin-top:.266667rem;
       }
       .ykjh .xyeddata p{
           font-size: .426667rem;
           height: .533333rem;
       }
       .ykjh .xyeddata p:nth-child(1),.ykjh .xyeddata p:nth-child(2){
           border-right: 1px solid #fff;
       }
</style>
