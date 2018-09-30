<template>
    <div>
        <!-- 帮助中心title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <main class="helpselect">
                <span @click="select($event)" data="0" class="on">金融业务</span>
                <span @click="select($event)" data="1">汽车保险</span>
            </main>
            <input type="text" placeholder="搜索" class="search-box">
        </div>

        <!-- 帮助中心问题列表 -->
         <Jryw class="showhlep"></Jryw>
         <Qcbx class="showhlep" style="display:none;"></Qcbx>
    </div>
</template>
    <script>
       import Jryw from './main/helpcenter/jryw'
       import Qcbx from './main/helpcenter/qcbx'
        export default {
            data() {
                return {}
            },
            components:{
                Jryw,
                Qcbx,
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
                select(event){
                    $(event.currentTarget).addClass('on').siblings().removeClass('on')
                    var index=$(event.currentTarget).attr('data')
                     $('.showhlep').css('display','none')
                    $('.showhlep').eq(index).css('display','block')
                }
            }
        }
    </script>
    <style scoped="scoped">
        .helpselect{
            font-size: 0;
            margin-left: .8rem;
        }
        .helpselect span{
           display: inline-block;
           line-height: .8rem;
           font-size: .373333rem;
           border: 1px solid #fff;
           vertical-align: middle;
           text-align: center;
           width: 2.333333rem;
        }
        .helpselect span:first-child{
            border-radius: .133333rem 0 0 .133333rem;
        }
        .helpselect span:nth-child(2){
            border-radius: 0 .133333rem .133333rem 0;
        }
        .helpselect .on{
            background-color: #fff;
            color: #2d8cf0;
        }
        .search-box{
            padding: .133333rem;
            width: 1.6rem;
            height:.666667rem;
            border-radius: .026667rem;
            border: 1px solid #fff;
            line-height: .666667rem;
            /* box-sizing: border-box; */
        }
        .helpanwser{
            margin-top: 1.2rem;
           
        }
        .helpanwser li{
            padding: .56rem .533333rem;
            border-bottom: 1px solid #e8e8e8;
            background: white; 
        }
    </style>