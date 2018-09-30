<template>
         <div>
            <div class="title">
                <span @click="backed">关闭</span>
                <h2>支付宝付款</h2>
                <span>...</span>
            </div>  
            <div class="main">
                <div class="text">
                    测试和收银台
                </div>
                <ul class="payul">
                    <li style="padding-left: .533333rem;">请选择支付方式:</li>
                    <li><a href="/#/checkstand"><img src="../assets/图层1@2x.png" alt=""><span>小额花呗</span></a></li>
                    <li><a href="/checkstand"><img src="../assets/图层2@2x.png" alt=""><span>信用卡通道</span></a></li>
                </ul>
                <div class="tsyj">
                    <a href="/checkstand"><img src="../assets/图层3@2x.png" alt=""><span>投诉建议</span></a>
                </div>
                <ul class="massageul">
                <li>重要信息提示</li>
                <li>以下情况均属诈骗</li>
                <li>1.刷单刷信誉</li>
                <li>2.客服退款赔款</li>
                <li>3.支付宝认证</li>
                <li>4.银行卡认证</li>
                <li>5.公检法资金审查</li>
                </ul>
            </div> 
       </div>
</template>
<script>
    export default{
        data(){
         return{
           phone:'',
           password:'',
         }
        },mounted(){
            this.$store.commit('shownav', false)
            $('.aa').css('background',"white")
        },
        methods:{
          loginindex(){
            //  $.cookie('user',this.phone,{expires:7,path:'/'})
            //  console.log(this.phone+','+this.password)
            //  if($.cookie('user')){
            //      this.$router.push('/index')
            //  }
            //  console.log($.cookie('user'))
          },backed(){
              this.$router.push('/index')
          }
        }
    }
</script>
<style scoped="scoped">
.title h2{
    font-size: .48rem;
    color: white;
}
.main .text{
    margin: .8rem;
    text-align: center;
    background: white;
    font-size: .426667rem;
    padding: .266667rem;
    border-radius: .266667rem;
}
.main .payul,.massageul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.main .payul li,.main .tsyj{
    height:1.333333rem;
    line-height:1.333333rem;
    background: white;
    border-bottom: 2px solid #efefed;
    font-size: .373333rem;
}
.main .payul li a,.main .tsyj a{
display: block;
display: flex;
align-items: center;
color: black;
text-decoration: none;
padding-left: .533333rem;
}
.main .tsyj{
    margin-top: 1.066667rem;
}
.main .payul img,.tsyj img{
width: .533333rem;
height: .533333rem;
margin-right: .266667rem;
}
.massageul li{
    padding: .08rem;
    color: red;
    font-size: .4rem;
}
.massageul{
    margin: .8rem 1.066667rem;
}
</style>
