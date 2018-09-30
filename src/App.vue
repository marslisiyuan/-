<template>
    <div id="app">
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
        <!-- <img src="./assets/logo.png"> -->
        <div class="load">

        </div>
        <router-view/>
        <nav class="nav-list" v-if="show">
            <ul>
                <router-link tag="li" to="/index">
                    <div id="sy" class="navname" data="sy" @click="name($event)">
                       <img src="./assets/drawable/djsy.png" alt="">
                       <span class="sy-span">首页</span>
                    </div>
                </router-link>
                <li @click="goSupportCard" >
                    <div id="kb" class="navname" data="kb" @click="name($event)">
                       <img  src="./assets/drawable/kb.png" alt="">
                       <span>卡包</span>
                    </div>   
                </li>
                <!-- <router-link tag="li" :to="routerlink" >
                    <div id="kb" class="navname" data="kb" @click="name($event)">
                       <img src="./assets/drawable/kb.png" alt="">
                       <span class="bag-span">卡包</span>
                    </div>   
                </router-link> -->
                <router-link tag="li" to="/user/buy_vip" >
                    <div id="hy" class="navname" data="hy" @click="name($event)">
                       <img src="./assets/drawable/hy.png" alt="">
                       <span class="hy-span">加入会员</span>
                    </div>   
                </router-link>
                <router-link tag="li" to="/tool/saveImageone">
                     <div id="yq" class="navname" data="yq" @click="name($event)">
                         <img src="./assets/drawable/yq.png" alt="" >
                         <span class="yq-span">邀请好友</span>
                     </div>
                </router-link>
                <!-- <router-link tag="li" to="/supportCard">
                     <div>
                         <img class="li-img" src="./assets/nav/znhk.png" alt="">
                     </div>
                </router-link>   -->
                <router-link tag="li" to="/user">
                     <div id="wd" class="navname" data="wd" @click="name($event)">
                         <img src="./assets/drawable/wd.png" alt="">
                         <span class="wd-span">我的</span>
                     </div>
                </router-link>
            </ul>
        </nav>
        <!-- <div class="consoles dredge" style="display:none;">
            <div>
                {{title}}
            </div>
        </div> -->
    </div>
</template>
<style>
    /* @import "../static/css/main.css"; */
    /* @import "../static/css/color-dark.css";     深色主题 */
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
</style>
<script>
    import {mapState} from "vuex"
    export default {
        name: 'App',
        data() {
            return {
              routerlink:'', 
              unbind:false,
              text:'',
              version:'',
            }
        },
         computed:{
            ...mapState([
                'show'
            ])
        },
        watch:{
            $route(to,from,next){
               if(to.meta.title){
                   document.title=to.meta.title
               }
            },
        },
        mounted() {
            this.version=this.$store.state.version
        },
        methods:{
            name(event){

               
                if($.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].isValid!='true'){
                    
                }else{
                   $('.navname').map(function(index,item){
                    if($(item).attr('data')){
                        $(item).children('img').attr('src',require('@/assets/drawable/'+$(item).attr('data')+'.png'))
                    }
                    })  
                    $(event.currentTarget).children('img').attr('src',require('@/assets/drawable/dj'+$(event.currentTarget).attr('data')+'.png'))
                }
                
            //   console.log($(event.currentTarget).attr('data'))
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
            }
            // name(event){
            //     // console.log($(event.currentTarget)[0].id)
            //     if($(event.currentTarget)[0].innerText == '卡包'){
            //         var freezeStatus = sessionStorage.getItem('freezeStatus');
            //         if(freezeStatus == '10B'){
            //             this.routerlink = '/supportCard';
            //         }else{
            //             this.unbind=true;
            //             this.text = '请先完成实名认证';
            //         }
            //         $('.router-link-exact-active').css('color','#666');
            //         $('.navname>span').css('color','#666');
            //         $('.bag-span').css('color','#0089DC');
            //     }else if($(event.currentTarget)[0].innerText == '首页'){
            //         $('.navname>span').css('color','#666');
            //         $('.bag-span').css('color','#666');
            //         $('.sy-span').css('color','#0089DC');
            //     }else if($(event.currentTarget)[0].innerText == '加入会员'){
            //         $('.navname>span').css('color','#666');
            //         $('.bag-span').css('color','#666');
            //         $('.hy-span').css('color','#0089DC');
            //     }else if($(event.currentTarget)[0].innerText == '邀请好友'){
            //         $('.navname>span').css('color','#666');
            //         $('.bag-span').css('color','#666');
            //         $('.yq-span').css('color','#0089DC');
            //     }else if($(event.currentTarget)[0].innerText == '我的'){
            //         $('.navname>span').css('color','#666');
            //         $('.bag-span').css('color','#666');
            //         $('.wd-span').css('color','#0089DC');
            //     }
               
            //     $('.navname').map(function(index,item){
            //        if($(item).attr('data')){
            //            $(item).children('img').attr('src',require('@/assets/drawable/'+$(item).attr('data')+'.png'))
            //        }
            //     })
            //     $(event.currentTarget).children('img').attr('src',require('@/assets/drawable/dj'+$(event.currentTarget).attr('data')+'.png'))
            // //   console.log($(event.currentTarget).attr('data'))
            // }
        },
    
    }
</script>
<style>
    #app{
        height:100%;
    }
    .nav-list ul {
        position: fixed;
        bottom: 0;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 1.306667rem;
        background: white;
        box-shadow: rgba(0, 0, 0, 0.1) 0 -.026667rem 0.053333rem 0;
    }

    .nav-list li {
        list-style: none;
        text-align: center;
        margin: 0;
        padding: 0;
        height: 1.306667rem;
        box-sizing: border-box;
    }
    .nav-list li div{
        height: 1.306667rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .nav-list li img{
        width: .72rem;
        height: .72rem;
    }
    .nav-list .li-img{
        position: absolute;
        width:1.6rem;
        height: 1.6rem;
        padding:.013333rem;
        background:#fff;
        box-shadow:1px 1px 2px #eee;
        bottom:0;
        border-radius:50%;
    }
    .nav-list li span {
        font-size: .293333rem;

    }
    .nav-list li .aa {
        font-size: 0.533333rem;
        margin-top: 0.133333rem;
    }
    .router-link-exact-active {
        color: #0089DC !important;
    }
    .bag-span{
        color:#666;
    }
</style>