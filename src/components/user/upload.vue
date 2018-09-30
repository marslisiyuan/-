<template>
    <div>
        <!-- 排行榜title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>照片上传</span>
            <span></span>
        </div>
 
        <!-- 图片拍照 -->
         <div class="uploadimg">
             <div>
                 <p>身份证正面照</p>
                 <div class="photo">
                    <input type="file" @change="uploadchange($event)" accept="image/*">
                    <img src="../../assets/login/addimg.png" alt="">
                 </div>
                 <button @click='uploadimg($event,"10E")' class="numbutton">
                    上传图片
                 </button>
             </div>
             <div>
                <p>身份证反面照</p>
                <div class="photo">
                    <input @change="uploadchange($event)" type="file" accept="image/*">
                   <img src="../../assets/login/addimg.png" alt="">
                </div>
                <button @click='uploadimg($event,"10K")' class="numbutton">
                    上传图片
                </button>
             </div>
             <div>
                <p>手持身份证照</p>
                <div class="photo">
                    <input @change="uploadchange($event)" type="file" accept="image/*">
                    <img src="../../assets/login/addimg.png" alt="">
                </div>
                <button @click='uploadimg($event,"10M")' class="numbutton">
                    上传图片
                </button>
             </div>
             <div>
                <p>银行卡正面照</p>
                <div class="photo">
                    <input @change="uploadchange($event)" type="file" accept="image/*">
                    <img src="../../assets/login/addimg.png" alt="">
                </div>
                <button @click='uploadimg($event,"10J")'  class="numbutton">
                    上传图片
                </button>
             </div>
             <div>
                 <p>银行卡反面照</p>
                 <div class="photo">
                    <input @change="uploadchange($event)" type="file" accept="image/*">
                    <img src="../../assets/login/addimg.png" alt="">
                </div>
                <button @click='uploadimg($event,"10F")'  class="numbutton">
                    上传图片
                </button>
             </div>
         </div>
                <!-- <form action="http://hangzhou.llyzf.cn/lly-posp-proxy/uploadImage.app" method="post" enctype="multipart/form-data">
             <table>
                 <tr>
                     <td>上传文件</td>
                     <td><input name="file" type="file"></td>
                     <td><input type="submit" value="上传"></td>
                 </tr>
             </table>
         </form> -->
         <!-- 拍照小提示 -->
         <ul class="uploadul">
            <li style="color: red;font-size: .48rem;margin-top: .266667rem;font-weight: 600;">拍照小提示：</li>
            <li>1.手持身份证，手指不能遮挡身份证上任何信息</li>
            <li>2.身份证图像清楚。每一个字都要清晰可辩，利于识别</li>
            <li>3.认证照片不是艺术照，不要过度化妆，这张照片需要本人面部五官与身份证照片进行对比</li>
            <li>4.五官包括耳朵，如果有耳朵，不要让头发遮挡住</li>
            <li>5.拍照时需要拍出持手臂，以证实是本人手持</li>
            <li>6.对正拍摄，不要有奇异角度，不要闪光灯拍摄，自然拍摄就可以</li>
         </ul>
         <!-- 提交 -->
          <div class="uploadbutton">
              <button @click='uploadinfo($event)'>确定</button>
          </div>
          <div class="consoles" style="display:none;">
            <div>
                {{text}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'fourone',
        data() {
            return {
             version:'',
             text:'',
            }
        },
        mounted(){
            this.$store.commit('shownav',false)
             this.version=this.$store.state.version
            
        },
        methods:{
            backed(){
                window.history.go(-1)
            },
            uploadimg(event,type){
                    var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
                    var id=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].id
                    var base64img=$(event.currentTarget).prev().children('img').attr('src')
                    var input=$(event.currentTarget).prev().children('input')[0].files[0]
                    // console.log(input)
                    if(base64img){
                        
                        var MAC=$.md5('0700'+'190948'+type+merchantNo+id+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D').toUpperCase()
                        var param=new FormData()
                        // param.append('0','0700')
                        // param.append('3','190948')
                        // param.append('9',type)
                        param.append('10',input)
                        // param.append('42',merchantNo)
                        // param.append('43',id)
                        // param.append('59',this.version)
                        // param.append('64',MAC)
                        var buttons=$(event.currentTarget)
                        var _vm=this
                        var url='http://hangzhou.llyzf.cn/lly-posp-proxy/uploadImage.app?0=0700&3=190948&9='+type+'&42='+merchantNo+'&43='+id+'&59='+this.version+'&64='+MAC
                        $.ajax({
                            type: 'POST',
                            url: url,
                            data:param,
                            cache:false,
                            processData: false,
                            contentType: false,
                            success:function(res){
                                console.log(res)
                              if(res['39']=='00'){
                                  _vm.text='上传成功'
                                  buttons.text('上传成功')
                                  $('.consoles').show()  
                                    setTimeout(function(){
                                    $('.consoles').hide()
                                    },1000)
                              }
                            }
                        });

                    }else{
                        alert('请上传图片')
                    }
            },
            uploadinfo(event){
                var num =0
                $(event.currentTarget).attr('disabled','disabled')
                $('.numbutton').map(function(){
                    if($(this).text()=='上传成功'){
                     num++
                    }
                })
                if(num==5){
                this.text='实名认证需一分钟'
                var _vm=this
                    $('.consoles').show()  
                    setTimeout(() => {
                        $('.consoles').hide()
                        var curCount = 60  
                        function SetRemainTime() {
                            if (curCount == 0) {
                                clearInterval(interValObj); //停止计时器
                                var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
                                var MAC=$.md5('0700490020'+merchantNo+_vm.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
                                var url='http://hangzhou.llyzf.cn/lly-posp-proxy/request.app?0=0700&3=490020&42='+merchantNo+'&59='+_vm.version+'&64='+MAC
                                $.ajax({
                                    type: 'get',
                                    url: url,
                                    success:function(res){
                                      localStorage.setItem('info',JSON.stringify(res))
                                    }
                                });
                            } else {
                                curCount--;
                            }
                        }
                        var interValObj = setInterval(SetRemainTime, 1000);
                          this.$router.push('/index')
                    }, 2000);
                }else{
                  $(event.currentTarget).attr('disabled',false)
                   this.text='请上传图片再提交' 
                   $('.consoles').show()  
                    setTimeout(() => {
                        $('.consoles').hide()
                    }, 1000)
                }
               
            },
            uploadchange(event){
                         var self = this;
                   
                    console.log($(event.currentTarget)[0].files[0])
                        function getObjectURL(file) {
                        var url = null ;
                        if (window.createObjectURL!=undefined) { // basic
                        url = window.createObjectURL(file) ;
                        } else if (window.URL!=undefined) { // mozilla(firefox)
                        url = window.URL.createObjectURL(file) ;
                        } else if (window.webkitURL!=undefined) { // webkit or chrome
                        url = window.webkitURL.createObjectURL(file) ;
                        }
                        return url ;
                        }
                        function convertImgToBase64(url, callback, outputFormat){ 
                        var canvas = document.createElement('CANVAS'); 
                        var ctx = canvas.getContext('2d'); 
                        var img = new Image; 
                        img.crossOrigin = 'Anonymous'; 
                        img.onload = function(){
                        var width = img.width;
                        var height = img.height;
                    
                        var rate = (width<height ? width/height : height/width)/4;
                        canvas.width = width*rate; 
                        canvas.height = height*rate; 
                        ctx.drawImage(img,0,0,width,height,0,0,width*rate,height*rate); 
                        var dataURL = canvas.toDataURL(outputFormat || 'image/png'); 
                        callback.call(this, dataURL); 
                        canvas = null; 
                        };
                        img.src = url; 
                    }
                    var imageUrl=getObjectURL($(event.currentTarget)[0].files[0])
                        var input=$(event.currentTarget)
                            convertImgToBase64(imageUrl, function(base64Img){
                                input.next().attr('src',base64Img)
                            });

            }
        }
    }
</script>
<style scoped="scoped">
       .uploadimg{
           background: white;
           margin-top: 1.2rem;
           display: flex;
           flex-wrap: wrap;
       }
       .uploadimg>div{
           width: 2.8rem;
           text-align: center;
           margin-left: .4rem;
           margin-top: .533333rem;
       }
       .uploadimg>div .photo{
        width: 2.8rem;
        height: 2rem;  
        position: relative;
       }
       .uploadimg>div .photo input{
          opacity: 0;
          width: 2.8rem;
          height: 2rem;
          top: 0;
          left: 0;
          position: absolute
       }
       .uploadimg button{
           margin-top: .266667rem;
       }
       .uploadimg>div .photo img{
           width: 2.8rem;
           height: 2rem;
       }
       .uploadimg>div>p{
        font-size: .426667rem;
        margin: .133333rem 0;
       }
       .uploadul li{
        padding: .133333rem;
        font-size: .426667rem;
       }
       .uploadbutton{
           margin:.4rem .266667rem;
       }
       .uploadbutton button{
           width: 100%;
           background: #7caffd;
           height: 1.066667rem;
           color: white;
           font-size: .533333rem;
           font-weight: 600;
           border: none;
       }
</style>