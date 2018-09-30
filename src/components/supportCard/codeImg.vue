<template>
    <div id="codeImg">
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div><span>我的二维码</span>
            <span></span>
        </div>
        <div class="codeImg-2wm">
            <h2>￥{{codeimg.money}}</h2>
            <div class="logo">
                <div id="code">

                </div>
            </div>
            <p>请在10分钟内扫码支付</p>
            <p>欢朋金服委托第三方收取费用</p>
        </div>
        <div class="consoles" style="display:none;">
            <div>
                <p>二维码生成失败</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
               codeimg:"",
               version:'',
            }
        },
        mounted(){
           this.$store.commit('shownav',false)
           this.codeimg=this.$route.query
           this.version=this.$store.state.version
           var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
           var MAC=$.md5('0700890004'+this.codeimg.money+this.codeimg.type+'inMoney'+merchantidNo+'123'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                   var url='http://hangzhou.llyzf.cn/lly-posp-proxy/payView.app?m='+this.codeimg.type
                 $("#code").qrcode({     
                    render: "canvas",      
                    width: 180,
                    height:180,      
                    text: url });
        },
        methods:{
            backed(){
               window.history.go(-1)
            }
        }
    }
</script>
<style scoped="scoped">
 #codeImg{
     height: 100%;
     background: #efefef;
 }
 .codeImg-2wm{
     margin: .533333rem;
     padding:.133333rem .266667rem;
     background: #a78b5b;
     color: #fff;
     text-align: center;
 }
 .codeImg-2wm h2{
     font-size: .64rem;
     font-weight: 600;
 }
 .codeImg-2wm .logo{
     width: 5.333333rem;
     height: 5.333333rem;
     background: white;
     /* display: flex;
     justify-content: center;
     align-items: center; */
     margin:auto;
     position: relative;
 }
 .codeImg-2wm .logo #code{
     position: absolute;
     height: 4.8rem;
     width: 4.8rem;
     top: .266667rem;
     left: .266667rem;
     /* position: absolute;
     top:0;
     bottom: 0;
     right: 0;
     left: 0;
     margin: auto; */
     /* background: red; */
 }
 .codeImg-2wm p{
     padding: .133333rem;
 }
</style>
