<template>
    <div>
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>等级升级</span>
            <span></span>
        </div>
        <ul>
            <li>
                <p>等级</p>
                <p>无卡汇率</p>
                <p>养卡汇率</p>
                <p>升级选择</p>
            </li>
            <li v-for="(item,index) in rate"  :key="index">
                <p>{{index | grade}}</p>
                <p>{{item.split('|')[0]}}</p>
                <p>{{item.split('|')[1]}}</p>
                <p>
                    <input type="radio" v-if="index<4"  :value="index" name="index" disabled="disabled">
                    <input type="radio" v-else-if="level==4&&index==4" v-model="clientLevel" :value="index" name="index" disabled="disabled">
                    <!-- <input type="radio" v-else-if="level!=4" v-model="clientLevel" :value="index" name="index"> -->
                    <input type="radio" v-else-if="clientLevel+1>index" v-model="client" :value="index" name="index">
                    <input type="radio" v-else-if="clientLevel+1<index" v-model="client" :value="index" name="index" disabled>
                </p>
            </li>
        </ul>
        <div class="button"><button class="gradebutton" @click="submit">提交</button></div>
        <div class="consoles" style="display:none;">
            <div>
                {{text}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
              version:'',
              text:'',
              rate:'',
              level:'',
              clientLevel:'',
              client:'',
              clientMerchantidNo:'',
              version:'',
            }
        },
        mounted() {
            this.clientLevel=this.$route.params.level
            this.client=this.$route.params.level
            this.clientMerchantidNo=this.$route.params.merchantidNo
            //  console.log(this.$route.params)
            this.version=this.$store.state.version
            // console.log(this.$route)
            this.level=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].level
            this.version=this.$store.state.version
            var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
            var MAC=$.md5('0700890006'+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {
                  '0':'0700',
                  '3':'890006',
                  '42':merchantidNo,
                  '59':this.version,
                  '64':MAC
                },{
                    emulateJSON:true
                }).then(function(res){
                    if(res.data['39']=='00'){
                        this.rate=JSON.parse(res.data['5'])
                        // console.log(JSON.parse(res.data['5']))
                    }else{
                        this.text=res.data['39']
                        $('.consoles').show()  
                        setTimeout(function(){
                        $('.consoles').hide()},1000)
                    }
                })
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            submit(){
                var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
                var MAC=$.md5('0700890007'+merchantidNo+this.clientMerchantidNo+this.client+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                this.$http.post(
                    'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                    {
                      '0':'0700',
                      '3':'890007',
                      '42':merchantidNo,
                      '43':this.clientMerchantidNo,
                      '45':this.client,
                      '59':this.version,
                      '64':MAC
                    },{
                        emulateJSON:true
                    }).then(function(res){
                          $('.gradebutton').attr('disabled','disabled')
                        if(res.data['39']=='00'){
                            this.text='等级升级成功'
                            $('.consoles').show()  
                            setTimeout(function(){
                            $('.consoles').hide()
                            window.history.go(-1)
                            },1500)
                        }else{
                        $('.gradebutton').attr('disabled',false)
                            this.text=res.data['39']
                            $('.consoles').show()  
                            setTimeout(function(){
                            $('.consoles').hide()
                            },1500)
                        }
                    })
            }
        },
        filters:{
             grade(event){
                var grade=''
              if(event){
                  switch(event){
                    case '7':
                     grade='普通用户'
                     break;
                     case '6':
                     grade='黄金会员'
                     break;
                     case '5':
                     grade='钻石会员'
                     break;
                     case '4':
                     grade='经   纪   人'
                     break;
                     case '3':
                     grade='区级代理'
                     break;
                     case '2':
                     grade='市级代理'
                     break;
                     case '1':
                     grade='省级代理'
                     break;
                  }
              }
              return grade
            }
        }
    }
</script>
<style scoped="scoped">
  ul{
      padding: .266667rem;
  }
  ul li{
      display: flex;
      justify-content: space-between;
      text-align: center;
      border-bottom: 1px solid #666;
      padding: .133333rem 0;
  }
  ul li p{
      width: 2.133333rem;
  }
  .button{
    margin: .266667rem;
  }
  .button button{
      width: 100%;
      height: 1.066667rem;
      background: #2472c8;
      border: none;
      font-size: .426667rem;
      color: white;
      font-weight: 600;
  }
</style>
