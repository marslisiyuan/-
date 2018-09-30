<template>
    <div 
       id="commission"
       v-loading="loading2"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%">
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>利润明细</span>
            <span></span>
        </div>
        <ul class="commission-ul">
            <li><span>金额类型:</span><span>{{commissionMoney.moneyType=='10A'?'分润':'返佣'}}</span></li>
            <li><span>金额来源:</span><span>{{text}}</span></li>
            <li><span>金&#x3000;&#x3000;额:</span><span>{{commissionMoney.trxAmt}}</span></li>
            <li><span>交易时间:</span><span>{{commissionMoney.time | formdate}}</span></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
              version:" ",
              commissionMoney:'',
              text:'',
              loading2: true,
            }
        },
        mounted() {
            this.commissionMoney=this.$route.query
            this.$store.commit('shownav',false)
            this.version=this.$store.state.version
             var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
             var MAC=$.md5('0700890003'+merchantidNo+this.commissionMoney.paymentOrderId+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
             this.$http.post('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {
                    '0':'0700',
                    '3':'890003',
                    '42':merchantidNo,
                    '43':this.commissionMoney.paymentOrderId,
                    '59':this.version,
                    '64':MAC
                },{
                emulateJSON:true
                }).then(function(res){
                    this.loading2=false
                    if(res.data['39']=='00'){
                    //   this.particulars=eval(res.data['5'])
                      this.text=res.data['5']
                    }
                   
                     
                })
        },
        methods:{
          backed(){
              window.history.go(-1)
          }
        },
        filters:{
             formdate(event){
                 
                if(event){
                    var event=parseInt(event)
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
        }
    }
</script>
<style scoped="scoped">
    #commission{
        height: 100%;
    }
    .commission-ul li{
        padding:.4rem .266667rem;
        border-bottom: 1px solid #666;
        font-size: .426667rem;
    }
    .commission-ul li span:nth-child(1){
        padding-right: .533333rem;
    }
</style>
