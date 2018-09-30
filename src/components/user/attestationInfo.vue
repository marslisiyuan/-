<template>
    <div>
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>实名认证</span>
            <span></span>
        </div>
        <ul class="attestationInfoul">
            <li style="justify-content:center;"><img src="../../assets/drawable/mycustomer_weirenzheng.png" alt=""></li>
            <li><span>姓名</span><span>{{bank.bankAccountName}}</span></li>
            <li><span>储蓄卡号</span><span>{{bank.bankAccount}}</span></li>
            <li><span>所属银行</span><span>{{bank.bankDetail}}</span></li>
            <li><span>身份证</span><span>{{bank.idCardNumber}}</span></li>
            <li><span>状态</span><span style="color:red;">已认证</span></li>
        </ul>
    </div>
</template>
<script>
   export default {
       data(){
         return{
             bank:''
         }
       },
       mounted(){
          this.$store.commit('shownav',false)
          this.bank=eval(JSON.parse(localStorage.getItem('info'))['42'])[0]
          console.log(JSON.parse(localStorage.getItem('info'))['42'])
       },
       methods:{
           backed(){
               window.history.go(-1)
           }
       }
   }    
</script>
<style scoped="scoped">
.attestationInfoul{
    padding: .533333rem;
}
.attestationInfoul li{
    display: flex;
    justify-content: space-between;
    background: white;
    padding: .266667rem .266667rem;
    border-bottom: 1px solid #efefef;
}
.attestationInfoul li img{
    height: 2.133333rem;
    width: 2.133333rem;
}
</style>
