<template>
    <div>
        <!-- 我的客户title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>我的客户</span>
            <span></span>
        </div>
        <!-- 我的客户数量 -->
        <ul class="customerNum">
           <li v-for="(item,index) in client" :key="index">
                <span>{{item.merchantCnName}}</span>
                <span>{{item.level | grade}}</span>
                <span>{{item.linkPhone}}</span>
                <span>{{item.createTime | formdate}}</span>
           </li>
           <!-- <li v-for="(item,index) in client" v-if="item.level>'4'&&level>'4'" :key="index" @click="alert">
                <span>{{item.merchantCnName}}</span>
                <span>{{item.level | grade}}</span>
                <span>{{item.linkPhone}}</span>
                <span>{{item.createTime | formdate}}</span>
           </li>
           <li v-for="(item,index) in client" v-if="item.level>'4'&&level<'5'" :key="index" @click="select(item.level,item.merchantNo)">
                <span>{{item.merchantCnName}}</span>
                <span>{{item.level | grade}}</span>
                <span>{{item.linkPhone}}</span>
                <span>{{item.createTime | formdate}}</span>
           </li> -->
           <!-- <li >
                <span>李**</span>
                <span></span>
                <span>普通会员</span>
                <span>152****5210</span>
                <span>2014-02-12</span>
           </li> -->
        </ul>
          <div class="consoles" style="display:none;">
            <div>
                <p>{{text}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'fourone',
        data() {
            return {
              version:" ",
              client:'',
              text:'',
              level:'',
            }
        },
        mounted(){
            this.$http.post(
                'https://cashier.sandpay.com.cn/allChannelPayAdapter',
                {
                    // 'payMode':"bank_pc",
                    "params":{"bizType":"000201","realSumbitUrl":"https://gateway.95516.com/gateway/api/frontTransReq.do","txnSubType":"01","backUrl":"ZX|http://144.255.17.145:8288/request/fjUnionpayInternetBankNotify","signature":"1F9Ow13QxL01B9+724JJrEPrCVjIMV102YAXoV2v0l9Wwn0C81y/7VOUaDKYrxyVReU/1NzLJDZXg2lVyQLyBDTWBONLXL2MyZ4oqDzM3Bc+PIzaMRSZ+EQhmGE1ny3//lQQlh5xtrNRH3CWqg4tUIzLOnWAtPtCP/Bb4PTDnYpmYEJ49pjfSVUn/SV7Tgp3xKmxoNp+kWhB/gytw1uvOQpG/0IisoZcMDjf/TnP/bG1gsy7bdagPnRq4m9JgxdQoQMiWAk+ERIC5fYT/W+nvVGkSF7NF0vad8A1WoI6/jZYG9FXhWhmsNJ08sGIaa9AmYLho1RJsBcnPcRsw9dKEA==","orderId":"WG20180704071052800000000004524","issInsCode":"ABC","merName":"荣城丽景","txnType":"01","frontUrl":"https://cashier.sandpay.com.cn/gateway/api/order/notice/allChannelPay","channelType":"07","certId":"74995607443","acqInsCode":"48272900","encoding":"UTF-8","version":"5.0.0","merAbbr":"荣城丽景","accessType":"0","txnTime":"20180704120828","merId":"827391057340008","merCatCode":"5734","currencyCode":"156","txnAmt":"1","signMethod":"01"}
                },{
                    emulateJSON:true,
                }).then(function(res){
                    // console.log()
                })
            this.level=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].level
            this.$store.commit('shownav',false)
            this.version=this.$store.state.version
            var phone=eval(JSON.parse(localStorage.getItem('info'))['42'])[0].linkPhone
            var MAC=$.md5('0700'+phone+'190114'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {
                    '0':'0700',
                    '1':phone,
                    '3':'190114',
                    '59':this.version,
                    '64':MAC
                },{
                emulateJSON:true
                }).then(function(res){
                if(res.data['39']=='00'){
                   this.client=eval(res.data['5'])
                //    console.log(res.data['5'])
                }else{
                    this.text=res.data['39']
                    $('.consoles').fadeIn()
                    setTimeout(function(){
                    $('.consoles').fadeOut()   
                    },2000)
                }
            })
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            select(level,merchantidNo){
                // console.log(level)
                this.$router.push({name:'Clientgrade',params:{'level':level,'merchantidNo':merchantidNo}})
            },
            alert(){
                
                if(this.level>4){
                 this.text="您权限不足"
                }else{
                 this.text='此客户已不能在app上升级'
                }
                $('.consoles').fadeIn()
                setTimeout(function(){
                $('.consoles').fadeOut()   
                },2000)
            }
        },
        filters:{
          formdate(event){
                if(event){
               var date = new Date(event),
                Y = date.getFullYear() + '-',
                M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
                D = date.getDate()< 10 ? '0'+(date.getDate()) : date.getDate()
                return Y+M+D
                }
            },
            grade(event){
                var grade=''
              if(event){
                  switch(event){
                    case '7':
                     grade='普通用户'
                     break;
                     case '6':
                     grade='黄金会员'
                     break;
                     case '5':
                     grade='钻石会员'
                     break;
                     case '4':
                     grade='经   纪   人'
                     break;
                     case '3':
                     grade='区级代理'
                     break;
                     case '2':
                     grade='市级代理'
                     break;
                     case '1':
                     grade='省级代理'
                     break;
                  }
              }
              return grade
            }
        }
    }
</script>
<style scoped="scoped">
    .customerNum{
        margin-top: 1.2rem ;
        padding:0 .533333rem; 
        background: white;
    }
    .customerNum li{
        padding:.266667rem 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f6f6f9;
    }

</style>
