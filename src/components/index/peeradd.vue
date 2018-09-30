<template>
  <div>
        <!-- 个人设置title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>信贷经理</span>
            <p>
                <!-- <span>全国</span>
                <span></span> -->
            </p>
        </div>
        <!-- 搜索名字 -->
        <div class="search">
            <div class="inner">
                <button>
                    <Icon type="ios-search-strong" size="30"></Icon>
                </button>
                <input type="text" placeholder="搜索名字/手机号">  
            </div>
        </div>
        <!-- 文字轮播 -->
        <div class="wzlb">

        </div>

        <!-- 内容发布 -->
        <div class="add-friend">
        <img class="logo" src="../../assets/nav/xdjl.png" alt=""> <span class="text">成为信贷经理</span>
          
        </div>
        <div class="add-friend">
         <img class="logo" src="../../assets/nav/wyfb.png" alt=""> <span class="text">我要发布</span>
        </div>

        <!-- 信贷经理个人资料 -->
        <ul class="peerlist">
            <li>
                <div class="tx"><img src="../../assets/nav/tx.jpg" alt=""></div>
                <div class="name">
                    <h3>李英俊</h3>
                    <div class="dkl">
                        <p>贷款成功率:<span>85%</span></p>
                        <div> <Rate disabled allow-half :value.sync="valueHalf"></Rate><span>评价</span></div>
                    </div>
                </div>
                <div class="content">
                    <div>芝麻分600以上，卡通微粒贷。办理大额信用卡，信用卡提额</div>
                    <div>联系他</div>
                </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
  </div>
</template>
<script>
    export default{
        data(){
            return{
             valueHalf: 4.25,
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
      .search{
          margin-top: 1.2rem;
          padding: .266667rem;
      }
     .search .inner{
          margin: 0 auto;
          width: 9.466667rem;
          height: 1.066667rem;
          border: 1px solid #333;
          line-height: 1.066667rem;
          padding: 0 .333333rem;
          border-radius: 1.013333rem;
          background: #fff;
      }
      .search .inner input{
          margin-left: .133333rem;
        font-size:.426667rem;
        line-height: .426667rem;
        border: none;
      }
      .search .inner button{
          background: none;
          border: none;
          vertical-align: middle;
          height: .933333rem;
          padding: 0 .133333rem;
      }
      .add-friend{
          float: left;
          width: 50%;
          margin: .266667rem 0;
          padding: .266667rem .333333rem;
          height: 1.466667rem;
          background: white;
          border:1px  solid #ddd;
          border-left: none;
          display: flex;
          align-items: center;
      }
      .add-friend:last-child{
          border-right: none;
      }
      .add-friend .logo{
          width: 1.066667rem;
          height:1.066667rem;
      }
      .add-friend .text{
          padding-left: .266667rem;
      }
      .peerlist{
         padding: .266667rem;
         border-bottom: 1px solid #ddd;
         border-top: 1px solid #ddd;
         display: flex;
         justify-content: space-between;
         flex-wrap: wrap;
      }
      .peerlist li{
          width: 4.533333rem;
          height: 6.666667rem;
          border: 1px solid #ddd;
          border-radius: .133333rem;
          margin-bottom: .333333rem;
          background: white;
          overflow: hidden;
      }
      .peerlist li .tx{
          width: 4.533333rem;
          height: 4.533333rem;
      }
      .peerlist li .tx img{
           width: 4.533333rem;
           height: 4.533333rem;
           border-radius: .133333rem;
      }
      .ivu-rate{
          font-size: .266667rem;
      }
      .peerlist li .name{
          display: flex;
          justify-content: space-between;
          padding: .266667rem .133333rem 0 .133333rem;

      }
      .peerlist li .name h3{
          font-size: .48rem;
          font-weight: 700;
      }
     .peerlist li .name .dkl{
       font-size: .32rem;
       line-height: .373333rem;
       text-align: right;
      }
      .peerlist .content{
          padding: 0 .133333rem;
          display: flex;
      }
      .peerlist .content div:nth-child(1){
          width: 70%;
          font-size: .32rem;
      }
</style>
