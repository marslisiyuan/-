<template>
<div>
    <!-- 无卡支付title -->
    <div class="title">
        <div @click="backed"><img src="../../assets/left.png" alt=""></div>
        <span>收款</span>
        <span></span>
        <!-- <router-link tag="span" to="/emptypay/trading">账单</router-link> -->
    </div>
    <!-- 支付方式 -->
    <div class="payname">  
        <!-- 支付方式 -->
        <div class="pay">
            <div class="paypage">
                <div @click="changepay($event,'1')" class="paychange on">
                    <img src="../../assets/nav/ylpay.png" alt="">
                </div> 
                <p>快捷支付</p>
            </div>
            <div class="paypage">
                <div @click="changepay($event,'2')" class="paychange">
                    <img src="../../assets/nav/wxpay.png" alt="">
                </div> 
                <p>微信扫码</p>
            </div>
            <div class="paypage">
                <div @click="changepay($event,'3')" class="paychange">
                    <img src="../../assets/nav/zfbpay.png" alt="">
                </div> 
                <p>支付宝扫码</p>
            </div>
             <div class="paypage">
                <div @click="changepay($event,'4')" class="paychange">
                    <img src="../../assets/nav/hb.png" alt="">
                </div> 
                <p>花呗回款</p>
            </div>
        </div>
        <!-- 输入金额 -->
        <div class="paynum">
                <p>请输入收款金额</p>
                <div class="inputbox">
                    <!-- <i>￥</i> -->
                    <!-- <input class="tf" name="textfield" type="text" id="tf" size="30" /> -->
                    <span class="tf" id="tf" ></span>
                </div>
        </div>
    </div>

    <div id="numb_tab" >
        <table class="numb_tab">
            <tbody>
                <tr>
                    <td width="25%"><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn1" value="1" /></td>
                    <td width="25%"><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn2" value="2" /></td>
                    <td width="25%"><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn3" value="3" /></td>
                    <td rowspan="2" width="25%"><input class="myinput" type="submit" @click="back" name="button" id="back" style="font-size: 30px" value="×" /></td>
                </tr>
                <tr>
                    
                    <td><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn4" value="4" /></td>
                    <td><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn5" value="5" /></td>
                    <td><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn6" value="6" /></td>
                    
                </tr>
                <tr>
                    <td><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn7" value="7" /></td>
                    <td><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn8" value="8" /></td>
                    <td><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn9" value="9" /></td>
                   <td rowspan="2" id="changecolor" @click="bankcard"><a class="zfb_btn" id="ok_btn">确认<br>支付</a></td>
                </tr>
                <tr>
                    <td colspan="2"><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn0" value="0" /></td>
                    <td><input class="myinput" type="submit" name="button" @click="srnum($event)" id="btn10" value="." /></td>
                </tr>
            </tbody>
        </table>
    </div>
  <div  style="height:170px"></div>
  <div class="consoles" style="display:none;">
        <div>
            暂未开放
        </div>
    </div>
</div>
</template>
<script>
   import {mapState} from "vuex"
    export default {
        data(){
            return{
               jump:false,
               moneys:'',
            }
        },
        mounted(){
            this.$store.commit("shownav",false)
        },
        methods:{
            // showtable(){
            //     document.getElementById("numb_tab").style.display="block";
            // },
            // hidetable(){
            //    document.getElementById("numb_tab").style.display="none";
            // },
            srnum(event){                
                   var tf = document.getElementById('tf')
                   if(tf.innerHTML.indexOf('.')>-1){
                       if(tf.innerHTML.length-tf.innerHTML.indexOf('.')>2){
                           return false
                       }
                   }
                 if(event.target.value == "." && tf.innerHTML == "") return false;
                if(event.target.value == "." && tf.innerHTML.indexOf(".") != -1) return false;
                if(tf.innerHTML.length==1){
                 if(tf.innerHTML.charAt(0)==0 && event.target.value != "."){
                     return false
                 }
                }
                if(tf.value == "0"){
                if(event.target.value == "."){
                tf.innerHTML += event.target.value;
                }
                }else{
                tf.innerHTML += event.target.value;
                if(tf.innerHTML!=""){
                    document.getElementById("ok_btn").style.color="white";
                }else{
                    document.getElementById("ok_btn").style.color="#c8c8c8";
                }
                
                }  
                if(parseFloat(tf.innerHTML)>0){
                   this.jump=true
                }
                this.moneys=tf.innerHTML
            },
            back(){
                var tf =document.getElementById('tf')
                tf.innerHTML = tf.innerHTML.replace(/.$/,'')
                 if(parseFloat(tf.innerHTML)>0){
                   this.jump=true
                }else{
                   this.jump=false 
                }
                if(tf.innerHTML!=""){
                    document.getElementById("ok_btn").style.color="#444";
                }else{
                    document.getElementById("ok_btn").style.color="#c8c8c8";
                }
            },
            backed(){
                window.history.go(-1)
            },
            bankcard(){
                if(this.jump){
                    this.$router.history.push('/emptypay/bankCard')
                    sessionStorage.setItem('money',this.moneys)
                }
                
            },
            changepay(event,index){
             if(index=='1'){
                  $('.paychange').removeClass('on')
                  $(event.currentTarget).addClass("on")
                }else if(index=='4'){
                    this.$router.push('/emptyPayMoney')
                }else{
                  $('.consoles').show()  
                    setTimeout(function(){
                    $('.consoles').hide() },1000)
                }
              
            }
        }
    }
</script>
<style scoped="scoped">
.applylist{
    margin-top: .266667rem;
}
.applylist li{
    padding: .266667rem;
    height: 1.68rem;
    border-bottom: 1px solid #e8e8e8;
    background: chartreuse;
}
.payname{
    height: 6.133333rem;
    position: relative;
}
.pay{
    height: 6.133333rem;
    width: 100%;
    background: #25323e;
    display: flex;
    justify-content: space-around;
    padding: .533333rem 0;
}
.pay .paypage{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pay .paypage>div{
    width: 1.333333rem;
    height: 1.333333rem;
    display: flex;
    justify-content:center;
    /* border: 1px solid #359af8; */
    align-items: center;
    background: #161e25;
    border-radius: .133333rem;
}
.pay .paypage .on{
    border: 1px solid #359af8;
    /* background: #161e25; */
}

.pay .paypage>div img{
    width:1.013333rem;
    height:1.013333rem;
}
.pay .paypage p{
    color: white;
    margin-top: .133333rem;
}
.paynum{
    position: absolute;
    bottom: -1.2rem;
    width: 80%;
    height: 2.933333rem;
    background: white;
    border-radius: .266667rem;
    right: 0;
    left: 0;
    margin: 0 auto;
    padding:.4rem .266667rem  .266667rem  .266667rem;
}
.fl{float:left;}
.rt{float:right;}

.inputbox {line-height: 65px;border-bottom:1px solid #eee;position: relative;} 
/* .inputbox i{font-size:20px;color:#c8161d; position: absolute;left:15px;top:0;line-height: 65px} */
.inputbox span{border:none;line-height: 65px;width:100%;text-indent: 60px;font-size:34px;color:#000;    display: block;
    height: 65px;}
.ok_btn{color:#c8c8c8;background: #dbdbdb;line-height: 40px;display: block;margin:15px 10px;border-radius:5px;text-align: center;}
.foot img{width:52px;margin:0 10px;}
.foot{text-align: center;color:#595757;font-size:12px;}
.numb_tab tbody{width:100%}
.numb_tab{overflow: hidden;width:100%;background: #fff;color: #000;border-collapse: collapse;    bottom: 0;
    left: 0;    position: fixed;}
.numb_tab td{ color: #000; height: 65px; line-height: 65px;border: 1px solid #f5f5f5;font-size:22px;text-align: center;cursor: pointer;position:relative;}
.numb_tab td:active  { background: #e0e0e0;}
.zfb_btn{color:#ddd; display: inline-block;width:45px;line-height: 20px;position: absolute;    margin-top: -27px;
    font-size: 16px;
    left: 50%;
    margin-left: -17px;}
.numb_tab td input{border:none;background: none;font-size:18px;line-height: 65px;width:100%;text-align: center;}   
#changecolor{
    background: #1aa1c9;
}
</style>
