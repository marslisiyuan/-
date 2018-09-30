<template>
  <div>
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
        <div class="previewPlan">
            <p>还款金额:{{next.money}}</p>
            <p>还款周期：{{next.startDate}}至{{next.endDate}}</p>
            <p>日还款笔数：{{next.refundNum}}笔</p>
            <p>还款手续费：￥{{Order['9']}}</p>
            <p>还款笔数费：￥{{Order['7']}}</p>
            <div class="content">
                <router-link tag="button" to="/supportCard/nrplanRecord">预览详细计划</router-link>
                <button @click="backed">修改计划</button>
            </div>
        </div>
        <div class="footerbutton">
            <button @click="submitPlan">提交计划</button>
        </div> 
         <!-- 弹出 -->
        <div class="consoles" style="display:none">
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
              bankInfo:'',
              next:'',
              Order:'',
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
                unbind:false,
                text:''
            }
        },
        mounted(){
          this.version=this.$store.state.version
          this.$store.commit("shownav",false)
          this.bankInfo=JSON.parse(sessionStorage.getItem('bank'))
          this.Order=JSON.parse(sessionStorage.getItem('plan'))
          this.next=JSON.parse(sessionStorage.getItem('next'))
        },
        methods:{
          backed(){
              window.history.go(-1)
          },
          submitPlan(){
                var jsonArray=$.parseJSON(JSON.parse(sessionStorage.getItem('plan'))['57'])
                var arr=[]
                for(var i=0;i<jsonArray.length;i++){
                     var obj={}
                     for(var tmp in jsonArray[i]){
                         if(tmp=='status'){
                          obj.status=jsonArray[i][tmp]
                         }else if(tmp=='type'){
                          obj.type=jsonArray[i][tmp]
                         }else if(tmp=='bindID'){
                            obj.toBindId=jsonArray[i][tmp] 
                            obj.fromBindId=jsonArray[i][tmp] 
                         }else if(tmp=='money'){
                            obj.toMoney=jsonArray[i][tmp] 
                            obj.fromMoney=jsonArray[i][tmp] 
                         }else if(tmp=='time'){
                            obj.planTime=new Date(jsonArray[i][tmp]).getTime()
                         }else if(tmp=='groupNum'){
                            obj.groupNum=jsonArray[i][tmp]
                         }
                     }
                     arr.push(obj)
                 }
                 jsonArray=JSON.stringify(arr)
                 var startDate=new Date(this.next.startDate).getTime()
                 var endDate=new Date(this.next.endDate).getTime()
             var reserveMoney=Math.ceil(parseFloat(this.Order['40'])+parseFloat(this.Order['41'])),
                 merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo,
                 MAC=$.md5('0700390049'+this.next.money+startDate+endDate+this.Order['9']+this.Order['7']+merchantNo+jsonArray+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                //  console.log(new Date(this.next.startDate).getTime())
                var _vm=this
                 this.$http.post('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',{
                    '0':'0700',
                    '3':'390049',
                    '8':this.next.money,
                    '10':startDate,
                    '11':endDate,
                    '12':this.Order['9'],
                    '13':this.Order['7'],
                    '42':merchantNo,
                    '57':jsonArray,
                    '59':this.version,
                    '64':MAC
                 },{
                     emulateJSON:true
                 }).then(function(res){
                      
                     if(res.data['39']=='00'){
                         this.text='提交计划成功'
                         $('.consoles').show()
                         setTimeout(function(){
                            $('.consoles').hide()
                            window.history.go(-2)
                         },1000)
                         
                     }else{
                         this.text=res.data['39']
                          $('.consoles').show()
                         setTimeout(function(){
                            $('.consoles').hide()
                         },2000)
                     }
                 })
             
          }
        },filters:{
            change(event){
                if(event){
                   return event.replace(event.slice(5,12),'***')
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
       
       .previewPlan{
           margin:0 .533333rem;
           padding:.266667rem .533333rem;
           background: #d1d1d3;
           border-radius: .133333rem;
       }
       .previewPlan p{
           margin:.186667rem;
       }
       .previewPlan .content{
           border-top: 1px solid #999;
           display:flex;
           justify-content: space-between;
           padding-top: .266667rem;
           margin-top: .4rem;
       }
       .previewPlan .content button{
        width: 3.733333rem;
        border: 1px solid #00b4d7;
        color: #00b4d7;
        padding:.133333rem 0;

       }
       .footerbutton{
           margin:.8rem .533333rem;
       }
       .footerbutton button{
           border: none;
           background: #00b4d7;
           width: 100%;
           padding: .266667rem;
           font-size: .48rem;
           color: white;
       }
</style>
