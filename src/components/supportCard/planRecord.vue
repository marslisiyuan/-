<template>
  <div>
        <!-- 预览详细计划title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>预览详细计划</span>
            <span></span>
        </div>
        <!-- 计划编号 -->
        <div class="planNumber">
           <h3>计划单号:{{Order['11']}}</h3>
           <div class="plandate">还款周期:{{next.startDate}}至{{next.endDate}}</div>
           <div class="planmoney"> 
               <div>
                    <p>预还款金额</p>
                    <p>{{Order['8']}}</p>
               </div>
               <div>
                    <p>预留金额</p>
                    <p class="borderleft">{{Math.ceil(parseFloat(Order['40'])+parseFloat(Order['41']))}}</p>
               </div>
           </div>
        </div>
        <!-- 消费还款详细记录 -->
        <ul class="planRecord">
            <li v-for="(item,index) in Orderplan" :key="index" :data='index'>
                <div>
                    <span>{{item.time}}</span>
                    <span>{{(item.type=='sale')?'消费':'还款'}}</span>
                    <span class="planRecordMoney">{{item.money}}</span>
                </div>
                <div  v-if="item.type=='sale' && next.city">
                     <span>请选择商户:</span>
                     <select class="selects" @change="select($event)">
                         <!-- <option v-for="(item,index) in commercial" :key="index" v-if="index==1" :value="item.id" checked>{{item.acqMerchantName}}</option> -->
                         <option v-for="(item,index) in commercial" :key="index" :value="item.acqMerchantNo+','+item.acqMerchantName">{{item.acqMerchantName}}</option>
                         <!-- <option value=""></option> -->
                     </select>
                </div>
            </li>
             <!-- <li>
                <span>2018-05-16 10:46:24</span>
                <span>消费</span>
                <span>196.46</span>
            </li> -->
        </ul>
        <div class="button">
            <button class="random" @click="suiji($event)">
                随机商户
            </button>
        </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
              Order:'',
              Orderplan:'',
              next:'',
              version:'',
              floor:'',
              commercial:'',
              smallPlan:'',
              url:'',
              bankInfo:''
            }
        },
        mounted(){
          this.url=this.$store.state.url      
          this.$store.commit("shownav",false)
         
          this.Order=JSON.parse(sessionStorage.getItem('plan'))
          this.Orderplan=$.parseJSON(JSON.parse(sessionStorage.getItem('plan'))['57'])
          this.next=JSON.parse(sessionStorage.getItem('next'))
          this.bankInfo=JSON.parse(sessionStorage.getItem('bank'))
          this.version=this.$store.state.version
          var bank=JSON.parse(sessionStorage.getItem('plan'))['12']
          if(this.next.city){
              
          var MAC=$.md5('0700490013'+bank+this.next.city+sessionStorage.getItem('acqcode')+this.bankInfo.bankAccount+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
          this.$http.post(
              this.url,
              {
                  '0':'0700',
                  '3':'490013',
                  '30':bank,
                  '32':this.next.city,
                  '33':sessionStorage.getItem('acqcode'),
                  '34':this.bankInfo.bankAccount,
                  '59':this.version,
                  '64':MAC
              },{
                emulateJSON:true
              }).then(function(res){
                  this.commercial=JSON.parse(res.data['38'])
                  
                var jsonArray=$.parseJSON(JSON.parse(sessionStorage.getItem('plan'))['57'])
                var arr=[]
                
                    for(var i=0;i<jsonArray.length;i++){
                        var obj={}
                        for(var tmp in jsonArray[i]){
                            if(tmp=='status'){
                            obj.status=jsonArray[i][tmp]
                            }else if(tmp=='type'){
                            obj.type=jsonArray[i][tmp]
                            }else if(tmp=='bindID'){
                                obj.toBindId=jsonArray[i][tmp] 
                                obj.fromBindId=jsonArray[i][tmp] 
                            }else if(tmp=='money'){
                                obj.toMoney=jsonArray[i][tmp] 
                                obj.fromMoney=jsonArray[i][tmp] 
                            }else if(tmp=='time'){
                                obj.planTime=new Date(jsonArray[i][tmp].replace(/-/g,'/')).getTime()
                            }else if(tmp=='groupNum'){
                                obj.groupNum=jsonArray[i][tmp]
                                obj.cityindustry=JSON.parse(res.data['38'])[0].acqMerchantNo
                                obj.customizecity=this.next.provincedname+'-'+this.next.cityname+'-'+JSON.parse(res.data['38'])[0].acqMerchantName
                            }
                        }
                        arr.push(obj)
                    }
                     this.smallPlan=arr
                     sessionStorage.setItem('smallPlan',JSON.stringify(arr))
              })
          }else{
                var jsonArray=$.parseJSON(JSON.parse(sessionStorage.getItem('plan'))['57'])
                var arr=[]
                    for(var i=0;i<jsonArray.length;i++){
                        var obj={}
                        for(var tmp in jsonArray[i]){
                            if(tmp=='status'){
                            obj.status=jsonArray[i][tmp]
                            }else if(tmp=='type'){
                            obj.type=jsonArray[i][tmp]
                            }else if(tmp=='bindID'){
                                obj.toBindId=jsonArray[i][tmp] 
                                obj.fromBindId=jsonArray[i][tmp] 
                            }else if(tmp=='money'){
                                obj.toMoney=jsonArray[i][tmp] 
                                obj.fromMoney=jsonArray[i][tmp] 
                            }else if(tmp=='time'){
                                obj.planTime=new Date(jsonArray[i][tmp].replace(/-/g,'/')).getTime()
                            }else if(tmp=='groupNum'){
                                obj.groupNum=jsonArray[i][tmp]
                            }
                        }
                        arr.push(obj)
                    }
                     this.smallPlan=arr
                     sessionStorage.setItem('smallPlan',JSON.stringify(arr))
          }       
          
        },
        methods:{
          backed(){
              
              window.history.go(-1)
          },
          select(event){
              var index=$(event.currentTarget).parents('li').attr('data')
              var value=$(event.currentTarget).val().split(',')
              this.smallPlan[index].cityindustry=value[0]
              this.smallPlan[index].customizecity=value[1]
              sessionStorage.setItem('smallPlan',JSON.stringify(this.smallPlan))
          },
          suiji(event){
              var size=this.commercial.length
              $(event.currentTarget).attr('disabled','disabled')
              var _vm=this
              $('.selects').map(function(index,item){
                  var random=Math.floor(Math.random()*size)
                  $(this).get(0).selectedIndex=random
                  console.log($(this).val())
                  var value=$(this).val().split(',')
                        _vm.smallPlan[index*2].cityindustry=value[0]
                        _vm.smallPlan[index*2].customizecity=_vm.next.provincedname+'-'+_vm.next.cityname+'-'+value[1]
                        sessionStorage.setItem('smallPlan',JSON.stringify(_vm.smallPlan))
                  console.log(_vm.smallPlan)
              })
               $(event.currentTarget).removeAttr("disabled");
            //    window.history.go(-1)
          }
        }
    }
</script>
<style scoped="scoped">
      .planNumber{
            margin:1.6rem 1.066667rem  .533333rem 1.066667rem;
            background: #d1d1d1;
            text-align: center;
            border-radius: .133333rem;
            color: black;
            padding-bottom: .133333rem;
        }
        .planNumber h3{
            padding: .186667rem;
            background: #1aa1c9;
            color: white;
            font-size: .48rem;
            border-radius: .133333rem;
        }
        .planNumber .plandate{
            font-size: .346667rem;
            padding: .133333rem 0;
        }
        .planNumber .planmoney{
            display: flex;
            justify-content: center;
        }
        .planNumber .planmoney>div{
            flex-grow: 1;
        }
        .planNumber .planmoney>div p:nth-child(1){
            padding:.133333rem; 
        }
        .planNumber .planmoney>div p:nth-child(2){
            padding: .266667rem;
        }
        .planNumber .planmoney .borderleft{
            border-left: 1px solid #999;
        }
        .planRecord{
            margin: .533333rem 10px;
            background: #d1d1d1;
            color:black;
            height: 11.466667rem;
            overflow: auto;
        }
        .planRecord li{
             border-bottom: 1px solid #999;
        }
        .planRecord li>div{
            padding: .133333rem .266667rem;
            display: flex;
            justify-content: space-between;
           
        }
        .planRecordMoney{
            width: 2.133333rem;
            text-align: right;
        }
        .button{
            text-align: center;
        }
        .random{
            width: 9.066667rem;
            height: 1.066667rem;
            color: #fff;
            font-size: .426667rem;
            border: none;
            margin-bottom: .533333rem;
            background: #2472c8;
        }
</style>
