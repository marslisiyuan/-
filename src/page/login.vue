<template>
         <div id="login">
             <!-- 登入logo -->
           <div class="logo">
              <img src="../assets/login/logo.png" alt="">
           </div>
           <!-- 登入密码 -->
           <div class="dl">
               <div class="dlinput borderbottom">
                    <i class="el-icon-mobile-phone"></i>
                    <input type="tel" v-model="phone" placeholder="请输入手机号">
               </div>
               <div class="dlinput borderbottom">
                    <!-- <Icon type="ios-locked"></Icon> -->
                    <i class="el-icon-goods"></i>
                    <input type="password" v-model="password" placeholder="请输入密码">
               </div>
               <!-- 登入按钮 -->
               <div class="dlinput">

                   <button class="confirm" @click="loginindex">登录</button>
               </div>
               <!--注册账户和忘记密码  -->
               <div class="dlinput">
                  <div class="forget">
                      <router-link tag="span" to="/register">注册账号</router-link>
                      <router-link tag="span" to="/retrieve">找回密码</router-link>
                  </div>
               </div>
               <!-- 版本信息 -->
                   <p>版本信息:1.4.3</p>
                   <!-- 客服热线 -->
                   <h3>客服热线:0571-82576627</h3>
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
          
          
       </div>
</template>
<script>
    export default {
        data(){
         return{
           phone:'',
           password:'',
           version:'',
           unbind:false,
           text:'',
         }
        },mounted(){
           this.$store.commit('shownav', false)
           this.version=this.$store.state.version
           if($.cookie('user')){
               this.$router.push('/index')
           }
        },
        methods:{
          loginindex(){
              var _vm=this
              var url='http://hangzhou.llyzf.cn/lly-posp-proxy/request.app'
              if(_vm.phone&&_vm.password){
                  var MAC=$.md5('0700'+_vm.phone+'190928'+$.md5(_vm.password)+'000001'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D').toUpperCase()
                  this.$http.get(url,{
                      params:{
                          '0':'0700',
                          '1':_vm.phone,
                          '3':'190928',
                          '8':$.md5(_vm.password),
                          '11':'000001',
                          "12":'',
                          '41':'',
                          '42':'',
                          '59':this.version,
                          '64':MAC
                      }
                  }).then(function(res){
                     var code=res.data['39']
                     if(code=='00'){
                        // _vm.$store.commit('storageInformation',res.data)
                        localStorage.setItem('info',JSON.stringify(res.data))
                        $.cookie('user',res.data['1'],{expires:7})
                        if($.cookie('user')){
                            _vm.$router.push('/index')
                        }
                     }else if(code=='55'){
                         _vm.unbind=true
                         _vm.text='账户或密码错误'
                     }
                    //  else if(code=='')
                   
                  })
              }
          
          }
        }
    }
</script>
<style scoped="scoped">
#login{
    height: 100%;
    background: url('../assets/login/bg@2x.png');
    background-size: 100%;
    /* background: white; */
}
.logo{
    padding-top: 4rem;
}
.logo img{
    margin:0 auto;
    height:2.4rem;
    width: 2.4rem;
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
    /* display: flex; */
}
.dl .borderbottom{
    border-bottom: 1px solid #999;
}
.dl p{
    text-align: center;
    margin-top: .533333rem;
}
.dl h3{
    text-align: center;
    font-size: .426667rem;
    margin-top: .4rem;
}
.dl .dlinput input{
    font-size: .533333rem;
    width: 4.533333rem;
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
.dlinput .forget span:nth-child(1){
    border-right: 1px solid #999;
}
.ivu-icon{
    font-size: .666667rem;
}
</style>
