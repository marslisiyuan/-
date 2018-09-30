<template>
    <div id="index">
        <div class="title"><img @click="showphone" src="../assets/nav/kefu.png" alt=""><span>欢朋金服</span><img src="../assets/nav/gonggao.png" @click="open" alt=""></div>
        <header>
            <!-- <div class="headertxcontent">
                <div class="">
                    <img src="" alt="">
                        <br>
                            <p>1</p>
                        </div>
                        <div>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                        </div>
                    </div> -->
                    <el-carousel trigger="click" height="140px">
                        <el-carousel-item>
                             <div class="demo-carousel">
                                <img src="../assets/nav/lunbo1.png" alt="">
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div class="demo-carousel">
                                <img src="../assets/nav/lunbo2.png" alt="">
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                             <div class="demo-carousel">
                                <img src="../assets/nav/lunbo3.png" alt="">
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </header>

                <div class="wzlb">
                     <img src="../assets/tz.png" alt="">
                    <div id="scroll_div" class="fl"> 
                        <div id="scroll_begin">
                            {{this.announcement.content}}
                        </div> 
                        <div id="scroll_end"></div>
                    </div> 
                </div>

                <div class="cdnav">
                    <ul>
                        <!-- <router-link v-for="(item,index) in navtitle" tag="li" :to="item.router" :key="index">
                        <div>
                           <img :src="item.img" alt="">
                           <span>{{item.title}}</span>
                        </div>
                        </router-link> -->
                        <li  @click="goSupportCard">
                        <div data='kb'>
                           <img src="../assets/nav/tool/zhinengyangka.png" alt="">
                           <span>智能还款</span>
                        </div>
                        </li>
                        <!-- <div data='kb' class="payfreeze" @click="tosupportCard">
                            <div>
                                <img src="../assets/nav/tool/zhinengyangka.png" alt="">
                                <span>智能还款</span>
                            </div>
                        </div>
                         <el-dialog
                            :visible.sync="unbind"
                            width="90%"
                            top="30vh"
                            >
                            <span>{{dialogtext}}</span>
                            <span slot="footer" class="dialog-footer"> -->
                                <!-- <el-button @click="unbind = false">取 消</el-button> -->
                                <!-- <el-button type="primary" @click="unbind = false">确 定</el-button>
                            </span>
                        </el-dialog> -->
                        <router-link tag="li" to="/emptypay">
                        <div>
                            <img src="../assets/nav/tool/shoukuan.png" alt="">
                            <span>无卡支付</span>
                        </div>
                        </router-link>
                        <router-link tag="li" to="/bonus/bonuscash">
                        <div>
                            <img src="../assets/nav/tool/yuetixian.png" alt="">
                            <span>余额提现</span>
                        </div>
                        </router-link>
                        <router-link tag="li" to="/creditcard">
                        <div>
                            <img src="../assets/nav/tool/xinyongkashengqin.png" alt="">
                            <span>办卡中心</span>
                        </div>
                        </router-link>
                        <router-link tag="li" to="/tool/SaveImageone">
                        <div data='yq'>
                            <img src="../assets/nav/tool/fenxiangzuanqian.png" alt="">
                            <span>分享赚钱</span>
                        </div>
                        </router-link>
                        <router-link tag="li" to="/user/buy_vip">
                        <div data='hy'>
                            <img src="../assets/nav/tool/huiyuanshenji.png" alt="">
                            <span>会员升级</span>
                        </div>
                        </router-link>
                        <li @click="showphone">
                        <div>
                            <img src="../assets/nav/tool/zhuanshukefu.png" alt="">
                            <span>专属客服</span>
                        </div>
                        </li>
                        <li @click="alert">
                        <div>
                            <img src="../assets/nav/tool/anquanbaozhang.png" alt="">
                            <span>安全保障</span>
                        </div>
                        </li>
                    </ul>
                </div>
                 <ul class="index-ul">
                    <li @click="goSupportCard">
                        <div class="content"><img style="width:.533333rem" src="../assets/nav/xinyongkashenqing_29x29_@2x.png" alt=""><p><span style="color:black;margin-right:.4rem;margin-left: 0.266667rem;">智能还款</span><span>智能还款，轻松度过账单日</span></p><img style="width:.293333rem" src="../assets/right.png" alt=""></div>
                        <div class="photo"><img src="../assets/nav/yyq.jpg" alt=""></div>
                    </li>
                    <router-link tag="li" to="/emptypay">
                        <div class="content"><img style="width:.533333rem" src="../assets/nav/kjsk_21x19_@2x.png" alt=""><p><span style="color:black;margin-right:.4rem;margin-left: 0.266667rem;">快捷收款</span><span>支持微信/支付宝/银联模式</span></p><img style="width:.293333rem" src="../assets/right.png" alt=""></div>
                        <div class="photo"><img src="../assets/nav/yjsk.jpg" alt=""></div>
                    </router-link>
                 </ul>
                <!-- <div class="nav-group">
                        <div class="item" style="background:rgb(118,197,238)">
                            <div class="logo"><img src="../assets/nav/cskc.png" alt=""></div>
                            <div class="info">
                                <h3>财商课程</h3>
                                <p>行业大咖在线授课</p>
                                <p>让你小白秒变专家</p>
                            </div>
                        </div>
                        <router-link tag="div" class="item" to="/simulationBank" style="background:rgb(241,169,119)">
                            <div class="logo"><img src="../assets/nav/dkedpg.png" alt=""></div>
                            <div class="info">
                                <h3>贷款额度评估</h3>
                                <p>在线评估 精准推荐</p>
                                <p>贷得到 再不伤信用</p>
                            </div>
                        </router-link>
                        <router-link tag="div" class="item" to="/studentCreditCard" style="background:#c99bc2">
                            <div class="logo"><img src="../assets/nav/dexyk.png" alt=""></div>
                            <div class="info">
                                <h3>大额信用卡</h3>
                                <p>最新办卡风口</p>
                                <p>简单 快捷 高额</p>
                            </div>
                        </router-link>
                        <router-link tag="div" class="item" to="/increase_cheats" style="background:#7cc397">
                            <div class="logo"><img src="../assets/nav/jrmj.png" alt=""></div>
                            <div class="info">
                                <h3>金融秘籍</h3>
                                <p>金融行业核心知识</p>
                                <p>贷款 提额 征信秘密</p>
                            </div>
                        </router-link>
                </div> -->

                <!-- <div class="xykhkimg">
                    <div>
                        <img src="../assets/nav/hktx.png" alt="">
                        <h3>还款提醒</h3>
                    </div>
                    <router-link tag="div" to="/user/schedule">
                       <img src="../assets/nav/wddd.png" alt="">
                       <h3>我的订单</h3>
                    </router-link>
                </div> -->
                 <div class="consoles security" style="display:none;">
                    <div>
                        <p>银联在线 实名认证</p>
                        <p>中国平安 安全保障</p>
                    </div>
                 </div>
                  <!-- <div class="consoles dredge" style="display:none;">
                    <div>
                        请付费开通 （我的）=>卡包付费
                    </div>
                </div> -->
                 <div class="mask">

                 </div>
                 <div class="call-phone" style="display:none;">
                     <div>
                         <p>拨打客服电话</p>
                         <p><a>0571-82576627</a></p>
                     </div>
                     <div class="callbutton"><button @click="hidephone()">取消</button></div>
                 </div>
                <!-- <div class="announcement">
                    <div class="close">x</div>
                    <p>
                        dasdasdasdsad
                    </p>
                </div> -->
                <div class="kmjf" >
                </div>
                
            </div>
        </template>

        <script>
            export default {
                // name: 'HelloWorld',
                data() {
                    return {
                        speed:'2000',
                        contents:'',
                        announcement:'',
                        version:"",
                        gongao:'公告',
                        text:'暂无公告',
                        unbind:false,
                        dialogtext:'',
                    }
                },
                mounted(){
      
                    this.$store.commit('shownav', true)
                        setTimeout(function(){
                    $('.navname').map(function(index,item){
                        if($(item).attr('data')){
                            $(item).children('img').attr('src',require('@/assets/drawable/'+$(item).attr('data')+'.png'))
                        }
                        })
                    $('#sy').children('img').attr('src',require('@/assets/drawable/djsy.png'))
                    },10)
                    if(!JSON.parse(localStorage.getItem('info'))){
                       $.cookie('user','')
                        localStorage.removeItem('info')
                        this.$router.push('/login')
                    }
                     if(!$.cookie('user')){
                        this.$router.push('/login')
                     }
                     this.version=this.$store.state.version
                  var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
                  var MAC=$.md5('0700190103'+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                  this.$http.post(
                      'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                      {
                          '0':'0700',
                          '3':'190103',
                          '42':merchantidNo,
                          '59':this.version,
                          '64':MAC
                      },
                      {
                        emulateJSON:true
                      }).then(function(res){
                          if(res.data['39']=='00'){
                            if(res.data['60']){
                            this.announcement=JSON.parse(res.data['60'])[0]
                            }
                                setTimeout(function(){
                                ScrollImgLeft() 
                            },100)
                          }
                      })
                },methods:{
                      alert(){
                          $('.security').fadeIn()
                          setTimeout(function(){
                           $('.security').fadeOut()   
                          },2000)
                      },
                      phone(){
                          
                          window.location.href = "tel:10086"
                      },
                      showphone(){
                          $('.call-phone').show()
                          $('.mask').show()
                      },
                      hidephone(){
                          $('.call-phone').hide()
                          $('.mask').hide()
                      },
                      goSupportCard(){
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
                                var money
                              if(res.data['39']=='00'){
                                money=res.data['5']
                              }
                                if($.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].isValid=='true' || money=='0.00'){
                                   this.$router.push('/supportCard')
                                }else{
                                  this.$router.push({path:'/user/cardPay',query:{'money':res.data['5']}}) 
                                }
                          })
                           
                        },
                     open() {
                        if(this.announcement){
                            this.$alert( this.announcement.content,  this.announcement.title, {
                            // confirmButtonText: '确定',
                            showConfirmButton:false,
                            });
                         }else{
                             this.$alert(this.text, this.gongao, {
                            // confirmButtonText: '确定',
                            showConfirmButton:false,
                            });
                         }
                    },
                    //判断freezeStatus是否等于10B 是否已经实名认证
                    // tosupportCard(){
                    //     var freezeStatus = sessionStorage.getItem('freezeStatus');
                    //     if(freezeStatus == '10B'){
                    //         this.$router.push('/supportCard');
                    //     }else{
                    //         this.unbind=true;
                    //         this.dialogtext = '请先完成实名认证';
                    //     }
                    // }
                    
                //    name(event){
                //         $('.navname').map(function(index,item){
                //         if($(item).attr('data')){
                //             $(item).children('img').attr('src',require('@/assets/drawable/'+$(item).attr('data')+'.png'))
                //         }
                //         })
                //         console.log((event.currentTarget).attr('data'))
                //         $('#'+$(event.currentTarget).attr('data')).children('img').attr('src',require('@/assets/drawable/dj'+$(event.currentTarget).attr('data')+'.png'))
                //    }
                }
            }
        </script>

        <!-- Add "scoped" attribute to limit CSS to this component only -->
        <style scoped="scoped">
        #index{
            height: 100%;
        }
            .title{
                background: #fff;
                color: black;
                font-size: .48rem;
            }
            .title img{
                height: .533333rem;
                width:  .533333rem;
            }
            header {
               width: 100%;
               height:  3.733333rem;
               background: black;
            }
           .demo-carousel{
               width: 100%;
               height: 3.733333rem;
               overflow: hidden;
           }
           .demo-carousel img{
               width: 100%;
               /* height: 100%; */
           }
            .cdnav {
                background: white;
            }
            .cdnav ul {
                display: flex;
                /* justify-content: center; */
                flex-wrap: wrap;
                /* padding-bottom: .533333rem; */
            }
            .cdnav ul li {
                width: 25%;
                text-align: center;
                height: 1.853333rem;
                margin-top: .533333rem;
            }
            .cdnav ul li>div{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction:column;
            }
            .cdnav li span{
                font-size: .32rem;
            }
            .cdnav li img{
                width: .8rem;
                height: .8rem;
            }
            .nav-group  {
                background: white;
                margin-top: 0.266667rem;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                padding: .133333rem .266667rem .266667rem .266667rem;
               
            }
            .nav-group .item {
                width: 49%;
                border-bottom: 1px solid #ccc;
                line-height: .586667rem;
                white-space: nowrap;
                padding: .266667rem .186667rem;
                border-radius: .133333rem;
                margin-top: .133333rem;
            }
            .nav-group .item .logo{

                vertical-align: middle;
                display: inline-block;
            }
            .nav-group .item .info{
                display: inline-block;
                height: 1.466667rem;
                padding-left: .133333rem;
                vertical-align: middle;
            }
            .nav-group .item .info h3{
                line-height: .533333rem;
                color: white;
                border-bottom: 1px solid white;
            }
            .nav-group .item .info p{
                font-size: .32rem;
                -webkit-transform-origin-x: 0;
                transform:scale(0.8);
                margin-top: .106667rem;
                line-height: .266667rem;
                color: white;
            }
            .xykhkimg {
                margin-top: 0.266667rem;
                padding: .133333rem .133333rem .266667rem .133333rem;
                background: white;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .xykhkimg div {
                height: 1.6rem;
                width: 48%;
                border: 2px solid #c99bc2;
                border-radius: .133333rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .xykhkimg div h3{
                font-size: .533333rem;
                font-weight: 800;
            }
            .kmjf {
                height:1.6rem;
                text-align: center;
                /* margin-top: .8rem; */
                width: 100%;
            }
             .index-ul{
                 margin-top: .133333rem;
             }
            .index-ul li{
                padding:0 .133333rem;
                background: white;
            }
            .index-ul .content{
                padding: .266667rem;
                display: flex;
                align-items: center;
                /* justify-content: space-between; */
                font-size: .426667rem;
            }
             .index-ul .content p{
                flex-grow: 1;
             }
            .index-ul .content img{
                height: .533333rem;
            }
            .index-ul .photo img{
              width: 100%;
            }
            .mask{
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background: black;
                opacity: 0.4;
                z-index: 3000;
                display: none;
            }
            .call-phone{
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                border-radius: .266667rem;
                margin: auto;
                height: 3.2rem;
                width: 8rem;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                background: white;
                text-align: center;
                z-index: 4000;
            }
            .callbutton{
                margin-top: .4rem;
            }
            .callbutton button{
                padding: .08rem .8rem;
                background: #2472c8;
                color: #999;
                border: none;
                border-radius: .133333rem;
                margin:0 .266667rem;
            }
            .payfreeze{
                width: 25%;
                text-align: center;
                height: 1.853333rem;
                margin-top: .533333rem;
            }
            .payfreeze>div{
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
            }
            .payfreeze>div>img{
                width: .8rem;
                height: .8rem;
            }
            .payfreeze>div>span{
                font-size: .32rem;
            }
            /* .announcement{
                position: absolute;
                top: 5.333333rem;
                background: white;
                border: 1px solid #efefef;
                width: 70%;
                height: 4.8rem;
                right: 0;
                left: 0;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: .266667rem;
            }
             .announcement .close{
                 position: absolute;
                 top: 0;
                 right: 0;
                 font-size: .533333rem;
                width: .533333rem;
                height: .533333rem;
                line-height: .426667rem;
                text-align: center;
                background: #efefef;
             } */
        </style>