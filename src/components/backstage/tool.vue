<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 首页</el-breadcrumb-item>
                <el-breadcrumb-item>展业图片</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
         <div class="container">
            <div class="lunboimage">
                <h3>展业图片</h3>
                <div class="lunboload">
                   <p>上传图片名称：<input type="text"></p>
                   <p>上传图片文件：<input type="file" accept="image/*"></p>
                    <button>提交</button>
                </div>
                <table class="lunbotatle">
                    <tr>
                        <td>图片名称</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>展业图1</td>
                        <td><button>删除</button></td>
                    </tr>
                    <tr>
                        <td>展业图2</td>
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
</style>
