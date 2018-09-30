<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 首页</el-breadcrumb-item>
                <el-breadcrumb-item>办卡中心</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
         <div class="container">
            <div class="lunboimage">
                <h3>办卡中心</h3>
                <div class="lunboload">
                   <p>银行卡名称：<input type="text"></p>
                   <p>银行卡logo：<input type="file" accept="image/*"></p>
                   <p>银行卡批卡率：<input type="text"></p>
                   <p>银行卡奖金：<input type="text"></p>
                    <button>提交</button>
                </div>
                <table class="lunbotatle">
                    <tr>
                        <td>银行卡名称</td>
                        <td>银行卡logo</td>
                        <td>银行卡批卡率</td>
                        <td>银行卡奖金</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>华夏银行</td>
                        <td><img src="" alt=""></td>
                        <td>75%</td>
                        <td>120元</td>
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
