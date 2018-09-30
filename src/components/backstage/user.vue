<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 首页</el-breadcrumb-item>
                <el-breadcrumb-item>个人中心</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
         <div class="container">
            <div class="lunboimage">
                <h3>个人中心功能导航</h3>
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
                        <td>功能图片</td>
                        <td>功能网址</td>
                        <td>功能开关</td>
                        <td>操作</td>
                    </tr>
                    <tr>
                        <td>账户管理</td>
                        <td><img src="" alt=""></td>
                        <td>www.baidu.com</td>
                        <td><input type="checkbox" @change="select($event)"></td>
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
            return{

            }
        },mounted(){

        },
        methods:{
            select(event){
               console.log($(event.currentTarget).is(':checked'))
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
</style>
