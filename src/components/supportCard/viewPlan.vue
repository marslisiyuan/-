<template>
  <div 
  id="viewplan"
   v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%">
        <!-- 养卡计划title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>预览计划</span>
            <span></span>
        </div>
        <div class="titlenext"></div>
        <!-- 信用卡信息 -->
        <div class="cardplan">
            <ul class="ykjh">
                <li>
                    <div class="name">
                        <div class="logo">
                            <img :src='bankInfo.bankAccountName | img(banks)' alt="">
                            <p>{{bankInfo.bankName}}</p>
                        </div>
                        <div>创建养卡计划</div>
                    </div>
                    <div class="cardnum">{{bankInfo.bankAccount | change}}</div>
                    <div class="xyed">
                        <p>信用额度</p>
                        <p>出账单日</p>
                        <p>还款日期</p>
                    </div>
                    <div class="xyed xyeddata">
                        <p>{{bankInfo.limitMoney}}</p>
                        <p>{{bankInfo.billDay}}</p>
                        <p>{{bankInfo.repaymentDay}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <ul class="viewPlan" v-for="(item,index) in viewPlan" :key="index" @click="plandetails(index)">
           <li><span>创建时间:{{item.CREATE_TIME.time | formdate}}</span></li>
           <li><span>计划周期{{item.START_TIME.time | date}}至{{item.END_TIME.time | date}}</span><span></span></li>
           <li><span>本期应还:{{item.PLAN_AMT}}</span><span>本期已还:{{item.THAW_TRX}}</span></li>
           <li><span>订单状态：进行中</span><span style="padding:5px;background:#7eaffc;color:white;border-radius:3px;">计划详情</span></li>
        </ul>

  </div>
</template>
<script>
    export default {
        data(){
            return{
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
                bankInfo:'',
                viewPlan:'',
                version:'',
                loading2: true,
            }
        },
        mounted(){
          this.$store.commit("shownav",false)
          this.version=this.$store.state.version
           this.bankInfo=JSON.parse(sessionStorage.getItem('bank'))
           console.log(sessionStorage.getItem('bank'))
           var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
           var MAC=$.md5('0700190212'+merchantNo+this.bankInfo.bankAccount+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
           this.$http.post(
               'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {    
                    '0':'0700',
                    '3':'190212',
                    '42':merchantNo,
                    '43':this.bankInfo.bankAccount,
                    '59':this.version,
                    '64':MAC
                },
                {
                emulateJSON:true
                }).then(function(res){
                    this.viewPlan=eval(res.data['57'])
                    this.loading2=false
                })
        },
        methods:{
          backed(){
              window.history.go(-1)
          },
          plandetails(event){
              sessionStorage.setItem('bankinfo',JSON.stringify(this.viewPlan[event]))
              this.$router.history.push('/supportCard/planDetails')
          }
        },
        filters:{
            change(event){
                if(event){
                return event.replace(event.slice(5,12),'***')
                }
            },
            formdate(event){
                if(event){
               var date = new Date(event),
                Y = date.getFullYear() + '-',
                M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
                D = date.getDate() + ' ',
                h = date.getHours() + ':',
                m = date.getMinutes() + ':',
                s = date.getSeconds()
                return Y+M+D+h+m+s
                }
            },
             date(event){
                if(event){
               var date = new Date(event),
                Y = date.getFullYear() + '-',
                // console.log(Y)
                M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
                D = date.getDate() + ' '
                return Y+M+D
                }
            },
            img(event,bank){
            for(var i=0;i<bank.length;i++){
                    if(bank[i].bankid==event){
                    return  require('@/assets/pic/bank/xhdip/'+bank[i].bankpic+'.png')
                 }
               }
            }
        }
    } 
</script>
<style>
      #viewplan{
          height: 100%;
      }
      .cardplan{
          padding: .266667rem 0 .533333rem 0;
          
       }
       .ykjh{
           margin: 0 .533333rem;
           line-height: 1;
       }
       .ykjh li{
           height: 3.6rem;
           width:8.933333rem; 
           margin: .266667rem auto 0 auto;
           background-image:url(../../assets/pic/pic/tongyong_bg.png) ;
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
       .viewPlan{
            margin: .266667rem .533333rem;
            padding:0 .4rem;
            background: white;
       }
       .viewPlan li{
           padding: .266667rem 0;
           border-bottom: 1px solid #eee;
           display: flex;
           align-items: center;
           justify-content: space-between;
       }
</style>
