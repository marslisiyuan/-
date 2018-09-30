<template>
    <!-- 金融业务问题列表 -->
    <ul class="position">
        <li class="item" @click="showanswer($event)">
            <div class="generalize">
                <span class="num">1、</span>
                <span class="text">违章办理需要填写什么资料，个人信息安全吗？</span>
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
