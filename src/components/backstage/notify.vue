<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 首页</el-breadcrumb-item>
                <el-breadcrumb-item>客服</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
         <div class="container">
            <div class="lunboimage">
                <h3>客服</h3>
                    <div class="lunboload">
                       <p>客服QQ:<input type="text"></p>
                       <p>客服昵称:<input type="text"></p>
                       <p>客服头像:<input type="file" accept="image/*"></p>
                       <div><button>提交</button></div>
                    </div>
                <table class="lunbotatle">
                    <!-- <button>上传</button> -->
                     <tr>
                        <td>客服QQ</td>
                        <td>客服昵称</td>
                        <td>客服头像</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>641244654</td>
                        <td>客服一</td>
                        <td><img src="" alt=""></td>
                        <td> <button>删除</button></td>
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
</style>
