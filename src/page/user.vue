<template>
    <div
       id="user"
       v-loading="loading2"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%">
        <!-- 个人中心 -->
       
        <!-- 头像和评价和收益 -->
        <div class="head">
            <div class="title">
                <!-- <Icon type="ios-arrow-back"></Icon> -->
                <span></span>
                <span>个人中心</span>
                <span></span>
                <!-- <router-link tag="main" to="/rule">
                <i class="el-icon-question" style="font-size:.48rem;"></i>
                </router-link> -->
            </div>
            <!-- 头像和评价 -->
            <div  class="top">
                <div>
                    <img src="../assets/drawable/mycustomer_weirenzheng.png" alt="">
                    <div class="name">
                        <p>{{bank.merchantCnName}}</p>
                        <p>{{level|grade}}</p>
                        <p>{{bank.phone}}</p>
                    </div>
                </div>
                <!-- <img class="top-img" src="../assets/right.png" alt=""> -->
            </div>
            <div class="today">
                 <div @click="Paymentdetail('toDay')">
                     <p>今日分润（元）</p>
                     <h2>{{money.toDay}}</h2>
                 </div>
                 <div @click="Paymentdetail('yesterday')">
                     <p>昨日分润（元）</p>
                     <h2>{{money.yesterday}}</h2>
                 </div>
            </div>
        </div>

          <!-- 收益 -->
            <div class="profit">
                <div @click="Paymentdetail('addMoney')">
                    <p class="tit">累计佣金（元）</p>
                    <p class="desc">{{money.addMoney}}</p>
                </div>
                <router-link tag="div" to="/Bonus/bonuscash">
                    <p class="tit">可提现分润（元）</p>
                    <p class="desc">{{money.canOutMoney}}</p>
                </router-link>
                <div  @click="Paymentdetail('reRate')">
                    <p class="tit">升级返佣（元）</p>
                    <p class="desc">{{money.upLevelCharge}}</p>
                </div>
            </div>
        <router-view></router-view>
        <!-- 个人内容管理 -->
        <!-- <ul class="main">
             <router-link tag="li" to="/user/customer">
                <img src="../assets/nav/userimg/wdkh.png" alt="">
                <span>我的客户</span>
            </router-link>

             <router-link tag="li" to="/tool/SaveImageone">
               <img src="../assets/nav/userimg/yqhy.png" alt="">
                <span>邀请好友</span>
            </router-link>
   
             <router-link tag="li" to="/user/PersonalSetting">
             <img src="../assets/nav/userimg/smrz.png" alt="">
                <span>实名认证</span>
            </router-link>
  
            <router-link tag="li" to="/user/buy_vip">
             <div data='hy'>
                 <img src="../assets/nav/userimg/sjhy.png" alt="">
                <span>加入会员</span>
             </div>
            </router-link>

             <li @click="download">
             <img src="../assets/nav/userimg/appxz.png" alt="">
                <span>APP下载</span>
            </li>
            <li @click='quit'>
             <img src="../assets/nav/userimg/exit.png" alt="">
                <span>安全退出</span>
            </li>
        </ul> -->
        <ul class="user-ul">
            <li @click="Paymentdetail('addMoney')">
                <img src="../assets/me/jy.png" alt="">
                <div>
                    <span>交易明细</span>
                    <img src="../assets/right.png" alt="">
                </div>
            </li>
            <router-link tag="li" to="/user/customer">
                <img src="../assets/me/kf.png" alt="">
                <div>
                    <span>我的客户</span>
                    <img src="../assets/right.png" alt="">
                </div>
            </router-link>
            <router-link tag="li" to="/tool/SaveImageone">
                <img src="../assets/me/fx.png" alt="">
                <div>
                    <span>我的分享</span>
                    <img src="../assets/right.png" alt="">
                </div>
            </router-link>
             <li v-if="state!='true'" @click="cardPay">
                <img src="../assets/me/kb.png" alt="">
                <div>
                    <span>卡包付费</span>
                    <img src="../assets/right.png" alt="">
                </div>
            </li>
            <router-link tag="li" to="/supportCard/addCard">
                <img src="../assets/me/xyk.png" alt="">
                <div>
                    <span>信用卡添加</span>
                    <img src="../assets/right.png" alt="">
                </div>
            </router-link>
            <router-link tag="li" to="/user/PersonalSetting">
                <img src="../assets/me/sm.png" alt="">
                <div>
                    <span>实名认证</span>
                    <img src="../assets/right.png" alt="">
                </div>
            </router-link>
            <li @click='quit'>
                <img src="../assets/me/cz.png" alt="">
                <div>
                    <span>安全退出</span>
                    <img src="../assets/right.png" alt="">
                </div>
            </li>
        </ul>
        <div class="user-footer">

        </div>
    </div>
</template>
<script>
    export default {
        name: 'four',
        data() {
            return {
                bank:'',
                version:"",
                money:'',
                loading2: true,
                level:'',
                state:""
            }
        },
        mounted(){
             this.state=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].isValid
             this.bank=eval(JSON.parse(localStorage.getItem('info'))['42'])[0]
             this.$store.commit('shownav', true)
             this.version=this.$store.state.version
             this.level=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].level
             setTimeout(function(){
             $('.navname').map(function(index,item){
                   if($(item).attr('data')){
                       $(item).children('img').attr('src',require('@/assets/drawable/'+$(item).attr('data')+'.png'))
                   }
                })
             $('#wd').children('img').attr('src',require('@/assets/drawable/djwd.png'))
            },10)
            var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
            var MAC=$.md5('0700890001'+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {
                    '0':'0700',
                    '3':'890001',
                    '42':merchantidNo,
                    '59':this.version,
                    '64':MAC
                },{
                emulateJSON:true
                }).then(function(res){
                    this.loading2=false
                    this.money=JSON.parse(res.data['5'])
                    
                })
            //  document.title='个人中心'
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            Paymentdetail(day){
                this.$router.push({path:'/user/Paymentdetail',query:{data:day}})
            },
            download(){
                location.href="http://hangzhou.llyzf.cn/lly-posp-proxy/qq_down.html"
            },
            quit(){
                $.cookie('user','')
                 localStorage.clear();
                this.$router.push('/login')
            },
            cardPay(){
                 var MAC=$.md5('0700490021'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {
                    '0':'0700',
                    '3':'490021',
                    '59':this.version,
                    '64':MAC
                },{
                    emulateJSON:true
                }).then(function(res){
                    if(res.data['39']=='00'){
                        this.$router.push({path:'/user/cardPay',query:{'money':res.data['5']}})
                    }
                })
            }
            // name(event){
            //     $('.navname').map(function(index,item){
            //     if($(item).attr('data')){
            //         $(item).children('img').attr('src',require('@/assets/drawable/'+$(item).attr('data')+'.png'))
            //     }
            //     })
            //     console.log((event.currentTarget).attr('data'))
            //     $('#'+$(event.currentTarget).attr('data')).children('img').attr('src',require('@/assets/drawable/dj'+$(event.currentTarget).attr('data')+'.png'))
            // }
        },
            filters:{
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
                     case '0':
                     grade='系统客户'
                     break;
                  }
              }
              return grade
            }
        }
    }
</script>
<style scoped="scoped">
    #user{
        height: 100%;
    }
    .title{
        background: none;
    }
    .head {
        background: #2472c8;

    }
    .top {
        padding: 0 .533333rem .533333rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .top > div:nth-child(1){
        display: flex;
        align-items: center;
    }
    .top > div:nth-child(1) img{
        width: 1.6rem;
        height: 1.6rem;
        background: white;
        border-radius: 50%;
    }
    .top div:nth-child(2) {
        flex-grow: 1;
    }
    .top-img{
        height: .48rem;
    }
    .top .name {
        margin-left: .4rem;
        color: white;
    }
    .top .name p:nth-child(2){
        margin-top: .133333rem;
        font-size: .293333rem;
    }
    .today{
        padding: .4rem .533333rem;
        display: flex;
        color: white;
        font-size: .32rem;
    }
    .today>div{
        flex-grow: 1;
    }
    .today>div h2{
        font-size: .64rem;
    }
    .profit {
        display: flex;
        padding: .266667rem .533333rem;
        justify-content: space-between;
        border-top: 4px solid #fff;
        background: #fff;
    }
    .profit > div {
        /* width: calc(100%/3); */
        border-left: 1px solid #fff;
    }
    .profit > div:first-child{
        border: none;
    }
    .profit > div .tit {
        font-size: .32rem;
    }
    .profit > div .desc {
        padding-top: 0.133333rem;
        font-size: .453333rem;
    }
    .main {
        margin-top: 0.266667rem;
        display: flex;
        justify-content: flex-start;
        padding:0 .4rem;
        flex-wrap: wrap;
        width: 100%;
        background: white;
    }
    .main > li {
        width: calc(100%/3);
        margin-top: .266667rem;
        height: 2.133333rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border-radius: .133333rem;
    }
   .main > li img{
       width: 1.2rem;
       height: 1.2rem;
   }
   .user-footer{
       height: 1.573333rem;
   }
   .user-ul{
       background: #fff;
       margin-top: .266667rem;
   }
   .user-ul li{
       height: 1.2rem;
       display: flex;
       align-items: center;
   }
   .user-ul li img{
     width: .293333rem;
     height: .533333rem;
     padding:0  .4rem;
   }
   .user-ul li>img{
    height:.666667rem;
    width:.666667rem;
    padding:0  .4rem;
   }
   .user-ul li div{
       flex-grow: 1;
       display: flex;
       align-items: center;
       justify-content: space-between;
       font-size: .426667rem;
       color: black;
       height: 1.2rem;
       border-bottom: 1px solid #efefef;
   }
</style>