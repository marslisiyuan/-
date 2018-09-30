<template>
  <div
  id="passageway"
     v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%">
        <!-- 选择无卡通道title -->
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>选择无卡通道</span>
            <span></span>
        </div>
        <div class="calculate">
            <h3>￥{{money}}</h3>
            <p >到账金额:{{(money-money*rate/100-remark).toFixed(2)}}</p>
        </div>
        <!-- 选择方式 -->
        <div style="font-size:.48rem;padding:.4rem;color:black;">
            <span>请选择通道</span>
        </div>
        <div v-for="(item,index) in channel" :key='index' class="wktop">
            <ul class="passageway-ul">
                <li @click="explain(index,item.rate,item.acqcode,item.remark,item.isld,item.number)">
                   <div class="content">
                       <h2><img src="../../assets/nav/ylpay.png" alt=""><span>{{item.channelName}}</span></h2>
                       <p><span>费率:{{item.rate}}</span><span>单笔额度：{{item.limit}}</span></p>
                       <p><span>{{item.remark}}</span></p>
                       <p><span>交易时间:{{item.T0date}}</span></p>
                   </div>
                   <div>
                      <input class="radio" type="radio" v-if="index=='0'" :value="index" checked name="state">
                       <input class="radio" type="radio" v-else :value="index"  name="state">
                   </div>
                </li>
            </ul>
         <!-- <table v-if="index=='0'" @click="explain(index,item.rate,item.acqcode)" class="tdtable on">
             <tr>
                 <td class="tdtable1 topleft" rowspan="2">{{item.channelName}}</td>
                 <td class="topright">单笔额度：{{item.limit}} 费率:{{item.rate}}</td>
             </tr>
             <tr>
                 <td>提现时间:{{item.T0date}}</td>
             </tr>
             <tr>
                 <td class="tdtable1 bottomleft">通道说明</td>
                 <td class="bottomright">{{item.remark}}</td>
             </tr>
         </table>
         <table v-else @click="explain(index,item.rate,item.acqcode)" class="tdtable">
             <tr>
                 <td class="tdtable1 topleft" rowspan="2">{{item.channelName}}</td>
                 <td class="topright">单笔额度：{{item.limit}} 费率:{{item.rate}}</td>
             </tr>
             <tr>
                 <td>提现时间:{{item.T0date}}</td>
             </tr>
             <tr>
                 <td class="tdtable1 bottomleft">通道说明</td>
                 <td class="bottomright">{{item.remark}}</td>
             </tr>
         </table> -->
        </div>
        <div class="button">
            <button @click="next">下一步</button>
        </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
              channel:'',
              version:'',
              loading2:false,
              money:'',
              num:0,
              rate:'',
              acqcode:'',
              remark:'',
              url:'',
              isld:'',
              number:""
            }
        },
        mounted(){
            this.version=this.$store.state.version
           this.$store.commit('shownav',false)
            this.money=sessionStorage.getItem('money')
            this.url=this.$store.state.url
        //    console.log(JSON.parse(localStorage.getItem('info')))
        //    var _vm=this
            var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
            var id=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].id
            var MAC=$.md5('0700390013'+merchantNo+'wk'+id+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post(this.url, 
                {    
                    '0':'0700',
                    '3':'390013',
                    '42':merchantNo,
                    '43':'wk',
                    '44':id,
                    '59':this.version,
                    '64':MAC
                },
            {
            emulateJSON:true
            }).then(function(res){
              this.channel=$.parseJSON(res.data['57']).acqData
              this.rate=$.parseJSON(res.data['57']).acqData[this.num].rate
              this.remark=$.parseJSON(res.data['57']).acqData[this.num].remark.split('：')[1].split('元')[0]
              this.acqcode=$.parseJSON(res.data['57']).acqData[this.num].acqcode
              this.isld=$.parseJSON(res.data['57']).acqData[this.num].isld
              this.number=$.parseJSON(res.data['57']).acqData[this.num].number
            //   this.loading2=false
            })
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            explain(index,rate,acqcode,remark,isld,number){
                this.num=index
                this.acqcode=acqcode
                this.remark=remark.split('：')[1].split('元')[0]
                this.rate=rate
                this.isld=isld
                this.number=number
                $('.radio').attr("checked",false).eq(index).attr('checked',true)
                // console.log(item)
            // this.$router.history.push('/emptypay/explain')
            // sessionStorage.setItem('acqcode',JSON.stringify({'acqcode':acqcode,'rate':rate}))
            },
            next(){
                console.log(this.remark)
                sessionStorage.setItem('acqcode',JSON.stringify({'acqcode':this.acqcode,'rate':this.rate,'remark':this.remark,'isld':this.isld,'number':this.number}))
                 this.$router.push('/emptypay/explain')
            }
        }
    }
</script>
<style scoped="scoped">
        #passageway{
            height: 100%;
            
        }
        .titlenextd{
           padding-top: 1.466667rem;
        }
        .wktop{
            margin-top: .266667rem;
        }
        .calculate{
           padding: .533333rem .8rem;
           background: #fff;
            
        }
         .calculate h3{
             font-size: .8rem;
         }
         .calculate p{
             font-size: .426667rem;
             text-align: right;
         }
         .wktop .on{
          border: 2px solid #2472c8;
         }
         .passageway-ul{
           margin: .4rem;
           background: #fff;
           line-height: .586667rem;
         }
         .passageway-ul li{
             padding: .266667rem;
             display: flex;
             justify-content: space-between;
             align-items: center;
         }
         .passageway-ul .content{
             flex-grow: 1;
         }
         .passageway-ul .content h2{
             display: flex;
             align-items: center;
             font-size: .426667rem;
             color: black;
             border-bottom: 1px solid black;
         }
         .passageway-ul .content h2 img{
           height: 1.066667rem;
           width:  1.066667rem;
         }
         .passageway-ul .content>P{
             display: flex;
             justify-content: space-between;
         }
        .passageway-ul .radio{
             width: .666667rem;
             height: .666667rem;
             font-size: .533333rem;
         }
         /* .passageway-ul{

         } */
       /* .tdtable{
           border-collapse: collapse;
           width: 95%;
           padding: .266667rem;
            border-radius: .4rem;
           overflow: hidden;
           color: white;
           margin: 0 auto;
           border-radius: .133333rem;
           
       }
       .tdtable td{
           height: 1.066667rem;
           padding:0 .266667rem;
           font-size: .426667rem;
          
           background: #b3b3b3;
           border:1px solid white;
       }
       .tdtable tr .tdtable1{
           width: 1.866667rem;
           text-align: center;
           background: #505050;
       } */
       .button{
           margin: .32rem 0;
           text-align: center;
       }
       .button button{
           width: 8rem;
           height: 1.066667rem;
           background: #2472c8;
           border-radius:1.066667rem; 
           border: none;
           color: #fff;
           font-size: .48rem;
       }
</style>
