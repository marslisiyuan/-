<template>
   <div>
        <!-- 征信查询title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>征信查询</span>
            <span></span>
        </div>
        <!-- 征信查询海报 -->
        <div class="Sowemap"></div>
        
        <!-- 征信个人资料 -->
        <ul class="findcredit">
            <li>
                <span class="logo"></span>
                <span class="name">姓名:</span>
                <input type="text">
            </li>
            <li>
                <span class="logo"></span>
                <span class="name">手机号:</span>
                <input type="text">
            </li>
            <li>
                <span class="logo"></span>
                <span class="name">身份证号:</span>
                <input type="text">
            </li>
            <li>
                <span class="logo"></span>
                <span class="name">邮箱号码:</span>
                <input type="text">
            </li>
        </ul>

        <!-- 查询选择 -->
        <ul class="select-list">
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            this
                .$store
                .commit('shownav', false)
        },
        methods: {
            backed() {
                window
                    .history
                    .go(-1)
            }
        }
    }
</script>
<style scoped="scoped">
.findcredit li {
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 0.293333rem 0.2rem;
    align-items: center;
    background: white;
}
.findcredit li .logo {
    display: block;
    background: black;
    width: 0.666667rem;
    height: 0.666667rem;
}
.findcredit li .name {
    width: 2rem;
    line-height: 0.666667rem;
    padding-left: 0.133333rem;
}
.findcredit li input {
    border: none;
    flex-flow: 1;
    font-size: 0.373333rem;
}
.select-list {
    padding: 0.4rem 0.266667rem;
}
.select-list li {
    margin-bottom: 0.4rem;
    width: 100%;
    height: 3.333333rem;
    background: black;
}

</style>