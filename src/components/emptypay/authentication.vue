<template>
    <div>
        <div class="title">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>实名认证</span><span></span>
        </div>
        <div class="stepsm" >
             <Steps :current="current" size="small">
                <Step title="资料信息"></Step>
                <Step title="证件审核"></Step>  
                <Step title="审核完成"></Step>      
            </Steps>
        </div>
        <div class="certificationText">
            请如实填写储蓄卡信息
        </div>
        <div class="cardinfo">
            <input type="text" placeholder="请输入姓名">
            <input type="text" placeholder="请输入身份证号码">
            <input type="text" placeholder="请输入您的储蓄卡号">
            <select>
                <option value="">请选择银行名称</option>
                <option value="">北京银行</option>
                <option value="">光大银行</option>
                <option value="">广发银行</option>
                <option value="">建设银行</option>
                <option value="">交通银行</option>
                <option value="">民生银行</option>
                <option value="">农业银行</option>
                <option value="">平安银行</option>
                <option value="">浦发银行</option>
            </select>
        </div>
        <div class="cardbutton">
            <button type="primary" @click="next">下一步</button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                 current: 0,
            }
        },
          methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>
<style scoped="scoped">
.stepsm{
background: white;
padding:.4rem;
}
.certificationText{
    text-align: center;
    margin-top: .533333rem;
    font-size: .533333rem;
    color: red;
}
.cardinfo{
    margin: .533333rem;
}
.cardinfo input{
    width: 100%;
    font-size: .426667rem;
    height:.933333rem;
    border: none;
    margin-bottom: .266667rem;
    padding: 0 .266667rem;
}
.cardinfo select{
    width: 100%;
    font-size: .426667rem;
    height:.933333rem;
    border: none;
    padding: 0 .266667rem;
    margin-bottom: .266667rem;
}
.cardbutton{
    margin:1.066667rem .533333rem;
}
.cardbutton button{
    width: 100%;
    background: #3399ff;
    color: white;
    border: none;
    height: 1.066667rem;
    font-size: .426667rem;
    border-radius: .133333rem;
}
</style>
