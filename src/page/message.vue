<template>
<div>
    <div class="title titlefixed">
        <span></span>
        <p>
            <span class="friendcircle on" data="0" @click="togglefriend($event)">朋友圈</span>
            <span class="friendcircle" data="1" @click="togglefriend($event)">好友</span>
        </p>
        <span></span> 
    </div>
     <Circles  class="toggleshow"></Circles>
    <Friends style="display:none;" class="toggleshow"></Friends>
   
</div>

</template>
<script>
import Friends from "@/components/message/main/info/friend"
import Circles from "@/components/message/main/info/circle"
    export default {
        name: 'first',
        data() {
            return {

            }
        },
        components:{
          Friends,
          Circles
        },
        mounted(){

        },
        methods:{
          togglefriend(event){
             $(event.currentTarget).addClass('on').siblings().removeClass('on')
             var index=$(event.currentTarget).attr("data")
             $('.toggleshow').css("display","none").eq(index).css("display","block")
          }
        }
    }
</script>
<style scoped="scoped">
.friendcircle{
    padding: .133333rem  .4rem;
    height: .666667rem;
    vertical-align: middle;
    font-size: .4rem;
    border-radius: .666667rem;
    margin: 0 .2rem;
}
.title .on{
background: white;
color:#2ea7e0;
}
</style>
