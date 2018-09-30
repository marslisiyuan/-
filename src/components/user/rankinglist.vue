<template>
    <div>
        <!-- 排行榜title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>排行榜</span>
            <span></span>
        </div>
        <!-- 广告图片 -->
        <div class="banner">
            <img src="" alt=""></div>
            <!-- 文字广告 -->
            <div class="wzlb"></div>

            <!-- 排行导航 -->
            <ul class="nav rankingnav">
                <li class="on" data="0" @click="switchnav($event)">
                   <span>招商排行</span> 
                </li>
                <li data="1" @click="switchnav($event)">
                    <span>办卡排行</span> 
                </li>
                <li data="2" @click="switchnav($event)">
                    <span>贷款排行</span> 
                </li>
                <li data="3" @click="switchnav($event)">
                    <span>车险排行</span> 
                </li>
            </ul>

            <!-- 排行列表 -->
            <!-- <ul class="rankinglist">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul> -->
            <Rktcontent1 class="rankinglistshow" style="display:block"></Rktcontent1>
            <Rktcontent2 class="rankinglistshow"></Rktcontent2>
            <Rktcontent3 class="rankinglistshow"></Rktcontent3>
            <Rktcontent4 class="rankinglistshow"></Rktcontent4>
            
        </div>
    </template>
    <script>
    import Rktcontent1 from "./main/rankinglist/rktcontent1.vue"
    import Rktcontent2 from "./main/rankinglist/rktcontent2.vue"
    import Rktcontent3 from "./main/rankinglist/rktcontent3.vue"
    import Rktcontent4 from "./main/rankinglist/rktcontent4.vue"
        export default {
            data() {
                return {}
            },
            components:{
             Rktcontent1,
             Rktcontent2,
             Rktcontent3,
             Rktcontent4
            },
            mounted() {
                this
                    .$store
                    .commit('shownav', false)
                // console.log(this.$store.state.show)   $('.nav-list').css('display','none')
            },
            methods: {
                backed() {
                    window,
                    history.go(-1)
                },
                switchnav(event){
                //    console.log(event.currentTarget)
                // event.preventDefault();
                $(event.currentTarget).addClass('on').siblings().removeClass('on')
                   var index=$(event.currentTarget).attr("data")
                   $('.rankinglistshow').css('display','none').eq(index).css('display','block')
                }
            }
        }
    </script>
    <style scoped="scoped">
        .banner {
            margin-top: 1.2rem;
            width: 100%;
            height: 3.653333rem;
            background: red;
        }
        .nav li {
            flex: 1;
            height: 1.44rem;
            text-align: center;
            line-height: 1.44rem;
            position: relative;
        }
        .rankingnav {
            margin-bottom: 10px;
            box-shadow: 0 10px 35px rgba(0,0,0,.3);
            border-radius: 5px;
        }
        .rankingnav .on span{
          color: #34c2f3;
        }
        .rankingnav .on span::after{
            position: absolute;
            bottom: 0;
            left: 0;
            content: "";
            width: 100%;
            height: .066667rem;
            background: #34c2f3;
        }
    </style>