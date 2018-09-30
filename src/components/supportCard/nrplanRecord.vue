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
                    <p>还款手续费</p>
                    <p class="borderleft">{{Order['41']}}</p>
               </div>
           </div>
        </div>
        <!-- 消费还款详细记录 -->
        <ul class="planRecord">
            <li v-for="(item,index) in Orderplan" :key="index">
                <span>{{item.time.split(' ')[0]}}</span>
                <span>{{(item.type=='sale')?'消费':'还款'}}</span>
                <span class="planRecordMoney">{{item.money}}</span>
            </li>
             <!-- <li>
                <span>2018-05-16 10:46:24</span>
                <span>消费</span>
                <span>196.46</span>
            </li> -->
        </ul>
  </div>
</template>
<script>
    export default {
        data(){
            return{
              Order:'',
              Orderplan:'',
              next:''
            }
        },
        mounted(){
          this.$store.commit("shownav",false)
          this.Order=JSON.parse(sessionStorage.getItem('plan'))
          this.Orderplan=$.parseJSON(JSON.parse(sessionStorage.getItem('plan'))['57'])
          this.next=JSON.parse(sessionStorage.getItem('next'))
        //   console.log(JSON.parse(sessionStorage.getItem('next')))
        //   console.log(JSON.parse(sessionStorage.getItem('plan')))
        },
        methods:{
          backed(){
              window.history.go(-1)
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
            padding: .4rem .266667rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #999;
        }
        .planRecordMoney{
            width: 2.133333rem;
            text-align: right;
        }
</style>
