<template>
  <div>
      <!-- 好友列表搜索 -->
      <div class="inner">
          <i class="el-icon-search" style="font-size:.533333rem;"></i>
          <input type="text" placeholder="在好友列表中搜索">
          <button>搜索</button>
      </div>
      <!-- 添加同行 -->
      <div class="add-friend">
        <div></div><span>添加同行</span>
      </div>
  </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style scoped="scoped">
.inner{
    
    margin: 1.466667rem auto .266667rem auto;
    width: 9.466667rem;
    padding: 0 .333333rem;
    height: 1.2rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
    background: white;
    border-radius: .133333rem;
}
.inner .ivu-icon{
font-size: .666667rem;
color: #666;
}
.inner input{
    height: .8rem;
    border: none;
    margin-left:-0.533333rem;
}
.inner button{
border-radius: .133333rem;
width: 1.333333rem;
height: .8rem;
border: none;
background:#3dbcf0;
color: white;
}
.add-friend div{ 
    width: 34px;
    height: 34px;
    background: #3dbcf0;
}
.add-friend span{
    padding-left: .266667rem;
}
.add-friend{
   width: 100%;
   display: flex;
   align-items: center;
   background: white;
   padding: .4rem .333333rem;
}
</style>
