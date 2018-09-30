<template>
         <div>
             <div class="title titlefixed">
                <div @click="backed"><img src="../assets/left.png" alt=""></div>
                <span>找回密码</span>
                <span></span>
             </div>
             <!-- 登入logo -->
           <div class="logos">
              <img src="../assets/login/logo.png" alt="">
           </div>
           <!-- 登入密码 -->
           <div class="dl">
               <div class="dlinput borderbottom">
                    <!-- <Icon type="android-phone-portrait"></Icon> -->
                    <i class="el-icon-mobile-phone"></i>
                    <input type="text" placeholder="请输入手机号" ref="phone">
               </div>
               <div class="dlinput borderbottom">
                    <i class="el-icon-message"></i>
                    <input type="text" placeholder="请输入验证码"  ref="code">
                    <button class="code timeremain"  @click="code($event)">获取验证码</button>
               </div>
               <div class="dlinput borderbottom">
                     <i class="el-icon-view"></i>
                    <input type="password" placeholder="请输入新密码" ref="password">
               </div>
               <div class="dlinput borderbottom">
                    <i class="el-icon-view"></i>
                    <input type="password" placeholder="确认密码" ref="again">
               </div>
               <!-- 登入按钮 -->
               <div class="dlinput">

                   <button class="confirm" @click='registers'>确定</button>
               </div>
           </div>
             <!-- 弹出 -->
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
            <div class="consoles" style="display:none;">
                <div>
                    {{contents}}
                </div>
            </div>         
       </div>
</template>
<script>
    export default {
        data(){
         return{
          version:'',
          unbind:false,
          text:'',
          contents:'',
         }
        },mounted(){
            this.version=this.$store.state.version
            this.$store.commit('shownav', false)
            $('.aa').css('background',"white")
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            code(event){
               
                var _vm=this
                if(this.$refs.phone.value.length==11){
                   $(event.currentTarget).attr('disabled',true)
                   var events=$(event.currentTarget)
                   var phone=this.$refs.phone.value
                   var MAC=$.md5('0700'+phone+'190919'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D').toUpperCase()
                    // console.log(url)
                this.$http.get('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',{
                   params:{'0':'0700','1':phone,'3':'190919','59':this.version,'64':MAC}
                }).then(function(res){
                    if(res.data['39']=='00'){
                        var curCount = 60  
                        function SetRemainTime() {
                            if (curCount == 0) {
                                clearInterval(interValObj); //停止计时器
                                events.removeClass("disabled").attr("disabled",false).html("重新发送");
                            } else {
                                curCount--;
                                events.addClass("disabled").attr("disabled",true).html("剩余" + curCount + "秒");
                            }
                        }
                        var interValObj = setInterval(SetRemainTime, 1000);
                    }
                })
                }else{
                    this.unbind=true
                    this.text='请输入正确的手机号码'
                }
            },
            registers(){
                var _vm=this
                var phone=this.$refs.phone.value,
                    code=this.$refs.code.value,
                    password=this.$refs.password.value,
                    againpassword=this.$refs.again.value
                    if(phone.length!=11){
                        this.unbind=true
                        this.text='请输入正确的手机号码'
                    }else if(!code){
                        this.unbind=true
                        this.text='请输入验证码'
                    }else if(password.length<6){
                        this.unbind=true
                         this.text='请输入6位以上的密码'
                    }else if(password!=againpassword){
                        this.unbind=true
                        this.text='两次密码不正确'
                    }else{
                        var MAC=$.md5('0700'+phone+'190930'+$.md5(password)+code+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                        this.$http.get('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',{
                            params:{
                                '0':'0700',
                                '1':phone,
                                '3':'190930',
                                '9':$.md5(password),
                                '52':code,
                                '59':this.version,
                                '64':MAC
                            }
                        }).then(function(res){
                            var xy=res.data['39']
                            if(xy=='00'){
                                this.contents='修改成功'
                                $('.consoles').show()  
                                setTimeout(function(){
                                $('.consoles').hide()
                              _vm.$router.push('/')},1000)
                            }
                        })
                    }         
            }
        }
    }
</script>
<style scoped="scoped">
.logos{
    margin-top: 3.2rem;
}
.logos img{
    margin:0 auto;
    height: 1.866667rem;
    width: 1.866667rem;
    border-radius: 50%;
}

.dl{
    margin-top: 1.333333rem;
}

.dlinput .confirm{
    width: 100%;
    padding: .213333rem;
    background: #7caffd;
    border: none;
    font-size: .48rem;
    color: white;
}
.dl .dlinput{
    padding: .533333rem 0 .266667rem 0;
    margin:0 1.6rem;
    
}
.dl .borderbottom{
    border-bottom: 1px solid #999;
    position: relative;
}
.dl p{
    text-align: center;
}
.dl h3{
    text-align: center;
    font-size: .426667rem;
    margin-top: .4rem;
}
.dl .dlinput input{
    font-size: .533333rem;
    width: 5.333333rem;
    border: none;
    background: none;
}
.dlinput .forget{
    display: flex;
    justify-content: center;
    font-size: .426667rem;
}
.dlinput .forget span{
    padding:0 .266667rem;
    line-height: .4rem;
}
.dlinput .code{
    position: absolute;
    font-size: .48rem;
    width: 2.666667rem;
    border: none;
    color: white;
    background: #7caafd;
    right: 0;
    padding: 0 .133333rem;
}
.dlinput .forget span:nth-child(1){
    border-right: 1px solid #999;
}
.ivu-icon{
    font-size: .666667rem;
}
</style>
