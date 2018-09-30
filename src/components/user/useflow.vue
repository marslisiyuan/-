<template>
    <div>
        <!-- 卡盟流程说明title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>卡盟流程说明</span>
            <span></span>
        </div>

        <!-- 操作步骤 -->
        <ul class="helpanwser">
            <li><div class="helpdiv"><img class="helpimg" src="" alt=""><span>行用卡申请步骤</span></div><div class="help-left"><img src="../../assets/right.png" alt=""></div></li>
            <li><div class="helpdiv"><img class="helpimg" src="" alt=""><span>行用卡申请步骤</span></div><div class="help-left"><img src="../../assets/right.png" alt=""></div></li>
            <li><div class="helpdiv"><img class="helpimg" src="" alt=""><span>行用卡申请步骤</span></div><div class="help-left"><img src="../../assets/right.png" alt=""></div></li>
            <li><div class="helpdiv"><img class="helpimg" src="" alt=""><span>行用卡申请步骤</span></div><div class="help-left"><img src="../../assets/right.png" alt=""></div></li>
            <li><div class="helpdiv"><img class="helpimg" src="" alt=""><span>行用卡申请步骤</span></div><div class="help-left"><img src="../../assets/right.png" alt=""></div></li>
            <li><div class="helpdiv"><img class="helpimg" src="" alt=""><span>行用卡申请步骤</span></div><div class="help-left"><img src="../../assets/right.png" alt=""></div></li>
            <li><div class="helpdiv"><img class="helpimg" src="" alt=""><span>行用卡申请步骤</span></div><div class="help-left"><img src="../../assets/right.png" alt=""></div></li>
            <li><div class="helpdiv"><img class="helpimg" src="" alt=""><span>行用卡申请步骤</span></div><div class="help-left"><img src="../../assets/right.png" alt=""></div></li> 
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
                // console.log(this.$store.state.show)   $('.nav-list').css('display','none')
            },
            methods: {
                backed() {
                    window,
                    history.go(-1)
                }
            }
        }
    </script>
    <style scoped="scoped">
        .helpanwser {
            margin-top: 1.2rem;
            padding-left:.533333rem; 
            background: white;

        }
        .helpanwser>li {
            padding: .266667rem .533333rem .266667rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e8e8e8;
        }
        .helpanwser .helpimg{
            width: 1.28rem;
            height: 1.28rem;
            margin-right: .533333rem;
        }
        .helpanwser .helpdiv{
            display: flex;
            align-items: center;
        }
        .helpanwser .help-left img{
         height: .4rem;
        }
    </style>