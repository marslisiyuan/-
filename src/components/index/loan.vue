<template>
    <div>
        <!-- 信用贷款title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>
                信用贷款
            </span>
            <span></span>
        </div>

        <!-- 智能排序和高级筛选 -->
        <div class="gjsort">
            <div>智能排序</div>
            <div>高级筛选</div>
        </div>
        <!-- 文字轮播 -->
        <div class="wzlb gjsorttop"></div>

        <!-- 贷款申请 -->
        <ul class="xqdkul">
            <li>
                <div class="dktitle">
                    one
                </div>
                <div class="dkcontent">
                    tow
                </div>
                <div class="dkbottom">
                    three
                </div>
            </li>
            <li>
                <div class="dktitle">
                    one
                </div>
                <div class="dkcontent">
                    tow
                </div>
                <div class="dkbottom">
                    three
                </div>
            </li>
            <li>
                <div class="dktitle">
                    one
                </div>
                <div class="dkcontent">
                    tow
                </div>
                <div class="dkbottom">
                    three
                </div>
            </li>
            <li>
                <div class="dktitle">
                    one
                </div>
                <div class="dkcontent">
                    tow
                </div>
                <div class="dkbottom">
                    three
                </div>
            </li>
        </ul>

        <!-- 卡盟金服 -->
        <footer></footer>
    </div>
</template>

<script>
    export default {
        name: 'loan',
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
    .gjsort {
        position: fixed;
        top: 1.2rem;
        display: flex;
        text-align: center;
        width: 100%;
        
    }
    .gjsort > div {
        flex-grow: 1;
        line-height: 1.2rem;
        background: white;
    }
    .gjsort > div:nth-child(2) {
        border-left: 1px solid #eee;
    }
    .gjsorttop{
        margin-top: 2.4rem;
    }
    .xqdkul li {
        margin-top: 0.32rem;
    }
    .dktitle {
        height: 1.226667rem;
        background: white;
    }
    .dkcontent {
        height: 2.373333rem;
        padding: 0.266667rem 0;
        background: white;
        margin-top: 5px;
        border-bottom: 1px solid #e8e8e8;
    }
    .dkbottom {
        height: 1.2rem;
        padding: 0.4rem 0 0 0.96rem;
        background: white;
    }
    footer {
        height: 3.386667rem;
    }
</style>