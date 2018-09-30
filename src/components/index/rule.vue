<template>
  <div>
        <!-- 常见问题title -->
        <div class="title titlefixed">
           <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>常见问题</span>
            <span></span>
        </div>
        <!-- 问题与答案 -->
        <ul class="position">
            <li class="item" v-for="(item,index) in rule" :key="index" @click="showanswer($event)">
                <div class="generalize">
                    <span class="num">{{index+1}}、</span>
                    <span class="text">{{item.title}}</span>
                    <span class="right">﹀</span>
                </div>
                <p>{{item.context}}</p>
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
  </div>
</template>
<script>
    export default {
        data(){
            return{
              version:'',
              rule:''
            }
        },
        mounted(){
            this.version=this.$store.state.version
            var MAC=$.md5('0700490017'+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {   
                    '0':'0700',
                    '3':'490017',
                    '59':this.version,
                    '64':MAC
                },{
                    emulateJSON:true
                }
            ).then(function(res){
                console.log()
              this.rule=JSON.parse(res.data['57'])
            })
          this.$store.commit("shownav",false)
        },
        methods:{
          backed(){
              window.history.go(-1)
          },
          showanswer(event){
            
            $(event.currentTarget).children('p').slideToggle()
          }
        }
    }
</script>
<style scoped="scoped">
  
</style>
