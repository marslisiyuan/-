<template>
  <div>
      <!-- 注册title -->
        <div class="title titlefixed">
           <div @click="backed"><img src="../assets/left.png" alt=""></div>
           <span>注册</span>
           <span></span>
       </div>
       <!-- 注册内容 -->
       <div class="form-group">
          <div><input type="tel" placeholder="注册手机号" ref="phone"></div>
          <div><input type="text" placeholder="请输入验证码"  ref="Code"><button class="timeremain" @click="code($event)">获取验证码</button></div>
          <div><input type="password" placeholder="请输入6-14位密码" ref="password"></div>
          <div><input type="password" placeholder="请再次输入" ref="again"></div>
           <div class="form-flex">
               <select @change="provinces($event)">
                   <option value="">请选择省</option>
                   <option v-for="(item,index) in province" :key="index" :value="item.id">{{item.divisionName}}</option>
               </select>
               <select @change="citys($event)">
                   <option value="">请选择市</option>
                   <option v-for="(item,index) in city" :key="index" :value="item.id">{{item.divisionName}}</option>
               </select>
               <select name="" id="" v-model="areaCode">
                   <option value="">请选择区</option>
                   <option v-for="(item,index) in area" :key="index" :value="item.id">{{item.divisionName}}</option>
               </select>
           </div>
          <div><input type="text" placeholder="请输入推荐人手机号" ref="recommend"></div>
       </div>
       <!-- 注册与协议 -->
       <div class="zcbutton">
           <div class="agreement">
                <input  type="checkbox" id="radio" value="true" checked/>
                <p>阅读并接受<a>《用户使用协议》</a></p>
           </div>
           <div>
               <button @click="registers">注册</button>
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
              province:[],
              city:[],
              area:[],
              areaCode:'',
              version:'',
              unbind:false,
              text:'',
              contents:'',
            }
        },
        mounted(){
            var _vm=this
            this.$store.commit("shownav",false)
            this.version=this.$store.state.version
            // 获取省
            this.$http.get('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',{
                params:{
                        '0':'0700',
                        '3':'290011',
                        '8':'0',
                        '59':this.version,
                        '64':$.md5('07002900110'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D'),
                         }
            }).then(function(res){
                _vm.province=JSON.parse(res.data['57'])
            })
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            registers(){
                var url='http://hangzhou.llyzf.cn/lly-posp-proxy/request.app'
                var phone=this.$refs.phone.value,
                    code=this.$refs.Code.value,
                    password=this.$refs.password.value,
                    againpassword=this.$refs.again.value,
                    recommend=this.$refs.recommend.value,
                    _vm=this
                    // console.log(this.areaCode)
                if(!$('#radio').is(":checked")){
                    this.unbind=true
                   this.text='请勾选“阅读并接受用户协议”'
                }else{
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
                    }else if(!this.areaCode){
                        this.unbind=true
                        this.text='请选择区域'
                    }else{
                        password=$.md5(password)
                        var MAC=$.md5('0700'+phone+_vm.areaCode+'190918'+password+'2800004'+recommend+code+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D').toUpperCase()
                        this.$http.get(url,{
                         params:{
                             '0':'0700',
                             '1':phone,
                             '2':_vm.areaCode,
                             '3':'190918',
                             '8':password,
                             '52':code,
                             '44':'2800004',
                             '45':recommend,
                             '59':this.version,
                             '64':MAC,
                         }
                        }).then(function(res){
                            // console.log(res.data)
                            var code=res.data['39']
                              if(code=="00"){
                                this.contents='注册成功'
                                $('.consoles').show()  
                                setTimeout(function(){
                                $('.consoles').hide()  
                              _vm.$router.push('/')},1000)
                            }else if(code=="ZC"){
                                _vm.unbind=true
                                _vm.text="验证码错误"
                            }else if(code=="ZD"){
                                _vm.unbind=true
                                _vm.text="手机号码重复注册，请直接登陆"
                                //  _vm.$router.push('/')
                            }else if(code=="ZZ0"){
                                _vm.unbind=true
                               _vm.text="版本号不对"
                            }else if(code=="ZZ31"){
                                _vm.unbind=true
                                _vm.text="推荐人不存在"
                            }else{
                                _vm.unbind=true
                                _vm.text="注册失败"
                            }
                            
                        })
                    }
                }
            },
            // 短息验证
            code(event){
                if(this.$refs.phone.value.length==11){
                    $(event.currentTarget).attr('disabled',true)
                     var events=$(event.currentTarget)
                     var phone=this.$refs.phone.value
                     var MAC=$.md5('0700'+phone+'190919'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D').toUpperCase()
                    //  console.log(MAC)
                    //  var data = {}
                    var url='http://hangzhou.llyzf.cn/lly-posp-proxy/request.app'
                   this.$http.get(url,{
                       params:{'0':'0700','1':phone,'3':'190919','59':this.version,'64':MAC}}).then(function(res){
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
            // 获取市
            provinces(event){
                var id=$(event.currentTarget).val()
                var url='http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                MAC=$.md5('0700290011'+id+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D'),
                _vm=this
                if(id){
                    this.$http.get(url,{
                        params:{'0':"0700","3":"290011","8":id,"59":this.version,"64":MAC}
                    }).then(function(res){
                       _vm.city=JSON.parse(res.data['57'])
                    })
                }
            },
            // 获取区
            citys(event){
                var id=$(event.currentTarget).val()
                var url='http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                MAC=$.md5('0700290011'+id+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D'),
                _vm=this
                if(id){
                    this.$http.get(url,{
                        params:{'0':"0700","3":"290011","8":id,"59":this.version,"64":MAC}
                    }).then(function(res){
                        // console.log(res.data['57'])
                       _vm.area=JSON.parse(res.data['57'])
                    })
                }
            },
        }
    }
</script>
<style scoped="scoped">
      .form-group{
          margin-top: 1.733333rem;
      }
      .form-group div{
          padding:.4rem;
          margin:0  .4rem;
          border-bottom: 1px solid #999;
          position: relative;
      }
      .form-group div input{
          border: none;
          font-size: .533333rem;
          width: 100%;
          background: none;
      }
      .form-group .form-flex{
          display: flex;
          justify-content: space-between;
      }
      .form-group div select{
         padding: .133333rem;
         width: 31%;
      }
      .form-group div button{
          position: absolute;
          width: 4rem;
          right: 0rem;
          font-size: .533333rem;
          border: none;
          background: #7caffd;
          color: white;
          padding: .133333rem;
          top: .266667rem;
      }
      .zcbutton{
        margin:.533333rem  .4rem;
      }
      .zcbutton .agreement{
          display: flex;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
      }
      .zcbutton .agreement p{
          margin-left: .133333rem;
      }
      .zcbutton input{
          width: .4rem;
          height: .4rem;
      }
      .zcbutton button{
          width: 100%;
          margin-top: .533333rem;
          padding: .266667rem;
          background: #7caffd;
          font-size: .48rem;
          color: white;
          border: none;
      }
</style>
