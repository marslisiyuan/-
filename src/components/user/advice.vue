<template>
    <div>
        <!-- 信息查询title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>意见反馈</span>
            <span></span>
        </div>

        <!-- 订单查询 -->
        <div class="chartcontent"></div>
        <div class="chartfooter">
            <textarea placeholder="我也来说两句..."></textarea>
            <div class="extend_btn"></div>
            <div class="send_btn">
                发送
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "advice",
        data() {
            return {}
        },
        mounted() {
            this.$store.commit("shownav", false)
        },
        methods: {
            backed() {
                window.history.go(-1)
            }
        }
    }
</script>
<style scoped="scoped">
 .chartfooter{
    position:fixed;
    bottom:0px;
    background: #eee;
    height: 1.066667rem;
    width: 100%;
}
.chartfooter textarea{
    margin: .173333rem 0 0 .4rem;
    height: .746667rem;
    padding: .133333rem .266667rem;
    border-radius: .133333rem;
    width:7.333333rem;
    font-size: .32rem;
    border: none;
}
.chartfooter .extend_btn{
    position: absolute;
    top: .293333rem;
    left: 7.866667rem;
    width: .48rem;
    height: 0.48rem;
    background: white;
}
.chartfooter .send_btn{
    position: absolute;
    top: .213333rem;
    left:8.533333rem;
    padding: 0 .2rem;
    height: .64rem;
    line-height: 0.64rem;
    background: #03b2f1;
    border-radius: .133333rem;
    color: #fff;
}
</style>
