<template>
    <div>
        <!-- 代理升级title -->
        <div class="title">
            <div></div>
            <!-- <div @click="backed"><img src="../../assets/left.png" alt=""></div> -->
            <span>升级代理</span>
            <span></span>
        </div>

        <!-- 会员卡 -->
        <ul class="membershipCard">
            <li>
                <div class="card hj">
                    <h2>黄金会员权益</h2>
                    <div v-if="grade">
                        <p>黄金会员无卡快捷费率：{{grade[6].split('|')[1]}}</p>
                        <p>黄金会员养卡快捷费率：{{grade[6].split('|')[2]}}</p>
                        <p>普通会员付费{{grade[6].split('|')[0]}}元，可升级为黄金会员</p>
                    </div>
                </div>
                <div class="upgrade" @click="upgrade('6',grade[6].split('|')[0])">立即升级</div>
            </li>
            <li>
                <div class="card zs">
                     <h2>钻石会员权益</h2>
                    <div v-if="grade">
                        <p>钻石会员无卡快捷费率：{{grade[5].split('|')[1]}}</p>
                        <p>钻石会员养卡快捷费率：{{grade[5].split('|')[2]}}</p>
                        <p>普通会员付费{{grade[5].split('|')[0]}}元，可升级为钻石会员</p>
                    </div>
                </div>
                <div class="upgrade" @click="upgrade('5',grade[5].split('|')[0])">立即升级</div>
            </li>
            <li>
                <div class="card jjr">
                     <h2>经纪人权益</h2>
                    <div v-if="grade">
                        <p>经纪人无卡快捷费率：{{grade[4].split('|')[1]}}</p>
                        <p>经纪人养卡快捷费率：{{grade[4].split('|')[2]}}</p>
                        <p>普通会员付费{{grade[4].split('|')[0]}}元，可升级为经纪人</p>
                    </div>
                </div>
                <div class="upgrade" @click="upgrade('4',grade[4].split('|')[0])">立即升级</div>
            </li>
        </ul>
        <div class="consoles" style="display:none;">
            <div>
                <p>{{text}}</p>
            </div>
        </div>
         <div class="vip-footer">

         </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                version:'',
                grade:'',
                text:'',
            }
        },
        mounted() {
            this.version=this.$store.state.version
            this
                .$store
                .commit('shownav', true)

            setTimeout(function(){
             $('.navname').map(function(index,item){
                   if($(item).attr('data')){
                       $(item).children('img').attr('src',require('@/assets/drawable/'+$(item).attr('data')+'.png'))
                   }
                })
             $('#hy').children('img').attr('src',require('@/assets/drawable/djhy.png'))
            },10)
            var MAC=$.md5('0700890008'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {
                    '0':'0700',
                    '3':'890008',
                    '59':this.version,
                    '64':MAC
                },{
                    emulateJSON:true,
                }).then(function(res){
                    this.grade=JSON.parse(res.data['5'])
                })
            // console.log(this.$store.state.show)   $('.nav-list').css('display','none')
        },
        methods: {
            // backed() {
            //     window,
            //     history.go(-1)
            // }
            upgrade(event,money){
               var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
               var MAC=$.md5('0700190111'+money+'z'+event+'M'+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
               this.$http.post(
                   'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                   {
                       '0':'0700',
                       '3':'190111',
                       '5':money,
                       '8':'z',
                       '10':event,
                       '41':'M',
                       '42':merchantidNo,
                       '59':this.version,
                       '64':MAC,
                   },{
                       emulateJSON:true,
                   }).then(function(res){
                       if(res.data['39']=='00'){
                           this.$router.push({path:'/supportCard/codeImg',query:{'money':money,type:res.data['57']}})
                       }else{
                            this.text=res.data['39']
                            $('.consoles').fadeIn()
                            setTimeout(function(){
                            $('.consoles').fadeOut()   
                            },2000)
                       }
                   })
            }
        }
    }
</script>
<style scoped="scoped">
    .membershipCard li {
        padding-top: 0.266667rem;
        margin-bottom: 0.266667rem;
        background-color: white;
        /* width: 100%; */
        border-bottom: 0.013333rem solid #ddd;
    }
    .membershipCard .card {
        height: 4.266667rem;
        width: 9.466667rem;
        padding: 0 0.266667rem;
        margin: 0 auto;
        /* background: black; */
        border-radius: .266667rem;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        color: white;
        box-shadow: .053333rem .08rem .16rem rgba(0,0,0,.5);
    }
    .membershipCard h2{
        font-size: .48rem;
        text-align: center;
        font-weight: 600;
        padding: .4rem 0;
    }
    .membershipCard .card>div{
        padding-left: .266667rem;
        line-height: .586667rem;
    }
    .membershipCard .hj{
        background: url('../../assets/drawable/hj.png');
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .membershipCard .zs{
        background: url('../../assets/drawable/bj.png');
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .membershipCard .jjr{
        background: url('../../assets/drawable/jjr.png');
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .membershipCard .card div{
        width: 100%;
    }
    .membershipCard .upgrade {
        width: 4rem;
        height: 0.933333rem;
        border-radius: 1.333333rem;
        background: saddlebrown;
        text-align: center;
        margin: 0.4rem auto;
        line-height: 0.933333rem;
        color: white;
        font-size: 16px;
    }
    .vip-footer{
        height: 1.333333rem;
    }
</style>