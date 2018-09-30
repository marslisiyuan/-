<template>
    <div id="share">
        <div class="title titlefixed"> 
            <span></span>
            <!-- <div @click="backed"><img src="../../assets/left.png" alt=""></div> -->
            <span>邀请好友</span>
            <span></span>
        </div>
         <!-- <div class="bigimg">
            <img  :src="'data:image/jpeg;base64,' + downloadUrl"/>
        </div> -->
        <div class="sharepadding"></div>
        <div class="share">
            <div class="share-2wm">
                <!-- <img src="../../assets/2wm.png" alt=""> -->
                <div id="codeimg">

                </div>
                <p v-if="info"><span>{{info.bankAccountName.substr(0, 1)}}**</span>&#x3000;<span>{{info.linkPhone.substr(0, 3)}}***{{info.linkPhone.substr(7, 11)}}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
            //   downloadUrl:'',
            info:'',
            version:''
            }
        },
        mounted(){
            this.version=this.$store.state.version
             setTimeout(function(){
             $('.navname').map(function(index,item){
                   if($(item).attr('data')){
                       $(item).children('img').attr('src',require('@/assets/drawable/'+$(item).attr('data')+'.png'))
                   }
                })
             $('#yq').children('img').attr('src',require('@/assets/drawable/djyq.png'))
            },10)
            this.info=eval(JSON.parse(localStorage.getItem('info'))['42'])[0]
             $("#codeimg").qrcode({     
                    render: "canvas",      
                    width: 120,
                    height:120,      
                    text: 'http://hangzhou.llyzf.cn/lly-posp-proxy/toAPPRegister.app?phone='+this.info.linkPhone+'&product='+this.version.split('-')[0]});
        },
        methods:{
            backed(){
                window.history.go(-1)
            }
        }
    }
</script>
<style scoped="scoped">
   #share{
       height: 100%;
   }
   .sharepadding{
       padding-top: 1.2rem;
   }
   .share{
       width: 100%;
       background: url('../../assets/timg11.png');
       height: 15.253333rem;
       background-size: contain;
       position: relative;
   }
   .share .share-2wm{
       position: absolute;
       bottom:2.933333rem;
       padding: .133333rem;
       right: 1.333333rem;
       /* left: 0; */
       /* margin: 0 auto; */
       width: 4rem;
       background: white;
       text-align: center;
   }
   .share .share-2wm img{
       width: 4rem;
       height: 4rem;
   }
   /* .share .share-2wm p{
       display: flex;
       justify-content: space-between;
   } */
</style>
