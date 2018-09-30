<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 首页</el-breadcrumb-item>
                <el-breadcrumb-item>常见问题</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
         <div class="container">
            <div class="lunboimage">
                <h3>常见问题</h3>
                <div class="lunboload">
                   <p>常见问题：<br><textarea name="" id="" cols="30" rows="5"></textarea></p>
                   <p>问题问题：<br><textarea name="" id="" cols="60" rows="10"></textarea></p>
                    <button>提交</button>
                </div>
                <table class="lunbotatle">
                    <tr>
                        <td>常见问题</td>
                        <td>问题答案</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td class="tatletextarea">实打实的阿什顿爱的爱上大声地大声道阿什顿</td>
                        <td class="tatletextarea">实打实的阿什顿爱的爱上大声地大声道阿什顿</td>
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
    width: 15   0px;
    text-align: center;
}
.lunbotatle .tatletextarea{
    width: 300px;
}
</style>
