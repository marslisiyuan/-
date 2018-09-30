<template>
  <div>
        <!-- 提额秘籍title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>模拟办卡</span>
            <span></span>
        </div>
        
        <!-- 办卡评估和贷款评估 -->
        <ul class="main-page">
            <li>
                <div class="main-title">
                    <h4>办卡评估</h4>
                    <span>"精准预测大大提升成功率"</span>
                </div>
                <img src="" alt="">
            </li>
            <li>
                <div class="main-title">
                    <h4>贷款评估</h4>
                    <span>"轻松查询贷款额度"</span>
                </div>
                <img src="" alt="">
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
        .main-page {
            margin-top: 1.2rem;

        }
.main-page li {
    padding: .026667rem 0.44rem;
    width: 100%;
    height: 5.866667rem;
    background: white;
    margin-top: 0.266667rem;
}
.main-title {
    height: 1.6rem;
    text-align: center;
    position: relative;
}
.main-title h4 {
    margin-top: 0.426667rem;
    font-size: 0.453333rem;
    color: #333;
}
.main-title span{
    display: block;
    color: #999;
    margin-top: .426667rem;
}
</style>
