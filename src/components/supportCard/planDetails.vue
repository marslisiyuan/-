<template>
  <div id="planDetails"
     v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%">
        <!-- 计划详情title -->
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>计划详情</span>
            <span @click="del">删除计划</span>
        </div>
        <!-- 订单号 -->
        <div class="detailsNumber">
            <div class="detailflex"><span v-if="viewPlan">订单编号：{{viewPlan.MERCHANT_ID.slice(0,17)}}</span></div>
            <div v-if="viewPlan">还款周期：{{viewPlan.START_TIME.time | date}}至{{viewPlan.END_TIME.time | date}}</div>
            <!-- <div class="detailflex"><span>还款形式：2笔/日</span><p>订单状态：进行中</p></div> -->
            <!-- <div>可冻结金额：0</div> -->
            <div class="detailflex">
                <div class="planmoney">
                    <p >预还款金额</p>
                    <p class="borderRight">{{viewPlan.PLAN_AMT}}</p>
                </div>
                <div class="planmoney">
                    <p>周转金</p>
                    <p>{{viewPlan.CB_AMT}}</p>
                </div>
            </div>
        </div>
        <!-- 消费列表 -->
        <ul class="consumption">
            <li v-for="(item,index) in consumption" :key="index">
                <div><span class="bckd" v-if="item.type=='sale'">消费</span><span class="bckd color-g" v-else>还款</span><span v-if="viewPlan.TYPE=='10B'">{{item.planTime.time|formdate}}</span></div>
                <p>{{item.money}}</p>
                <p v-if="item.status=='10B'" style="color:green;">√</p>
                <p v-else style="color:red;">×</p>
            </li>
        </ul>
        <!-- 禁用和删除 -->
        <div class="footerdel">
            <div v-if="this.viewPlan.STATUS=='10A'||this.viewPlan.STATUS=='10B'" @click="state=true">禁用</div>
            <div v-else @click="state=true">开启</div>
            <div @click="unbind = true">删除</div>
        </div>
         <!-- 弹出 -->
        <el-dialog
            :visible.sync="unbind"
            title="提示"
            width="90%"
            top="30vh"
            >
            <span>确定删除计划</span>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="unbind = false">取 消</el-button> -->
                <el-button type="primary" @click="del">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog
            :visible.sync="state"
            title="提示"
            width="90%"
            top="30vh"
            >
            <span v-if="this.viewPlan.STATUS=='10A'||this.viewPlan.STATUS=='10B'">确定禁用计划？</span>
            <span v-else>确定开启计划？</span>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="unbind = false">取 消</el-button> -->
                <el-button  v-if="this.viewPlan.STATUS=='10A'||this.viewPlan.STATUS=='10B'" type="primary" @click="disabled('0')">确 定</el-button>
                <el-button  v-else type="primary" @click="disabled('1')">确 定</el-button>
            </span>
        </el-dialog>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                viewPlan:'',
                version:'',
                consumption:'',
                loading2: true,
                unbind:false,
                state:false,
            }
        },
        mounted(){
          this.version=this.$store.state.version
          this.$store.commit("shownav",false)
          this.viewPlan=JSON.parse(sessionStorage.getItem('bankinfo'))
          console.log(sessionStorage.getItem('bankinfo'))
        //   console.log(JSON.parse(sessionStorage.getItem('bankinfo')))
          var MAC=$.md5('0700190213'+this.viewPlan.ID+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
          this.$http.post(
              'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
               {    
                    '0':'0700',
                    '3':'190213',
                    '8':this.viewPlan.ID,
                    '59':this.version,
                    '64':MAC
                },{
                emulateJSON:true
                }).then(function(res){
                    this.consumption=eval(res.data['57'])
                    // console.log(eval(res.data['57']))
                    this.loading2=false
                })
        },
        methods:{
          backed(){
              window.history.go(-1)
          },
          disabled(event){
              var MAC=$.md5('0700190214'+event+this.viewPlan.ID+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
              this.$http.post('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app', 
              {    
                    '0':'0700',
                    '3':'190214',
                    '8':this.viewPlan.ID,
                    '7':event,
                    '59':this.version,
                    '64':MAC
                },{
                emulateJSON:true
                }).then(function(res){
                    if(res.data['39']=='00'){
                        // if(event=='1'){
                        //     alert('计划开启成功')
                        // }if(event=='0'){
                        //     alert('计划禁用成功')
                        // }
                        window.history.go(-1)
                    }
                })
          },
          del(){
              var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
              var MAC=$.md5('0700390002'+this.viewPlan.ID+merchantNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                this.$http.post(
                  'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                   {    
                    '0':'0700',
                    '3':'390002',
                    '8':this.viewPlan.ID,
                    '42':merchantNo,
                    '59':this.version,
                    '64':MAC
                },{
                emulateJSON:true
                }).then(function(res){
                    if(res.data['39']=='00'){
                        window.history.go(-1)
                    }
                })
              
          }
        },
        filters:{
            formdate(event){
                if(event){
               var date = new Date(event),
                M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
                D = date.getDate() + ' ',
                h = date.getHours() + ':',
                m = date.getMinutes() + ':',
                s = date.getSeconds()
                return M+D+h+m+s
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
          }
        }
    }
</script>
<style scoped="scoped">
       .planDetails{
           height: 100%;
       }
        .detailsNumber{
            margin: .533333rem 1.066667rem .533333rem 1.066667rem;
            padding: .4rem .533333rem;
            background: #d1d1d3;
            border-radius: .133333rem;
        }
        .detailsNumber .detailflex{
            display: flex;
            justify-content: space-between;
            text-align: center;
        }
        .detailsNumber>div{
            margin-top: .266667rem;
        }
        .detailsNumber .detailflex .planmoney{
            flex-grow: 1;
        }
        .detailsNumber .detailflex .planmoney p:nth-child(2){
            margin-top: .266667rem;
        }
        .detailsNumber .detailflex .planmoney .borderRight{
            border-right: 1px solid #999;
        }
        .consumption{
            padding: .266667rem .533333rem;
            background: #d1d1d3;
            height: 8rem;
            overflow: auto;
        }
        .consumption li{
            display: flex;
            justify-content: space-between;
            padding: .266667rem 0;
        }
        .consumption .bckd{
            padding:.08rem .186667rem;
            border-radius: .053333rem;
            color: white;
            margin-right: .266667rem;
            background: coral;
        }
        .consumption .color-g{
            background: #0dbc79;
        }
        .footerdel{
            position: fixed;
            bottom: 0;
            width: 100%;
            padding: .133333rem;
            background: white;
            display: flex;
            justify-content: space-between;
            text-align: center;
        }
        .footerdel div{
            background: #7caffe;
            font-size: .533333rem;
            color: white;
            line-height: 1.066667rem;
            flex-grow: 1;
            margin:.186667rem;
        }
</style>
