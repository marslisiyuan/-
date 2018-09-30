<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 首页</el-breadcrumb-item>
                <el-breadcrumb-item>无卡通道</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
         <div class="container">
            <div class="lunboimage">
                <h3>无卡通道</h3>
                <div class="lunboload">
                   <p>通道名称：<input type="text"></p>
                   <p>单笔额度：<input type="text"></p>
                   <p>提现时间：<input type="text"></p>
                   <p>通道说明：<input type="text"></p>
                    <p>通道说明图:<input type="file"></p>
                    <button>提交</button>
                </div>
                <table class="lunbotatle">
                    <tr>
                        <td>无卡通道名称</td>
                        <td>单笔额度</td>
                        <td>提现时间</td>
                        <td>通道说明</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>易宝</td>
                        <td>单笔额度：10-50000/笔 费率:0.54</td>
                        <td>提现时间：0:00-22:00</td>
                        <td>结算:2元/笔，365天秒到，招商、交通暂不支持</td>
                        <td><button>删除</button></td>
                    </tr>
                    <tr>
                        <td>易宝</td>
                        <td>单笔额度：10-50000/笔 费率:0.54</td>
                        <td>提现时间：0:00-22:00</td>
                        <td>结算:2元/笔，365天秒到，招商、交通暂不支持</td>
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
