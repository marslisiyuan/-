<template>
  <div>
    <div class="title">
         <div @click="backed"><img src="../../assets/left.png" alt=""></div>
         <h2>收银台</h2>
         <span>...</span>
     </div>  
     <div class="text">
        欢迎使用收银台
    </div>
     <div class="main">
        <div class="flex">
           <p>费率</p>
           <input type="text" placeholder="5%+2元/笔(秒到)" disabled>
        </div>
        <div class="flex">
            <p>消费金额</p>
            <input type="text" placeholder="请输入500-49000元">
        </div>
        <div class="flex">
           <p>验证码</p>
           <div>
               <input type="text">
               <img src="" alt="">
           </div>
        </div>
        <div class="button">
          <button @click="shows" class="ljtj">立即提交</button>
        </div>
        <div class="radio">
            <input type="checkbox" value="ture" name="radio1">
            <span>我要投诉</span>
        </div>
        <div class="content">
           请大家保存此二维码，遇到任何问题，重新扫码进入投诉通道，我们以最快的速度解决您的问题。
        </div>
     </div> 
     <!-- 弹出内容 -->
     <div class="alertcontent">
         <p>【收到钱请不要转给任何人】</p>
         <p class="textleft">亲,您的应得余额为9498元，手续费为500+元，是否继续！</p>
         <div class="alertbutton">
             <button class="buttonleft hidden" @click="hidden">取消</button>
             <button class="buttonright hidden"  @click="hidden">确定</button>
         </div>
    </div>
     <!-- 遮罩层 -->
     <div class="alert"></div>
  </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        created(){
        // console.log(this.$route.params.money)
        },
        mounted(){
          this.$store.commit('shownav',false)
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            shows(){
                 $('.alertcontent').show()
                $('.alert').show()
            },
            hidden(){
                 $('.alertcontent').hide()
                 $('.alert').hide()
            }
        }
    }
</script>
<style scoped="scoped">
.text{
    width: 100%;
    height: 1.066667rem;
    background: white;
    line-height:  1.066667rem;
    font-size: .48rem;
    text-align: center;
}
.main {
    padding: .4rem .533333rem;
}
.main .flex{
  display: flex; 
  font-size: .426667rem;
  margin-top: .4rem;
  line-height: 1.066667rem;
  text-align: center;
}
.main .flex p{
    height: 1.066667rem;
    padding: 0;
    margin: 0;
    align-items: center;
    background: #f3f5f2;
    width: 2.666667rem;
    border: 1px solid #999;
}
.main .flex>input{
    height: 1.066667rem;
    margin-left: .4rem;
    width: 5.333333rem;
    padding: .266667rem;
    font-size: .426667rem;
}
.main .flex>div{
    margin-left: .4rem;
    display: flex;
}
.main .flex>div>input{
    height: 1.066667rem;
    padding: .266667rem;
    font-size: .426667rem;
    width: 2.4rem;
    border: 1px solid #a9a9a9;
}
.main .flex>div>img{
    width: 1.866667rem;
    height: 1.066667rem;
    margin-left: .133333rem;
    background: cadetblue;
}
.main .button button{
    width: 100%;
    background: #faf5d5;
    margin-top: .8rem;
    border: none;
    height: 1.066667rem;
    border-radius: .533333rem;
    font-size: .426667rem;
}
.main .radio{
    display: flex;
    justify-content: center;
    margin: .4rem 0;
    color: red;
    font-size: .373333rem;
    align-items: center;
}
.main .content{
font-size: .346667rem;
}
.alert{
    position: fixed;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    background: #a5a5a5;
    opacity: 0.4;
    z-index: 100;
    display: none;
}
.alertcontent{
    position: absolute;
    top: 40%;
    opacity: 1;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 5.866667rem;
    height: 4.266667rem;
    background: #ebf1ef;
    z-index: 2000;
    border-radius: .533333rem;
    text-align: center;
    display: none;
}
.alertbutton{
    position: absolute;
    bottom: 0;
    /* height: 40px; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    
}
.alertbutton button{
    height: 1.066667rem;
    flex-grow: 1;
    border: none;
    background: #ebf1ef;
    border-top: 1px solid #dbdbdb;
}
.alertbutton .buttonleft{
    border-bottom-left-radius:  .533333rem;
    border-right:1px solid #dbdbdb;
}
.alertbutton .buttonright{
    border-bottom-right-radius:  .533333rem;
    
}
.alertcontent p{
    line-height: .586667rem;
    padding: 0 .266667rem ;
    font-size: .4rem;
    margin: 0;
   
}
.alertcontent p:nth-child(1){
    margin-top: .426667rem;
}
.alertcontent .textleft{
text-align: left;
}
</style>
