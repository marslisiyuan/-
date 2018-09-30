<template>
  <div>
           <!-- 分润详情title -->
        <div class="title titlefixed">
             <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>分润详情</span>
            <span></span>
        </div>
        <!-- 分润详情 -->
        <ul class="frdetails">
            <li>
                <p>陈*</p>
                <p style="color:#7caffd;">1596***1542</p>
                <p>2018-05-16 13:30</p>
            </li>
            <li>
                <p></p>
                <p><span>普通会员</span><span>养卡分润</span></p>
                <p style="font-size:.533333rem;color: red;font-weight: 600;">+0.08</p>
            </li>
        </ul>
  </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        mounted(){
          this.$store.commit("shownav",false)
        },
        methods:{
          backed(){
              window.history.go(-1)
          }
        }
    }
</script>
<style scoped="scoped">
         .frdetails{
             margin-top: 1.2rem;
             background: white;
         }
         .frdetails li{
             padding:.4rem .533333rem;
             border-bottom: 2px solid #f6f6f9;
             display: flex;
             justify-content: space-between;
             font-size: .426667rem;
             align-items: center;
         }
         .frdetails li p span{
             padding: 0 .4rem;
         }
</style>
