<template>
    <div id="carddata">
        <div class="title">
           <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>提交申请资料</span>
            <span></span>
        </div>
        <div class="complain-name">
            <span>姓&#x3000;名 <span style="color:red;">*</span>:</span>
            <input type="text" v-model="name" placeholder="请输入您的姓名">
        </div>
        <div class="complain-name">
            <span>身份证 <span style="color:red;">*</span>:</span>
            <input type="text" v-model="idcard" placeholder="请输入您的身份证">
        </div>
         <div class="complain-name">
            <span>手机号 <span style="color:red;">*</span>:</span>
            <input type="text" v-model="phone" placeholder="请输入您的手机号">
        </div>
        <div class="button">
            <button @click="submit">提交</button>
        </div>

        <!-- 弹出 -->
         <!-- <el-dialog
            :visible.sync="unbind"
            width="90%"
            top="30vh"
            >
            <span>{{text}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="unbind = false">取 消</el-button>
                <el-button type="primary" @click="unbind = false">确 定</el-button>
            </span>
        </el-dialog> -->
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
               bankid:'',
               name:"",
               idcard:'',
               phone:'',
               version:'',
               num:'',
               unbind:false,
               text:''
            //    text:'',
             }
         },
         mounted(){
            this.$store.commit('shownav',false)
            
         this.bankid=JSON.parse(sessionStorage.getItem('mybankinfo')).id
         this.num=JSON.parse(sessionStorage.getItem('mybankinfo')).num
         this.version=this.$store.state.version
         },
         methods:{
             backed(){
                 window.history.go(-1)
             },
             submit(){
                 if(!this.name){
                    
                 }
                var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
                var MAC=$.md5('0700'+this.phone+'590002'+this.name+this.num+this.bankid+this.idcard+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                 {    
                    '0':'0700',
                    '1':this.phone,
                    '3':'590002',
                    '5':this.name,
                    '6':this.num,
                    '8':this.bankid,
                    '11':this.idcard,
                    '42':merchantidNo,
                    '59':this.version,
                    '64':MAC
                  },
                  {
                emulateJSON:true
                }).then(function(res){
                    if(res.data['39']=='00'){
                      location.href=res.data['31']
                    }else{
                       this.unbind=true
                       this.text=res.data['39']
                    }
                    
                })
             }
         }
     }
</script>
<style>
    #carddata{
        height: 100%;
        background: white;
    }
  .complain-name{
      margin:0 .4rem;
      padding: .4rem 0;
      border-bottom: 1px solid #efefef;
      font-size: .426667rem;
      font-weight: 600;
  }
  .complain-name input{
      color:#666;
      font-size: .426667rem;
      border: none;
      margin-left: .4rem;
  }
    .button{
        width: 100%;
        margin-top: .4rem;
        
        text-align: center;
    }
        .button button{
        background: #099eeb;
        color: white;
        border: none;
        width: 7.68rem;
        height: 1.2rem;
        font-size: .426667rem;
        border-radius: 1.2rem;
    }
</style>
