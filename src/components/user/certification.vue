<template>
    <div>
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div><span>实名认证</span><span></span>
        </div>
        <!-- <div class="stepsm" >
            <el-steps :active="active" finish-status="success" align-center>
                <el-step title="资料信息"></el-step>
                <el-step title="证件审核"></el-step>
                <el-step title="审核完成"></el-step>
            </el-steps>
        </div> -->
        <div class="certificationText">
            请如实填写储蓄卡信息
        </div>
        <div class="cardinfo">
            <input type="text" placeholder="请输入姓名" ref="name">
            <input type="text" placeholder="请输入身份证号码" ref="idcard">
            <input type="text" placeholder="请输入您的储蓄卡号" ref="bankcard">
            <select ref="bank">
                <option value="">请选择银行名称</option>
                <option  v-for="(item,index) in bank" :key="index" :value="item.bankid">{{item.bankname}}</option>
                <!-- <option value="">北京银行</option>
                <option value="">光大银行</option>
                <option value="">广发银行</option>
                <option value="">建设银行</option>
                <option value="">交通银行</option>
                <option value="">民生银行</option>
                <option value="">农业银行</option>
                <option value="">平安银行</option>
                <option value="">浦发银行</option> -->
            </select>
        </div>
        <div class="cardbutton">
            <button @click="next">下一步</button>
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
        data() {
            return{
                 active:0,
                bank:[
                    {bankname:"北京银行",bankid:"313003"},
                    {bankname:"光大银行",bankid:"303"},
                    {bankname:"广发银行",bankid:"306"},
                    {bankname:"建设银行",bankid:"105"},
                    {bankname:"交通银行",bankid:"301"},
                    {bankname:"民生银行",bankid:"305"},
                    {bankname:"农业银行",bankid:"103"},
                    {bankname:"平安银行",bankid:"307"},
                    {bankname:"浦发银行",bankid:"310"},
                    {bankname:"邮政储蓄银行",bankid:"403"},
                    {bankname:"招商银行",bankid:"308"},
                    {bankname:"中国工商银行",bankid:"102"},
                    {bankname:"中国银行",bankid:"104"},
                    {bankname:"中信银行",bankid:"302"},
                    {bankname:"上海银行",bankid:"313062"},
                    {bankname:"杭州银行",bankid:"313027"},
                    {bankname:"北京农商银行",bankid:"402002"},
                    {bankname:"华夏银行",bankid:"304"},
                    {bankname:"兴业银行",bankid:"309"},
                    {bankname:"台州银行股份有限公司",bankid:"313066"},
                    {bankname:"浙江农村信用社联合社",bankid:"402015"},
                    {bankname:"浙江泰隆商业银行",bankid:"313080"},
                    {bankname:"浙江民泰商业银行",bankid:"313079"},
                    {bankname:"浙商银行",bankid:"316"},
                    {bankname:"河北银行",bankid:"313028"}
                ],
                version:'',
                unbind:false,
                text:'',
            }
        },
        mounted(){
            this.$store.commit("shownav",false)
            this.version=this.$store.state.version
        },
          methods: {
            next () {
                // if()
                //  console.log( JSON.parse(localStorage.getItem('info'))['1'])
                var name=this.$refs.name.value,
                    phone=JSON.parse(localStorage.getItem('info'))['1'],
                    idcard=this.$refs.idcard.value,
                    bankcard=this.$refs.bankcard.value,
                    bank=this.$refs.bank.value
                if(!name){
                    this.unbind=true
                    this.text='请填写姓名'
                }else if(!idcard){
                    this.unbind=true
                    this.text='请填写身份证号'
                }else if(!bankcard){
                    this.unbind=true
                    this.text='请填写银行卡号'
                }else if(!bank){
                    this.unbind=true
                    this.text='请选择银行卡'
                }else{
                    this.$store.commit('certificationInfo',{
                        'name':name,
                        'phone':phone,
                        'idcard':idcard,
                        'bankcard':bankcard,
                        'bank':bank
                    })
                    var url='http://hangzhou.llyzf.cn/lly-posp-proxy/request.app'
                    var _vm=this
                var  MAC=$.md5('0700'+phone+'190938'+name+idcard+bankcard+bank+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D').toUpperCase()
                    // var param=new FormData()
                    //     param.append('0','0700')
                    //     param.append('1',phone)
                    //     param.append('3','190938')
                    //     param.append('5',encodeURI(name))
                    //     param.append('6',idcard)
                    //     param.append('7',bankcard)
                    //     param.append('43',bank)
                    //     param.append('59',this.version)
                    //     param.append('64',MAC)
                this.$http.post(
                    'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app', 
                    {
                    '0':'0700',
                    '1':phone,
                    '3':'190938',
                    '5':name,
                    '6':idcard,
                    '7':bankcard,
                    '43':bank,
                    '59':this.version,
                    '64':MAC  
                    }
                    ,{
                    emulateJSON:true
                    }).then(function (res) {
                        // 成功回调
                        if(res.data['39']=='00'){
                          this.$router.push('/user/upload')
                        }else{
                           this.text=res.data['39']
                           this.unbind=true
                        }
                    }, function () {
                        // 失败回调
                    });
                }
                
                // if (this.active++ > 2) this.active = 0;
            },
            backed(){
                window.history.go(-1)
            },
            
        }
    }
</script>
<style scoped="scoped">
.stepsm{
background: white;
padding:.4rem;
}
.certificationText{
    text-align: center;
    margin-top: .533333rem;
    font-size: .533333rem;
    color: red;
}
.cardinfo{
    margin: .533333rem;
}
.cardinfo input{
    width: 100%;
    font-size: .426667rem;
    height:.933333rem;
    border: none;
    margin-bottom: .266667rem;
    padding: 0 .266667rem;
}
.cardinfo select{
    width: 100%;
    font-size: .426667rem;
    height:.933333rem;
    border: none;
    padding: 0 .266667rem;
    margin-bottom: .266667rem;
}
.cardbutton{
    margin:1.066667rem .533333rem;
}
.cardbutton button{
    width: 100%;
    background: #3399ff;
    color: white;
    border: none;
    height: 1.066667rem;
    font-size: .426667rem;
    border-radius: .133333rem;
}
</style>
