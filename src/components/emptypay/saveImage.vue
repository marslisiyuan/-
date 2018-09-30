<template>
  <div>
        <!-- 我的海报title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>我的海报</span>
            <span></span>
        </div>
        <!-- 保存图片 -->
        <div class="save">
             
        </div>
        <!-- <button @click="drawCanvas">生成</button> -->
        <div class="bigimg">
            <!-- <img src="../../assets/timg (1).jpg" alt=""> -->
            <img  :src="'data:image/jpeg;base64,' + downloadUrl"/>
        </div>
         <div class="bottomfixed">
            <img @click="changeimg($event)" class="on" src="../../assets/timg.jpg" alt="">
            <img @click="changeimg($event)" src="../../assets/timg (1).jpg" alt="">
            <img @click="changeimg($event)"  src="../../assets/timg (2).jpg" alt="">
            <img @click="changeimg($event)" src="../../assets/timg (3).jpg" alt="">
            <img @click="changeimg($event)" src="../../assets/timg (4).jpg" alt="">
            <img @click="changeimg($event)" src="../../assets/timg (5).jpg" alt="">
            <img @click="changeimg($event)" src="../../assets/timg (6).jpg" alt="">
            <img @click="changeimg($event)" src="../../assets/timg (7).jpg" alt="">
         </div>
         <!-- <a :href="'data:image/jpeg;base64,' + downloadUrl" download="推广图">保存图片</a> -->

  </div>
</template>
<script>
    export default {
        data(){
            return{
               downloadUrl:'',
               thisimg:"",
            }
        },
        mounted(){
            // console.log(window.location.href)
           this.$store.commit('shownav',false);
           var self = this;
            var imgsrcArray = [
                require('@/assets/timg.jpg'),
                require('@/assets/2wm.png')
            ];
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = 750;
            canvas.height = 1333;
            var imglen = imgsrcArray.length;
            var drawimg = (function f(n){
                if(n < imglen){
                    var img = new Image();
                    img.crossOrigin = 'Anonymous'; //解决跨域问题
                    img.onload = function(){
                        if(n == 0){
                            ctx.drawImage(img,0,0,750,1333);
                        }else{
                            ctx.drawImage(img,550,1133,200,200);
                        }
                        f(n+1);
                    }
                    
                    img.src = imgsrcArray[n];
                }else{
                    self.downloadUrl = canvas.toDataURL("image/jpeg");
                    self.downloadUrl = self.downloadUrl.replace("data:image/jpeg;base64,", "");
                }
            })(0);
        },
        methods:{
            backed(){
                 window.history.go(-1)
            },
            // changeimg(event){
            //     console.log($(event.currentTarget).attr('src'))
            // },
            changeimg(event){
            var self = this;
            $(event.currentTarget).css('opacity',1).siblings().css('opacity',0.5)
            var imgsrcArray = [
                $(event.currentTarget).attr('src'),
                require('@/assets/2wm.png')
            ];
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = 750;
            canvas.height = 1333;
            var imglen = imgsrcArray.length;
            var drawimg = (function f(n){
                if(n < imglen){
                    var img = new Image();
                    img.crossOrigin = 'Anonymous'; //解决跨域问题
                    img.onload = function(){
                        if(n == 0){
                            ctx.drawImage(img,0,0,750,1333);
                        }else{
                            ctx.drawImage(img,550,1133,200,200);
                        }
                        f(n+1);
                    }
                    
                    img.src = imgsrcArray[n];
                }else{
                    self.downloadUrl = canvas.toDataURL("image/jpeg");
                    self.downloadUrl = self.downloadUrl.replace("data:image/jpeg;base64,", "");
                }
            })(0);
        }
      }
    }
</script>
<style scoped="scoped">
.save{
    margin-top:1.2rem;
}
.bigimg{
    width: 100%;
    height: 10.666667rem;
    background: black;
}
.bigimg img{
    height: 10.666667rem;
    margin: 0 auto;
    background: white;
}
.bottomfixed{
    height: 3.2rem;
    position: fixed;
    align-items: center;
    width: 100%;
    overflow-x: auto;
    bottom: 0;
    background: white;
    display: flex;
}
.bottomfixed img{
    height: 2.666667rem;
    margin-left: .133333rem;
    opacity: 0.5;
}
.bottomfixed .on{
    opacity: 1;
}
</style>

