<template>
  <div
       id="paymentdetail"
       v-loading="loading2"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%">
        <!-- 提现明细title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>提现明细</span>
            <span></span>
        </div>
        
       <!-- 提现明细账单 -->
       <!-- <ul class="cashul">
           <li>
               <span>时间</span>
               <span>提现金额</span>
               <span>手续费</span>
               <span>提现状态</span>
           </li>
           <li v-for="(item,index) in particulars" :key="index"><span>{{item.createTime | formdate}}</span><span class="cashlicolor">{{item.trxAmt}}</span><span>{{item.trxAmt | money}}</span><span v-if="item.status=='10C'">提现成功</span><span v-else-if="item.status=='10A'">提现受理失败</span><span v-else-if="item.status=='10B'">提现中</span><span v-else>提现失败</span></li>
       </ul> -->
       <table class="cashul">
           <tr>
                <td>时间</td>
               <td>提现金额</td>
               <td>手续费</td>
               <td>提现状态</td>
           </tr>
           <tr v-for="(item,index) in particulars" :key="index"><td>{{item.createTime | formdate}}</td><td class="cashlicolor">{{item.trxAmt}}</td><td>{{item.trxAmt | money}}</td><td v-if="item.status=='10C'">提现成功</td><td v-else-if="item.status=='10A'">提现受理失败</td><td v-else-if="item.status=='10B'">提现中</td><td v-else>提现失败</td></tr>
       </table>
        <div class="more">
             <span v-if="more=='01' || particulars.length<10">没有更多数据</span>
             <button v-else  @click="mores">查看更多</button>
        </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
              show:false,
              version:'',
              page:1,
              particulars:'',
              loading2: true,
              more:'00',
            }
        },
        mounted(){
         this.$store.commit("shownav",false)
         this.version=this.$store.state.version
          var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
          var MAC=$.md5('0700490018'+merchantidNo+this.page+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
          this.$http.post(
              'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
              {
                  '0':'0700',
                  '3':'490018',
                  '42':merchantidNo,
                  '44':this.page,
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
            money(event){
                var moneyss=event*0.01
               return moneyss.toFixed(2)
            }
            }
    }
</script>
<style scoped="scoped">
      #paymentdetail{
          height: 100%;
      }
      .cashul{
          margin-top: 1.2rem;
          width: 100%;
          text-align: center
      }
      .cashul td{
          padding: .266667rem 0;
          border-bottom: 1px solid #666;
      }
      /* .cashul li{
          padding: .266667rem 1.066667rem .266667rem .266667rem;
          display: flex;
          justify-content: space-between;
          font-size: .426667rem;
          background: white;
          border-bottom: 1px solid #f6f6f9;
      } */
      .cashlicolor{
          color: red;
      }
        .more{
        text-align: center;
        margin-top: .4rem;
        }
        .more button{
            padding: 0 .4rem;
        }
</style>
