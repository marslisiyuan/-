<template>
  <div>
        <!-- 养卡计划title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>制定计划</span>
            <span></span>
        </div>
        <div class="titlenext"></div>
        <!-- 银行卡信息 -->
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
        <!-- 制定计划 -->
        <div class="repayment">
          <div class="mycard"> 
              <input type="number"  ref="money" placeholder="请输入还款金额">
          </div>
          <p>注:还款金额不能低于500,不能超过10万</p>
          <div class="mydata"> 
              <div><p>开始时间</p><input type="text" :placeholder="dates"  readonly></div>
              <!-- <input type="text" ref="endDate" @blur="insinte($event)" v-on:focus="out($event)" placeholder="还款结束时间"> -->
               <div><p>结束时间</p><input type="date" ref="endDate"></div>
          </div>
          <p>注:计划还款周期不能超过5日</p>
          <!-- <div class="mycard">
             <select name="num" ref="refundNum">
                    <option value="1">每日还款1笔</option>
                    <option value="2">每日还款2笔</option>
                    <option value="3">每日还款3笔</option>
                    <option value="4">每日还款4笔</option>
                    <option value="5">每日还款5笔</option>
             </select>
          </div> -->
           <!-- <div class="mycard">
             <select name="num" ref="expense">
                    <option value="1">每日消费1笔</option>
                    <option value="2">每日消费2笔</option>
             </select>
           </div> -->
          <p>注:想要减少周转金,请拉长还款时间或增加每日还款笔数或减少还款金额,周转金不低于500,不高于10000</p>
          <div class="mycard">
              <button @click="showTurnoverNum">卡里余额</button>
              <div class="turnoverNum" v-if="show">
                  <p><span>手续费</span><span>{{turnover['9']}}</span></p>
                  <p><span>笔数费</span><span>{{turnover['7']}}</span></p>
              </div>
          </div>
          <div class="mycard">
               <button @click="submit">下一步</button>
          </div>
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
                 <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="90%"
                >
                <span>你还没有商户落地绑卡，是否落地绑卡?</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="cancel">取 消</el-button>
                    <el-button type="primary" @click="confirm">确 定</el-button>
                </span>
            </el-dialog>
        </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
              show:false,
              bankInfo:'',
              turnover:'',
              citys:'',
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
                text:'',
                area:false,
                province:[],
                city:[],
                num:'',
                dialogVisible:false,
                state:'',
                dates:'',
            }
        },
        mounted(){
            // console.log(sessionStorage.getItem('states'))
        //  this.num=JSON.parse(sessionStorage.getItem('states')).num
        //  this.state=JSON.parse(sessionStorage.getItem('states')).states
         
         this.version=this.$store.state.version
         this.$store.commit("shownav",false)
        this.bankInfo=JSON.parse(sessionStorage.getItem('bank'))
        //  console.log(JSON.parse(sessionStorage.getItem('bank')))
        //  this.bankInfo=JSON.parse(sessionStorage.getItem('bank'))
           var dated=new Date()
           var date = new Date((dated/1000+86400*1)*1000),
                Y =date.getFullYear()+'/',
                M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/',
                D = date.getDate()
                this.dates= Y+M+D
        },
        methods:{
          backed(){
              window.history.go(-1)
          },
          out(event){
              $(event.currentTarget).prop('type','date')
              var obj=$(event.currentTarget)
              setTimeout(function(){obj.trigger('click');},10);
          },
          insinte(event){
              var now=new Date()
            if(!$(event.currentTarget).val()){
                    $(event.currentTarget).prop('type','text');
                }
                else if(now>new Date($(event.currentTarget).val())){
                    $(event.currentTarget).val('')
                    $(event.currentTarget).prop('type','text');
                }
          },
          confirm(){
              this.$router.push('/supportCard/tiedCard')
          },
          cancel(){
             $('.checkbox')[0].checked=false
              this.dialogVisible=false
              
          },
        //   卡里余额
          showTurnoverNum(){
              var datestring=this.datenum(this.dates,this.$refs.endDate.value)
              var name=datestring.split(',')
                      name.pop()
                 datestring=name.join(',')
               var date= (new Date(this.$refs.endDate.value)-new Date(this.dates))/(1000*60*60*24)
              if(!parseFloat(this.$refs.money.value)){
                 this.unbind=true
                 this.text='请输入还款金额'
              }else if(!this.$refs.endDate.value){
                  this.unbind=true
                  this.text='请选择还款结束时间'
              }else if(date>20){
                    this.unbind=true
                    this.text='还款周期不能超过20日'
                }else if(date<0){
                    this.unbind=true
                    this.text='结束时间要大于开始时间'
                }else if(500<=this.$refs.money.value && this.$refs.money.value<=100000){
                    var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
                    var MAC=$.md5('0700390048'+parseFloat(this.$refs.money.value)+datestring+this.bankInfo.bankAccount+this.bankInfo.id+merchantNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                    var _vm=this
                    this.$http.post('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app', 
                            {    
                                '0':'0700',
                                '3':'390048',
                                '8':parseFloat(this.$refs.money.value),
                                '10':datestring,
                                '11':this.bankInfo.bankAccount,
                                '12':this.bankInfo.id,
                                '42':merchantNo,
                                '59':this.version,
                                '64':MAC
                            },{
                        emulateJSON:true
                    }).then(function(res){
                        // 获取详情计划和周转金
                        if(res.data['39']=='00'){
                           _vm.show=true
                        _vm.turnover=res.data
                        sessionStorage.setItem('plan',JSON.stringify(res.data))
                        }else{
                            this.text=res.data['39']
                            this.unbind=true
                        }
                        
                    })
                }else{
                    this.unbind=true
                    this.text='还款金额不能低于500，不能超过2000'
                }
              
          },
          datenum(begin,end){
              var ab = begin.split("/");
              console.log(ab)
            var ae = end.split("-");
            var db = new Date();
            db.setFullYear(ab[0], ab[1]-1, ab[2]);
            var de = new Date();
            de.setFullYear(ae[0], ae[1]-1, ae[2]);
            var a = [];
            for (var i=0,temp=db;temp < de;i++)
            {
            a[i] = GetDate(temp);
            temp.setTime(temp.getTime() + 24*60*60*1000);
            }
            a[i] = GetDate(de);
            return a.join();
            function GetDate(d)
            {
            return d.getFullYear() + "-" + (d.getMonth()+1) + "-" +  d.getDate();
            }
          },
        //   下一步
          submit(){
                var date= (new Date(endDate)-new Date(startDate))/(1000*60*60*24)
                if(date<0){
                    this.unbind=true
                    this.text='还款结束时间不能早于还款开始时间'
                }else if(date>20){
                    this.unbind=true
                    this.text='还款周期不能超过25日'
                }else if(!this.show){
                    this.unbind=true
                    this.text='请查看卡里余额'
                }else if(500<=money<=100000){
                    var money=parseFloat(this.$refs.money.value),
                    startDate=this.dates,
                    endDate=this.$refs.endDate.value
                    
                        sessionStorage.setItem('next',JSON.stringify({'startDate':startDate,'money':money,'endDate':endDate,'refundNum':'2','state':'1',city:''}))
                        this.$router.history.push({
                            name:'nrViewPlan'
                        })

                }else{
                    this.unbind=true
                    this.text='还款金额不能低于500，不能超过100000'
                }
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
<style scoped="scoped">
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
       .repayment{
           margin: 0 .533333rem;
           background: #d7d7d7;
           padding: .533333rem .266667rem;
       }
       .repayment p{
           padding: 0 .266667rem .4rem .266667rem;
           font-size: .32rem;
       }
       .mycard{
         padding:.186667rem .266667rem;
        font-size: .426667rem;
       }
       .mycard>input{
           width: 100%;
           padding: .213333rem;
           border-radius: .08rem;
           border: none;
       }
       .mycard>select{
           width:100%;
           padding: .213333rem;
           border-radius: .08rem;
           border: none;
       }
       .mydata{
           display: flex;
           justify-content: space-between;
       }
       .mydata>div{
          flex-grow: 1; 
           margin:.186667rem .266667rem;
           padding:.213333rem .106667rem;
           text-align: center;
           border-radius: .08rem;
           border:none; 
           width: 40%;
       }
       .mydata input{
           flex-grow: 1;
           padding:.213333rem .106667rem;
           border-radius: .08rem;
           border:none; 
           width: 100%;
       }
       .mycard button{
           width: 100%;
           background: #00a5cd;
           font-size: .48rem;
           color: white;
           padding: .213333rem;
           border: none;
           border-radius: 0.08rem;
       }
       .turnoverNum{
           width: 100%;
           padding: .4rem .266667rem;
           background: white;
       }
       .turnoverNum p{
           display: flex;
           justify-content: space-between;
       }
       .form-group  select{
         padding: 0 .133333rem;
         width:3.466667rem;
      }
</style>
