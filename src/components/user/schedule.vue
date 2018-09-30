<template>
    <div>
        <!-- 信息查询title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>信息查询</span>
            <span></span>
        </div>

        <!-- 订单查询 -->
        <main class="findul">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </main>
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
                .commit("shownav", false)
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
       .findul {
            padding-top: 1.2rem;
        }
        .findul ul li {
            margin-top: 0.266667rem;
            height: 5.84rem;
            padding: 0.266667rem 0.4rem;
            background: white;
        }
</style>
