<template>
    <div
    id="carditcard"
    v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%">
        <div class="title">
          <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>办卡中心</span>
            <span></span>
        </div>
        <!-- <div class="main">
            <img src="" alt="">
        </div> -->
  <!-- 信用在线申请 -->
    <div class="content">
        <div class="titles">
            <p>信用卡在线申请</p>
            <span @click="gohistory(1)">信用卡申请记录</span>
        </div>
        <div class="logo">
            <div  v-for="(item,index) in bank.slice(0,8)" :key="index" @click="carddata(item.stationChannelId,'1')" class="logocontent">
                <a>
                    <img :src="item.iconPath" alt=""> <p>{{item.name}}</p>
                </a>
            </div>
            <!-- <div class="logocontent">
                    <a>
                            <img src="" alt=""> <p>浦发银行</p>
                    </a>
            </div>
              -->
     <!-- 隐藏部分 -->
                
                <div v-for="(item,index) in bank.slice(8)" :key="'1'+index" @click="carddata(item.stationChannelId,'1')" class="logocontent hide">
                    <a>
                        <img :src="item.iconPath" alt=""> <p>{{item.name}}</p>
                    </a>
                </div>
                <!-- <div class="logocontent hide">
                    <a>
                            <img src="" alt=""> <p>农业银行</p>
                    </a>
                </div> -->
             
            </div>
            <!--展开更多  -->
            <div @click="more" class="more">
                    展开更多
            </div>
        </div>

         <!-- 贷款在线申请 -->
        <div class="content">
            <div class="titles">
                <p>贷款在线申请</p>
                <span @click="gohistory(2)">贷款申请记录</span>
            </div>
            <div class="logo">
               <div v-for="(item,index) in loan" :key="index" @click="carddata(item.id,'2')" class="logocontent">
                <a>
                    <img :src="item.iconPath" alt=""> <p>{{item.name}}</p>
                </a>
            </div>

            </div>
        </div>
        <!-- 底部 -->
        
    </div>
</template>
<script>
    export default {
        data(){
            return{
             version:'',
             bank:'',
             loan:'',
             loading2: true,
            }
        },
        mounted(){
            this.$store.commit('shownav',false)
            this.version=this.$store.state.version
            var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
            var MAC=$.md5('0700590001'+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {    
                      '0':'0700',
                      '3':'590001',
                      '42':merchantidNo,
                      '59':this.version,
                      '64':MAC
                  },
                  {
                emulateJSON:true
                }).then(function(res){
                  this.bank=JSON.parse(res.data['57']).result
                  this.loan=JSON.parse(res.data['31']).result
                //   console.log(JSON.parse(res.data['31']).result)
                  this.loading2=false
                })
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
           more(){
               $('.hide').slideToggle()
           },
           carddata(event,number){
            sessionStorage.setItem('mybankinfo',JSON.stringify({'id':event,'num':number}))
            this.$router.push('/Carddata')
            //  console.log(event)
   
           },
           gohistory(num){
               this.$router.push({
                   path:"/Cardhistory",
                   name:'Cardhistory',
                   params:{
                       nums:num
                   }
               })
           }
        }
    }
</script>
<style scoped="scoped">
#carditcard{
    height: 100%;
}
 .main{
        height: 4.986667rem;
        background: #7faefe;
    }
    .main img{
        height: 4.986667rem;
    }
    .titles{
        padding: .4rem .666667rem .4rem .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
    }
    .titles p{
        padding: .026667rem .133333rem;
        border-left: 4px solid #895ff3;
        font-size: .4rem;
        color: rgb(46, 47, 51);
        font-weight: 700;
    } 
    .titles span{
        font: .32rem;
        color: rgb(60,157,236)
    }
    .content{
        margin-bottom: .4rem;
    }
    .logo{
        display: flex;
        flex-wrap: wrap;
        background: white;
    }
    .logo .logocontent{
       width: 25%;
       padding: 0 .4rem;
    }
    .logocontent img{
        width: 1.28rem;
        height: 1.28rem;
        margin: 0 auto;
    }
    .logocontent p{
        font-size: .32rem;
        text-align: center;
        margin-top: .133333rem;
        margin-bottom: .533333rem;
    }
    .more{
        text-align: center;
        background: white;
        color: rgb(204, 204, 204);
        padding-bottom: .4rem;
    }
    .hide{
        display: none;
    }
</style>
