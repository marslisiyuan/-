<template>
    <div>
        <!-- 个人设置title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>个人设置</span>
            <span></span>
        </div>
        <!-- 设置填写内容 -->
        <form class="form-group">
            <div class="input-group">
                <div class="input-item">
                    <div class="item-logo"><i class="el-icon-star-on"></i><span class="item-text">头像</span></div>
                    <div class="item-right">
                        <div class="item-img"><img src="../../assets/drawable/mycustomer_weirenzheng.png" alt=""></div>
                        <!-- <input class="file-img" type="file" name="image" accept="image/*"> -->
                    </div>
                    <span class="sp-right"></span>
                    <!-- <img class="sp-right" src="../../assets/right.png" alt=""> -->
                </div>
                <div class="input-item">
                    <div class="item-logo"><i class="el-icon-edit-outline"></i> <span class="item-text">昵称</span></div>
                   
                    <div class="item-right">
                        <input type="text" v-if="bank.merchantCnName" :placeholder="bank.merchantCnName" readonly>
                    </div>
                    <span class="sp-right"></span>
                </div>
                <div class="input-item">
                    <div class="item-logo"><i class="el-icon-mobile-phone"></i><span class="item-text">手机号</span></div>
                    
                    <div class="item-right">
                        <input type="text" v-if="bank.linkPhone" :placeholder="bank.linkPhone" readonly>
                        <input type="tel" pattern="/^13\d{9}$/gi" required="required" placeholder="请输入常用手机号码">
                    </div>
                    <span class="sp-right"></span>
                </div>
                <!-- <div class="input-item">
                    <div class="item-logo"><i class="el-icon-view"></i><span class="item-text">登入密码</span></div>
                    
                    <div class="item-right">
                        <input type="tel"  placeholder="请输入登入密码">
                    </div>
                    <span class="sp-right"></span>
                </div> -->
                <div class="input-item">
                    <div class="item-logo"><i class="el-icon-info"></i><span class="item-text">实名认证</span></div>
                    
                    <router-link v-if="status!='10B'" tag="div" class="item-right" to="/user/Certification" >
                        <span>未认证</span>
                    </router-link>
                    <router-link tag="div" to="/user/attestationInfo" v-else class="item-right">
                        <span>已认证</span>
                    </router-link>
                    <span class="sp-right"></span>
                </div>
                <!-- <div class="input-item">
                     <div class="item-logo"></div>
                    <span class="item-text">所在地</span>
                    <div class="item-right">
                        <span>请选择</span>
                    </div>
                    <span class="sp-right"></span>
                </div> -->
                <!-- <div class="input-item">
                    <div class="item-logo"></div>
                    <span class="item-text">我的钱包</span>
                    <div class="item-right">
                    </div>
                    <span class="sp-right"></span>
                </div> -->
                <!-- <div class="input-item">
                    <div class="item-logo"></div>
                    <span class="item-text">我的银行卡</span>
                    <div class="item-right">
                    </div>
                    <span class="sp-right"></span>
                </div>
                <div class="input-item">
                    <div class="item-logo"></div>
                    <span class="item-text">我的信用卡</span>
                    <div class="item-right">
                    </div>
                    <span class="sp-right"></span>
                </div> -->
                <!-- <div class="input-item">
                    <div class="item-logo"></div>
                    <span class="item-text">微信号</span>
                    <div class="item-right">
                    </div>
                    <span class="sp-right"></span>
                </div> -->
                <!-- <div class="input-item">
                    <div class="item-logo"></div>
                    <span class="item-text">职业信息</span>
                    <div class="item-right">
                    </div>
                    <span class="sp-right"></span>
                </div> -->
               
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bank:'',
                status:''
            }
        },
        mounted() {
            this.$store.commit('shownav', false)
           this.bank=eval(JSON.parse(localStorage.getItem('info'))['42'])[0]
           if(localStorage.getItem('Certificationstatus')){
               this.status=localStorage.getItem('Certificationstatus')
              
           }else{
              this.status=this.bank.freezeStatus
              
           }
        //    console.log(eval(JSON.parse(localStorage.getItem('info'))['42']))
        //    console.log(eval(JSON.parse(localStorage.getItem('info'))['42'])[0])
        },
        methods:{
         backed(){
           window.history.go(-1)
         }
        }
    }
</script>
<style scoped="scoped">
        .form-group {
            margin-top: 1.466667rem;
        }
        .input-item {   
            position: relative;
            border-bottom: 1px solid #eee;
            line-height: 1.733333rem;
            height: 1.733333rem;
            padding: 0 0.266667rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: white;
        }
        /* .input-item .item-logo {
            display: inline-block;
            vertical-align: middle;
        } */
        .input-item .item-logo i{
            font-size: .533333rem;
            color: black;
        }
        .input-item .item-text {
            display: inline-block;
            margin-left:.133333rem;
            width: 1.866667rem;
        }
        .input-item .item-right {
            position: relative;
            display: inline-block;
            /* right: .266667rem; */
            height: 1.706667rem;
            text-align: right;
            width: 5.866667rem;
        }
        .input-item .item-right > input {
            /* height: 0.906667rem; */
            width: 5.866667rem;
            padding: 0 0.066667rem;
            text-align: right;
            border: none;
        }
        .input-item .item-img {
            position: absolute;
            width: 1.066667rem;
            height: 1.066667rem;
            overflow: hidden;
            border-radius: 50%;
            /* background: black; */
            
            margin: auto 0;
            top: 0;
            bottom: 0;
            right: 0;
        }
        .input-item .item-img img {
            width: 100%;
            /* top: 50%; */
            background: cadetblue;
        }
        .input-item .file-img {
            width: 2.666667rem;
            height: 1.066667rem;
            margin: auto 0;
            opacity: 0;
        }
        .input-item .sp-right {
            /* position: absolute; */
            display: inline-block;
            /* right: 0.533333rem; */
            width: 0.253333rem;
            height: 0.466667rem;
            background: url('../../assets/right.png');
            background-size: 100%;
            /* top: 0; */
            /* bottom: 0; */
            /* margin: auto 0; */
        }
</style>