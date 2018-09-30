<template>
    <!-- 汽车保险问题列表 -->
    <ul class="position">
        <li class="item" @click="showanswer($event)">
            <div class="generalize">
                <span class="num">1、</span>
                <span class="text">苹果手机用户下载软件之后使用不了？提示需要信任软件</span>
                <span class="right">﹀</span>
            </div>
            <p>可以</p>
        </li>
        <li class="item"  @click="showanswer($event)">
            <div class="generalize">
                <span class="num">1、</span>
                <span class="text">精养卡</span>
                <span class="right">﹀</span>
            </div>
            <p>可以</p>
        </li>
        <li class="item"  @click="showanswer($event)">
            <div class="generalize">
                <span class="num">1、</span>
                <span class="text">精养卡</span>
                <span class="right">﹀</span>
            </div>
            <p>可以</p>
        </li>
        <li class="item"  @click="showanswer($event)">
            <div class="generalize">
                <span class="num">1、</span>
                <span class="text">精养卡</span>
                <span class="right">﹀</span>
            </div>
            <p>可以</p>
        </li>
        <li class="item"  @click="showanswer($event)">
            <div class="generalize">
                <span class="num">1、</span>
                <span class="text">精养卡</span>
                <span class="right">﹀</span>
            </div>
            <p>可以</p>
        </li>
        <li class="item" @click="showanswer($event)">
            <div class="generalize">
                <span class="num">1、</span>
                <span class="text">精养卡</span>
                <span class="right">﹀</span>
            </div>
            <p>可以</p>
        </li>
    </ul>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
          showanswer(event){
            $(event.currentTarget).children('p').slideToggle()
          }
        }
    }
</script>