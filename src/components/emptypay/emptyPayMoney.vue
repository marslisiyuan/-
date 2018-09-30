<template>
    <div id="codeImg">
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div><span>花呗回款</span>
            <span></span>
        </div>
        <div class="codeImg-2wm">
            <h2>使用花呗截图保存，打开支付宝<br>扫一扫，无线和wifi关闭</h2>
            <div class="logo">
                <div id="code">

                </div>
            </div>
            <p>请在10分钟内扫码支付</p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
               version:'',
               merchantNo:''
            }
        },
        mounted(){
           this.$store.commit('shownav',false)
           this.merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
           this.version=this.$store.state.version
           this.emptyone()
        },
        methods:{
            backed(){
               window.history.go(-1)
            },
            emptyone(){
                console.log('111')
                var MAC=$.md5('07009900003'+this.merchantNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                this.$http.post('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',{
                    '0':'0700',
                    '3':'9900003',
                    '42':this.merchantNo,
                    '59':this.version,
                    '64':MAC
                },{
                    emulateJSON:true
                }).then(function(res){
                  if(res.data['39']=='00'){
                      if(res.data['31']=='[]'){
                          this.open3()
                      }else{
                            $("#code").qrcode({     
                    render: "canvas",      
                    width: 180,
                    height:180,      
                    text:JSON.parse(res.data['31'])[0].url});
                      }
                    console.log(JSON.parse(res.data['31'])[0].url)
                    }
                    // if(res.data['39'])
                })
            },
            open3() {
                var _vm=this
            this.$prompt('店名', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                }).then(({ value }) => {
                  _vm.emptytwo(value)
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });       
            });
          },
          emptytwo(value){
             var MAC=$.md5('07009900002'+value+this.merchantNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                this.$http.post('http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',{
                    '0':'0700',
                    '3':'9900002',
                    '8':value,
                    '42':this.merchantNo,
                    '59':this.version,
                    '64':MAC
                },{
                    emulateJSON:true
                }).then(function(res){
                    if(res.data['39']=='00'){
                        this.emptyone()
                    }
                })
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
     font-size: .426667rem;
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
     font-size: .48rem;
 }
 #code {
    display: flex;
    align-items: center;
    justify-content: center;
 }
</style>
