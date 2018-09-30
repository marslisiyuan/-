<template>
  <div
    id="plan"
    v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%">
        <!-- 平安保险title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>平安保险</span>
            <span></span>
        </div>
        <div class="titlenext"></div>
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
        <ul class="draftPlan">
            <li @click="show">
                <div>
                    <img src="../../assets/pic/pic/makedesign.png" alt="">
                    <span>制定计划</span>
                </div>
               <img class="draftPlanimg" src="../../assets/right.png" alt="">
            </li>
            <router-link tag="li" to="/supportCard/viewPlan">
                <div>
                    <img src="../../assets/pic/pic/lookdesign.png" alt="">
                    <span>查看计划</span>
                </div>
               <img class="draftPlanimg" src="../../assets/right.png" alt="">
            </router-link>
            <router-link tag="li" to="/supportCard/myData">
                <div>
                    <img src="../../assets/pic/pic/changedata.png" alt="">
                    <span style="color:red">落地绑卡</span>
                </div>
               <img class="draftPlanimg" src="../../assets/right.png" alt="">
            </router-link>
            <li @click="unbind=true">
                <div>
                    <img src="../../assets/pic/pic/cardbind.png" alt="">
                    <span>卡片解绑</span>
                </div>
               <img class="draftPlanimg" src="../../assets/right.png" alt="">
            </li>
            <!-- <li v-if="state!='00'" @click="merchants">
                <div>
                    <img src="../../assets/pic/pic/cardbind.png" alt="">
                    <span>落地商户</span>
                </div>
                <p class="draftPlanp"><span  style="color:red;">未绑定</span>&#x3000;<img class="draftPlanimg" src="../../assets/right.png" alt=""></p>
            </li> -->
            <!-- <li v-else >
                <div>
                    <img src="../../assets/pic/pic/cardbind.png" alt="">
                    <span>落地商户</span>
                </div>
                <p class="draftPlanp"><span>已绑定</span>&#x3000;<img class="draftPlanimg" src="../../assets/right.png" alt=""></p>
            </li> -->
            <!-- <li>
                <div>
                    <img src="../../assets/pic/pic/cardbind.png" alt="">
                    <span>落地小额</span>
                </div>
                <img class="draftPlanimg" src="../../assets/right.png" alt="">
            </li> -->
        </ul>
             <!-- 弹出内容 -->
     <!-- <div class="alertcontent">
         <p>【收到钱请不要转给任何人】</p>
         <p class="textleft">亲,您的应得余额为9498元，手续费为500+元，是否继续！</p>
         <div class="alertbutton">
             <button class="buttonleft hidden" @click="hidden">取消</button>
             <button class="buttonright hidden"  @click="hidden">确定</button>
         </div>
    </div> -->
     <!-- 遮罩层 -->
     <!-- <div class="alert"></div> -->
   <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->

    
    <!-- 解绑 -->
    <el-dialog
        title="提示"
        :visible.sync="unbind"
        width="90%"
    >
        <span>确定解绑?</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="unbind = false">取 消</el-button>
            <el-button type="primary" @click="removeCard">确 定</el-button>
        </span>
    </el-dialog>
        <!--  弹出 -->
        <div class="alert" style="display:none;">
            <h2>温馨提示</h2>
            <p>无预留还款本金需</p>
            <p>预先充值手续费</p>
            <div class="alert-button">
                <button @click="formulatePlan('1')">预留本金还款</button><br>
                <!-- <button @click="formulatePlan('2')">无预留本金还款</button><br> -->
                <button @click="hide" style="background:white;color:black;">取消</button>
            </div>
        </div>
        <!-- 弹出 -->
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
               modal1: false,
               bankInfo:'',
               contents:'1235456',
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
                // state:'',
                loading2:false,
                dialogVisible: false,
                unbind:false,
                url:''
            }
        },
        created(){
             
        },
        mounted(){
          this.bankInfo=JSON.parse(sessionStorage.getItem('bank'))
          this.version=this.$store.state.version
          this.$store.commit("shownav",false)

        
        },
        methods:{
          backed(){
              window.history.go(-1)
          },
          removeCard(){
                 this.unbind=false
                 var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
                 var MAC=$.md5('0700190520'+this.bankInfo.bankAccount+merchantNo+this.bankInfo.id+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                 this.$http.post('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app', 
                    {    
                        '0':'0700',
                        '3':'190520',
                        '8':this.bankInfo.bankAccount,
                        '42':merchantNo,
                        '43':this.bankInfo.id,
                        '59':this.version,
                        '64':MAC
                    },
                    {
                emulateJSON:true
                }).then(function(res){
                    if(res.data['39']=='00'){
                      this.contents='解绑成功'
                      $('.consoles').show()
                      setTimeout(function(){
                        $('.consoles').hide()
                          window.history.go(-1)
                      },1000)
                    }
                })
              
          },
          formulatePlan(index){
              
              if(index=='1'){
                //  var states=this.state
               this.$router.push({name:'wkchannel'})
               sessionStorage.setItem('states',JSON.stringify({'num':index}))
              }else{
                this.$router.push({name:'noreserve'})
              }
              
          },
          merchants () {
              this.$router.push('/supportCard/tiedCard')
            },
            show(){
                $('.alert').show()
            //    this.$router.history.push({name:'FormulatePlan'})
            },
            hide(){
                $('.alert').hide()
            }
            
        },
        filters:{
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
<style scoped="scoped">
     #plan{
         height: 100%;
     }
       .cardplan{
          padding: .266667rem 0 .533333rem 0;
          background: white;
       }
       .ykjh{
           margin: 0 .533333rem;
           line-height: 1;
       }
       .ykjh li{
           height: 3.6rem;
           width:8.933333rem; 
           margin: .266667rem auto 0 auto;
           background-image:url('../../assets/pic/pic/tongyong_bg.png') ;
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
       .draftPlan{
           background: white;
       }
       .draftPlanp{
           display: flex;
           align-items: center;
       }
       .draftPlan li{
         height: 1.466667rem;
         padding: 0 .266667rem;
         width: 100%;
         border-bottom: 1px solid #f6f6f9;
         display: flex;
         align-items: center;
         justify-content: space-between;
       }
       .draftPlanimg{
           height: .4rem;
       }
       .draftPlan li div>img{
          height:.586667rem;
          width: .586667rem;
       }
       .draftPlan li>div{
           display: flex;
           align-items: center;
       }
       .draftPlan li>div>span{
         margin-left: .266667rem;
         font-size: .373333rem;
         font-weight: 600;
         color: black
       }

      /* 弹出 */
         .alert{
        position: absolute;
        top: 20%;
        font-size: .266667rem;
        display: flex;
        width: 70%;
        box-sizing: border-box;
        background: #fafafa;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        border-radius: .266667rem;
        left: 0;
        font-size: .426667rem;
        right: 0;
        margin: 0 auto;
        padding: .533333rem;
        }
        /* .alert h2 img{
            height: .48rem;
        } */
        .alert h2{
            /* display: flex; */
            font-weight: 600;
            color: black;
            font-size: .586667rem;
            margin-bottom: .4rem;
        }
        .alert .alert-button button{
        font-size: .48rem;
        padding: .133333rem .266667rem;
        color: #fff;
        margin-top: .266667rem;
        width: 4.266667rem;
        border-radius: .933333rem;
        background: #2472c8;
        border: none;
        }
        .consoles{
            position: absolute;
            display: none;
            width: 5.333333rem;
            height: 2.666667rem;
            background: black;
            top: 5.333333rem;
            z-index: 2000;
            opacity: 0.8;
            color: white;
            right: 0;
            left: 0;
            margin: 0 auto;
            text-align: center;
            line-height: 2.666667rem;
        }
</style>
