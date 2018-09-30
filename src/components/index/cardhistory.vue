<template>
    <div
    id="cardhistory"
    v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%">
        <div class="title">
          <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>申请记录</span>
            <span></span>
        </div>
        <ul>
            <li id="tablename" style="border:none;"></li>
            <li ><span>手机号码</span><span>申请时间</span><span>申请状态</span></li>
            <li v-for="(item,index) in bank" :key='index'>
                <span>{{item.mobile}}</span>
                <span>{{item.createTime.time | formdate}}</span>
                <span >{{item.status=='10A'?'申请中':'申请成功'}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
              num:'',
              version:'',
              bank:[],
              loading2:true,
            }
        },
        mounted(){
           this.num=this.$route.params.nums
           this.version=this.$store.state.version
           var _vm=this
            var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
            var MAC=$.md5('0700590003'+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {    
                      '0':'0700',
                      '3':'590003',
                      '42':merchantidNo,
                      '59':this.version,
                      '64':MAC
                  },
                  {
                emulateJSON:true
                }).then(function(res){
                    if(_vm.num==1){
                    _vm.bank = JSON
                        .parse(res.data['31'])
                    }else{
                    _vm.bank = JSON
                        .parse(res.data['57'])
                    }
                //   console.log(JSON.parse(res.data['31']))
                  this.loading2=false
                })
        },
        methods:{
          backed(){
              window.history.go(-1)
          }
        },
        filters:{
            formdate(event){
            if(event){
            var date = new Date(event),
            Y = date.getFullYear() + '-',
            // console.log(Y)
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
            D = date.getDate() + ' ',
            h = date.getHours() + ':',
            m = date.getMinutes() + ':',
            s = date.getSeconds()
            return Y+M+D+h+m+s
            }
          },
        }
    }
</script>
<style scoped="scoped">
#cardhistory{
    height: 100%;
}
  ul{
       margin: .533333rem;
       padding: 0;
       list-style: none;
       border: 1px solid #666;
   }
   ul li{
       display: flex;
       justify-content: space-between;
       text-align: center;
       padding: .133333rem;
       border-top: 1px solid #666;
   }
</style>

