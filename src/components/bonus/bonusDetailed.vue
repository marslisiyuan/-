<template>
  <div>
        <!-- 分润明细title -->
        <div class="title titlefixed">
             <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>分润明细</span>
            <span>全部</span>
        </div>
        <!-- 分润时间 -->
        <div class="frtime">
            <h3>444.57</h3>
            <p>区间分润收益&nbsp;(元)</p>
            <div class="inputdate">
                <input @blur="insinte($event)" v-on:focus="out($event)" type="text" placeholder="分润起始日">
                <input @blur="insinte($event)" v-on:focus="out($event)" type="text"  placeholder="分润结束日">
            </div>
        </div>
        <!-- 分润详细账单 -->
        <ul class="frul">
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
            <router-link tag="li" to="/Bonus/bonusXiangxi"><p><span></span><span>2018-05-16 13:12</span></p><p><span>+0.08</span><img src="../../assets/right.png" alt=""></p></router-link>
        </ul>
  </div>
</template>
<script>
    export default{
        data(){
            return{
              show:false,
            }
        },
        mounted(){
         this.$store.commit("shownav",false)
        },
        methods:{
          backed(){
              window.history.go(-1)
          },
          out(event){
              $(event.currentTarget).prop('type','date')
            //   console.log($(event.currentTarget))
              setTimeout(function(){$(event.currentTarget).trigger('click');},10);
          },
          insinte(event){
            if(!$(event.currentTarget).val()){
                // console.log($(event.currentTarget))
                    $(event.currentTarget).prop('type','text');
                }
          }
        }
    }
</script>
<style scoped="scoped">
        .frtime{
            margin-top: 1.2rem;
            padding: 1.066667rem;
            background: #7CAFFD;
            text-align: center;
            color: white;
        }
        .frtime h3{
            font-size: .8rem;
            font-weight: 600;
            margin-bottom: .4rem;
        }
        .frtime .inputdate{
          margin-top: .266667rem;
          display: flex;
          justify-content: space-between;
        }
        .frtime .inputdate input{
            height:.933333rem;
            width: 3.6rem;
            padding: 0 .133333rem;
        }
        .frul li{
            display: flex;
            justify-content: space-between;
            font-size: .426667rem;
            padding: .4rem .533333rem;
            background: white;
            border-bottom: 1px solid #F6F6F9;
        }
        .frul li p:nth-child(2){
            display: flex;
            align-items: center;
        }
        .frul li p:nth-child(2) img{
            height: .4rem;
            margin-left: .266667rem;
        }
</style>
