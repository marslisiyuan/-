<template>
  <div>
        <!-- 信息查询title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>通道说明</span>
            <span></span>
        </div>

        <!-- 收款说明图片 -->
        <div v-if="acqcode.acqcode!='8062'" class="scimg">
            <div><img :src='acqcode.acqcode | img()' alt=""></div>
           <!-- <img src="../../assets/a8046.png" alt=""> -->
        </div>
         <ul v-if="acqcode.isld=='1'" class="explain">
            <li>
              <p>银联落地需选择商户</p>
           </li>
           <li>
               <select v-model="provinceid" @change="provinces($event)">
                   <option value="">请选择省</option>
                   <option v-for="(item,index) in province" :key="index" :value="item.id">{{item.divisionName}}</option>
               </select>
               <select @change="industry($event)">
                   <option value="">请选择市</option>
                   <option v-if="city" v-for="(item,index) in city" :key="index" :value="item.id">{{item.divisionName}}</option>
               </select>
                <select  v-model="commercials">
                   <option value="">请选择商户</option>
                   <option v-for="(item,index) in commercial" :key="index" :value="item.acqMerchantNo">{{item.acqMerchantName}}</option>
               </select>
           </li>
         
           <!-- <li></li>  -->
         </ul>
         <div v-if="acqcode.number=='1'" class="ght">
             <input type="text" v-model="code" placeholder="输入验证码">
             <button @click="sendCode($event)">发送验证码</button>
         </div>
       <!-- 开始收款按钮 -->
       <div class="scbutton"><button @click="collection($event)">开始收款</button></div>

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
                订单提交成功
            </div>
        </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
              money:'',
              bank:'',
              acqcode:'',
              version:'',
              text:'',
              unbind:false,
              province:'',
              provinceid:'',
              city:'',
              commercial:'',
              commercials:'',
              phone:'',
              code:'',
              merchantNo:'',
              isld:"",
            }
        },
        mounted(){
            this.version=this.$store.state.version
           this.$store.commit('shownav',false)
           this.money=sessionStorage.getItem('money')
           this.bank=JSON.parse(sessionStorage.getItem('bank'))
           this.acqcode=JSON.parse(sessionStorage.getItem('acqcode'))
           console.log(this.acqcode.isld)
           this.phone=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].linkPhone
           this.merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
           var _vm=this
           var MAC=$.md5('07004900140'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
           this.$http.post(
               'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
               {
                   '0':'0700',
                   '3':'490014',
                   '41':'0',
                   '59':this.version,
                   '64':MAC
               },{
                   emulateJSON:true,
               }).then(function(res){
                   _vm.province=JSON.parse(res.data['38'])
                   
               })
        },
        methods:{
            backed(){
                 window.history.go(-1)
            },
            // 获取市
            provinces(event){
                var _vm=this
                var id=$(event.currentTarget).val()
                if(id){
                    var MAC=$.md5('0700490014'+id+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                this.$http.post(
                    'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                    {
                        '0':'0700',
                        '3':'490014',
                        '41':id,
                        '59':this.version,
                        '64':MAC
                    },{
                      emulateJSON:true
                    }).then(function(res){
                        _vm.city=JSON.parse(res.data['38'])
                    })
                }
            },
            industry(event){
                var id=$(event.currentTarget).val()
                if(id){
                    var MAC=$.md5('0700490013'+this.bank.bankid+this.provinceid+id+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                    this.$http.post(
                    'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                    {
                        '0':'0700',
                        '3':'490013',
                        '30':this.bank.bankid,
                        '31':this.provinceid,
                        '32':id,
                        '59':this.version,
                        '64':MAC,
                    },{
                        emulateJSON:true
                    }).then(function(res){
                        this.commercial=JSON.parse(res.data['38'])
                    })
                }
            },
            sendCode(event){
                var events=$(event.currentTarget)

                var MAC=$.md5('0700'+this.phone+'true'+'190919'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                var url='http://hangzhou.llyzf.cn/lly-posp-proxy/request.app'
                   this.$http.get(url,{
                       params:{'0':'0700','1':this.phone,'2':'true','3':'190919','59':this.version,'64':MAC}}).then(function(res){
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
            },
            collection(event){
                // console.log(this.commercials)
                $(event.currentTarget).attr('disabled',true)  
                var events=$(event.currentTarget)                         
                var curCount = 60  
                function SetRemainTime() {
                    if (curCount == 0) {
                        clearInterval(interValObj); //停止计时器
                        events.attr("disabled",false).text("开始收款");
                    } else {
                        curCount--;
                        events.attr("disabled",true).text("剩余" + curCount + "秒");
                    }
                }
                var interValObj = setInterval(SetRemainTime, 1000);
                if(this.acqcode.number=='1'){
                    this.tijiao()
                }else{
                     var _vm=this
                    var MAC=$.md5('0700190959'+this.money*100+this.commercials+this.bank.bankAccount+this.merchantNo
                    +this.acqcode.acqcode+this.acqcode.rate+this.bank.cvn+this.bank.expdate+this.acqcode.remark+this.code+this.phone+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                this.$http.post(
                    'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                    {    
                        '0':'0700',
                        '3':'190959',
                        '5':this.money*100,
                        '40':this.commercials,
                        '41':this.bank.bankAccount,
                        '42':this.merchantNo,
                        '43':this.acqcode.acqcode,
                        '44':this.acqcode.rate,
                        '45':this.bank.cvn,
                        '46':this.bank.expdate,
                        '47':this.acqcode.remark,
                        '52':this.code,
                        '53':this.phone,
                        '59':this.version,
                        '64':MAC
                    },
                    {
                    emulateJSON:true
                    }).then(function(res){
                        if(res.data['39']=='00'){
                            if(res.data['30'].length>4){
                            location.href=res.data['30']
                            }else{
                            $('.consoles').show()
                                setTimeout(function(){
                                    $('.consoles').hide()
                                    _vm.$router.push('/index')
                                },1000)
                            }    
                        }else{
                            this.unbind=true
                            this.text=res.data['39']
                        }
                    })
                }
          },
          tijiao(){
              if(!this.code){
                  this.unbind=true
                  this.text='请输入验证码'
              }if(!this.commercials){
                  this.unbind=true
                  this.text='请选择落地商户'
              }else{
                var _vm=this
                var MAC=$.md5('0700190961'+this.money*100+this.commercials+this.bank.bankAccount+this.merchantNo
                +this.acqcode.acqcode+this.acqcode.rate+this.bank.cvn+this.bank.expdate+this.acqcode.remark+this.code+this.phone+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
               this.$http.post(
                   'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                   {    
                    '0':'0700',
                    '3':'190961',
                    '5':this.money*100,
                    '40':this.commercials,
                    '41':this.bank.bankAccount,
                    '42':this.merchantNo,
                    '43':this.acqcode.acqcode,
                    '44':this.acqcode.rate,
                    '45':this.bank.cvn,
                    '46':this.bank.expdate,
                    '47':this.acqcode.remark,
                    '52':this.code,
                    '53':this.phone,
                    '59':this.version,
                    '64':MAC
                },
                {
                emulateJSON:true
                }).then(function(res){
                    if(res.data['39']=='00'){
                        if(res.data['30'].length>4){
                          location.href=res.data['30']
                        }else{
                           $('.consoles').show()
                            setTimeout(function(){
                                $('.consoles').hide()
                                _vm.$router.push('/index')
                            },1000)
                        }    
                    }else{
                        this.unbind=true
                        this.text=res.data['39']
                    }
                })
              }
              
          }
        },
        filters:{
             img(event){
                     if(event){
                        
                    //      function getBase64Image(img) {
                    //     var canvas = document.createElement("canvas");
                    //     canvas.width = img.width;
                    //     canvas.height = img.height;
                    //     var ctx = canvas.getContext("2d");
                    //     ctx.drawImage(img, 0, 0, img.width, img.height);
                    //     var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
                    //             var dataURL = canvas.toDataURL("image/"+ext);
                    //     return dataURL;
                    //  }
                    //   var img= require('@/assets/pic/bank/xhdip/'+bank[i].bankpic+'.png')
                    //  var image = new Image();
                    //   image.src = img;
                    //   console.log(image)
                    //         var base64 = getBase64Image(image);
                    //         console.log(base64);
                    //  return  require('@/assets/a'+event+'.png')
                    }
                    
            }
        }
    }
</script>
<style scoped="scoped">
        html{
            background: white;
        }
       .scimg{
           margin-top: 1.2rem;
           /* height: 9.333333rem; */
           width: 100%;
       }
       .scimg div{
        width: 100%;
       }
       .scimg img{
           width: 100%;
       }
       .scbutton{
           text-align: center;
           margin-top: .533333rem;
       }
       .scbutton button{
           width: 6.666667rem;
           border-radius: .266667rem;
           font-size: .666667rem;
           color: white;
           height: 1.333333rem;
           background: #505050;
           border: none;
       }
       .explain{
           padding-top:1.6rem; 
       }
       .explain li{
           padding: .266667rem;
           border-bottom: 1px solid #666;
           display: flex;
           justify-content: space-between;
       }
       .explain li p{
           font-size: .48rem;
           flex-grow: 1;
           text-align: center;
           color: red;
       }
       .explain li select{
           margin: 0 .133333rem;
           width: 2.933333rem;
       }
       .ght{
           margin-top:.266667rem;
           display: flex;
           justify-content: center;
       }
</style>

