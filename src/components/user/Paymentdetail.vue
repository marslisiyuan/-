<template>
    <div 
        id="paymentdetail"
       v-loading="loading2"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%">
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>收支明细</span><span></span>
        </div>
        <ul class="paymentdetail-ul">
            <li v-for="(item,index) in particulars" :key="index" @click="commission(item.moneyType,item.createTime.time,item.paymentOrderId,item.trxAmt)">
                <span>{{item.createTime.time | formdate}}</span>
                <div class="paymentdetail-yhk"><img src="../../assets/nav/lirun_shouru.png" alt=""><span style="color:black;font-size:.48rem;">{{item.trxAmt}}</span></div>
                <div class="jyxq">
                    <div><p style="text-align:right;">{{item.moneyType=='10A'?'分润':'返佣'}}</p><p style="color:black;">交易详情</p></div>
                    <img src="../../assets/right.png" alt="">
                </div>
            </li>
            <!-- <li>
                <span>2018-05-18</span>
                <div><img src="" alt=""><span style="color:black;font-size:.48rem;">100</span></div>
                <div class="jyxq">
                    <div><p style="text-align:right;">返佣</p><p style="color:black;">交易详情</p></div>
                    <img src="../../assets/right.png" alt="">
                </div>
            </li> -->
        </ul>
        <div class="more">
             <span v-if="more=='01' || particulars.length<10">没有更多数据</span>
             <button v-else @click="mores">查看更多</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
              day:"",
              num:1,
              more:'00',
              particulars:'',
              loading2: true,
            }
        },
        mounted(){
             this.$store.commit('shownav',false)
             this.day=this.$route.query.data
             this.version=this.$store.state.version
             var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
             var MAC=$.md5('0700890002'+merchantidNo+this.day+this.num+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
             this.$http.post('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {
                    '0':'0700',
                    '3':'890002',
                    '42':merchantidNo,
                    '43':this.day,
                    '44':this.num,
                    '59':this.version,
                    '64':MAC
                },{
                emulateJSON:true
                }).then(function(res){
                    this.loading2=false
                    if(res.data['39']=='00'){
                      this.particulars=eval(res.data['5'])
                    //   console.log(eval(res.data['5']))
                    }else if(res.data['39']=='01'){
                        this.more=res.data['39']
                    }
                   
                     
                })
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            commission(moneyType,time,paymentOrderId,trxAmt){
                // console.log(moneyType+time+paymentOrderId+trxAmt)
                this.$router.push({path:'/user/Commission',query:{moneyType,time,paymentOrderId,trxAmt}})
            },
            mores(){
             this.num++
             var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
             var MAC=$.md5('0700890002'+merchantidNo+this.day+this.num+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
             this.$http.post('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {
                    '0':'0700',
                    '3':'890002',
                    '42':merchantidNo,
                    '43':this.day,
                    '44':this.num,
                    '59':this.version,
                    '64':MAC
                },{
                emulateJSON:true
                }).then(function(res){
                    this.loading2=false
                    if(res.data['39']=='00'){
                      this.particulars.push(...eval(res.data['5']))
                    }else if(res.data['39']=='01'){
                        this.more=res.data['39']
                    }
                   
                     
                }) 
            }
        },
        filters:{
             formdate(event){
                if(event){
               var date = new Date(event),
                Y = date.getFullYear() + '-',
                M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
                D = date.getDate() + ' '
                return Y+M+D
                }
            },
        }
    }
</script>
<style scoped="scoped">
  #paymentdetail{
      height: 100%;
  }
  .paymentdetail-ul{
      background: #fff;
  }
  .paymentdetail-ul li{
     padding: .133333rem  .8rem .133333rem .266667rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     border-bottom: 1px solid #efefef;
     
  }
  .paymentdetail-ul  .jyxq{
      display: flex;
      align-items: center;
  }
  .paymentdetail-ul li .paymentdetail-yhk{
      display: flex;
      align-items: center;
  }
  .paymentdetail-ul li .paymentdetail-yhk img{
      width: .933333rem;
      margin-right: .266667rem;
  }
  .paymentdetail-ul  .jyxq img{
      height: .48rem;
      margin-left: .266667rem;
  }
  .more{
      text-align: center;
      margin-top: .4rem;
  }
  .more button{
      padding: 0 .4rem;
  }
</style>
