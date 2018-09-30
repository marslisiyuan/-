<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 首页</el-breadcrumb-item>
                <el-breadcrumb-item>金融秘籍</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
         <div class="container">
            <div class="lunboimage">
                <h3>海报图</h3>
                <div class="lunboload">
                   <p>上传图片名称：<input type="text"></p>
                   <p>上传图片文件：<input type="file" accept="image/*"></p>
                    <button>提交</button>
                </div>
                <table class="lunbotatle">
                    <tr>
                        <td>海报图名称</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>海报图1</td>
                        <td><button>删除</button></td>
                    </tr>
                </table>
            </div>
            <div class="lunboimage">
                <h3>金融秘籍文字轮播公告</h3>
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
                <h3>金融列表攻略</h3>
                    <div class="lunboload">
                       <p>列表标题:<input type="text"></p>
                       <p>列表logo:<input type="file" accept="image/*"></p>
                       <p>功能链接地址:<input type="text"></p>
                       <!-- <p>功能开关:<input type="checkbox" value="true" checked="checked"></p>  -->
                       <div><button>提交</button></div>
                    </div>
                <table class="lunbotatle">
                    <!-- <button>上传</button> -->
                     <tr>
                        <td>列表标题</td>
                        <td>列表logo</td>
                        <td>列表网址</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>"小白"办必成攻略</td>
                        <td><img src="" alt=""></td>
                        <td>www.baidu.com</td>
                        <td><button>删除</button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    
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
