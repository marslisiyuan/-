<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 首页</el-breadcrumb-item>
                <el-breadcrumb-item>首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
         <div class="container">
            <div class="lunboimage">
                <h3>首页轮播图</h3>
                <div class="lunboload">
                   <p>上传图片名称：<input type="text" ref="lunboname"></p>
                   <p>上传图片文件：<input type="file"  ref="lunbofile" accept="image/*"></p>
                    <button @click="lunbo">提交</button>
                </div>
                <table class="lunbotatle">
                    <tr>
                        <td>轮播名称</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>轮播1</td>
                        <td><button>删除</button></td>
                    </tr>
                    <tr>
                        <td>轮播2</td>
                        <td><button>删除</button></td>
                    </tr>
                </table>
            </div>
            <div class="lunboimage">
                <h3>首页文字轮播公告</h3>
                <div class="lunboload">
                    <textarea name="" id="" cols="50" rows="10"></textarea><br>
                    <button>提交</button>
                </div>
                
                <table class="lunbotatle">
                    <tr>
                        <td>轮播文字内容</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td class="tatletextarea">大叔大叔大叔大大神大神大神大大说的是的撒旦撒旦</td>
                        <td><button>删除</button></td>
                    </tr>
                </table>
                
            </div>
            <div class="lunboimage">
                <h3>首页功能导航</h3>
                    <div class="lunboload">
                       <p>功能名称:<input type="text"></p>
                       <p>功能logo:<input type="file" accept="image/*"></p>
                       <p>功能链接地址:<input type="text"></p>
                       <p>功能开关:<input type="checkbox" value="true" checked="checked"></p> 
                       <div><button>提交</button></div>
                    </div>
                <table class="lunbotatle">
                    <!-- <button>上传</button> -->
                     <tr>
                        <td>功能名称</td>
                        <td>功能logo</td>
                        <td>跳转网址</td>
                        <td>功能开关</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>智能还款</td>
                        <td><img src="" alt=""></td>
                        <td>www.baidu.com</td>
                        <td><input type="checkbox" value="true" checked="checked"></td>
                        <td><button>删除</button></td>
                    </tr>
                </table>
            </div>
            <div class="lunboimage">
                <h3>首页列表导航</h3>
                    <div class="lunboload">
                       <p>列表标题:<input type="text"></p>
                       <p>列表内容:<input type="text"></p>
                       <p>列表logo:<input type="file" accept="image/*"></p>
                       <p>列表链接地址:<input type="text"></p>
                       <div><button>提交</button></div>
                    </div>
                <table class="lunbotatle">
                    <!-- <button>上传</button> -->
                    <tr>
                        <td>列表名称</td>
                        <td>列表图片</td>
                        <td>列表内容</td>
                        <td>列表网址</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>财商课程</td>
                        <td><img src="" alt=""></td>
                        <td>行业大咖在线课程让小白秒变专家</td>
                        <td>www.baidu.com</td>
                        <td><button>删除</button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        mounted(){

        },methods:{
            lunbo(){
                // console.log(this.$refs.lunboname.value)
                // console.log(this.$refs.lunbofile.files[0])
            }
        }
    }
</script>
<style scoped="scoped">
.lunboimage{
    width: 100%;
    border:1px solid #999;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
}
.lunboload button{
    margin-top: 10px;
width: 100px;
height: 30px;
}
.lunboload p{
    margin-top: 10px;
}
.lunbotatle{
    border-collapse: collapse;
   margin-top: 10px;
}
.lunbotatle td{
    padding: 5px;
    border: 1px solid #999;
    width: 150px;
    text-align: center;
}
.lunbotatle .tatletextarea{
width: 300px;
}
</style>
