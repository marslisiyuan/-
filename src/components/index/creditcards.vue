<template>
  <div>
              <!-- 办卡中心title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>办卡中心</span>
            <span></span>
        </div>
         
        <!-- 最热门信用卡办理通道 -->
        <div class="titlenext">
            <h5 class="banktitle">最新热门信用卡办理通道</h5>
            <div class="hotBankcard">
                <div class="item-bank">
                   <img src="" alt="">
                   <div>
                       <h3>交通银行</h3>
                       <p>速度快 额度高</p>
                   </div>
                </div>
                <div class="item-bank">
                    <img src="" alt="">
                    <div>
                        <h3>交通银行</h3>
                        <p>速度快 额度高 刷满3笔免年费</p>
                    </div>
                </div>
                <div class="item-bank">
                    <img src="" alt="">
                    <div>
                        <h3>交通银行</h3>
                        <p>速度快 额度高</p>
                    </div>
                </div>
                <div class="item-bank">
                    <img src="" alt="">
                    <div>
                        <h3>交通银行</h3>
                        <p>速度快 额度高 刷满3笔免年费</p>
                    </div>
                </div>
             </div>
        </div>

        <!-- 办卡各大银行引用卡 邀请办卡得佣金 -->
        <div class="invitationCard">
            <div class="banktitle">
                办卡各大银行引用卡 邀请办卡得佣金
            </div>
            <ul class="invitationCard_ul">
                <li>
                    <div class="logo">
                        <img src="" alt="">
                    </div>
                    <div class="content">
                          <div class="bankname">
                              <h3>华夏人民</h3>
                              <p>奖金<span style="font-size:.48rem;color:#e70113;font-weight:700;letter-spacing: 3px;">120</span>元</p>
                          </div>
                          <div>
                              <div class="batchRate">批卡率</div>
                              <div class="divprogress"><el-progress :percentage="70"></el-progress></div>
                          </div>
                    </div>
                    <div class="peoplenum">
                        <div>申请人数:68万</div>
                        <p style="color:#e70113;padding-bottom:0.2rem;">自动结算</p>
                    </div>
                </li>
                <li>
                    <div class="logo">
                        <img src="" alt="">
                    </div>
                    <div class="content">
                          <div class="bankname">
                              <h3>华夏人民</h3>
                              <p>奖金<span style="font-size:.48rem;color:#e70113;font-weight:700;letter-spacing: 3px;">120</span>元</p>
                          </div>
                          <div>
                              <div class="batchRate">批卡率</div>
                              <div class="divprogress"><el-progress :percentage="70"></el-progress></div>
                          </div>
                    </div>
                    <div class="peoplenum">
                        <div>申请人数:68万</div>
                        <p style="color:#e70113;padding-bottom:0.2rem;">自动结算</p>
                    </div>
                </li>
                <li>
                    <div class="logo">
                        <img src="" alt="">
                    </div>
                    <div class="content">
                          <div class="bankname">
                              <h3>华夏人民</h3>
                              <p>奖金<span style="font-size:.48rem;color:#e70113;font-weight:700;letter-spacing: 3px;">120</span>元</p>
                          </div>
                          <div>
                              <div class="batchRate">批卡率</div>
                              <div class="divprogress"><el-progress :percentage="70"></el-progress></div>
                          </div>
                    </div>
                    <div class="peoplenum">
                        <div>申请人数:68万</div>
                        <p style="color:#e70113;padding-bottom:0.2rem;">自动结算</p>
                    </div>
                </li>
                <li>
                    <div class="logo">
                        <img src="" alt="">
                    </div>
                    <div class="content">
                          <div class="bankname">
                              <h3>华夏人民</h3>
                              <p>奖金<span style="font-size:.48rem;color:#e70113;font-weight:700;letter-spacing: 3px;">120</span>元</p>
                          </div>
                          <div>
                              <div class="batchRate">批卡率</div>
                              <div class="divprogress"><el-progress :percentage="70"></el-progress></div>
                          </div>
                    </div>
                    <div class="peoplenum">
                        <div>申请人数:68万</div>
                        <p style="color:#e70113;padding-bottom:0.2rem;">自动结算</p>
                    </div>
                </li>
                <li>
                    <div class="logo">
                        <img src="" alt="">
                    </div>
                    <div class="content">
                          <div class="bankname">
                              <h3>华夏人民</h3>
                              <p>奖金<span style="font-size:.48rem;color:#e70113;font-weight:700;letter-spacing: 3px;">120</span>元</p>
                          </div>
                          <div>
                              <div class="batchRate">批卡率</div>
                              <div class="divprogress"><el-progress :percentage="70"></el-progress></div>
                          </div>
                    </div>
                    <div class="peoplenum">
                        <div>申请人数:68万</div>
                        <p style="color:#e70113;padding-bottom:0.2rem;">自动结算</p>
                    </div>
                </li>
            </ul>
        </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
             version:'',
            }
        },
        mounted(){
            this.$store.commit('shownav',false)
            this.version=this.$store.state.version
            var merchantidNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
            var MAC=$.md5('0700590001'+merchantidNo+this.version+'21E4ACD4CD5D4619B063F40C5A454F7D')
            this.$http.post(
                'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app',
                {    
                      '0':'0700',
                      '3':'590001',
                      '42':merchantidNo,
                      '59':this.version,
                      '64':MAC
                  },
                  {
                emulateJSON:true
                }).then(function(res){
                //   console.log(res)
                })
        },
        methods:{
            backed(){
                window.history.go(-1)
            }
        }
    }
</script>
<style scoped="scoped">
      .divprogress{
          margin-top: .133333rem;
      }
      .banktitle{
         background: #40a0da;
         color: white;
         text-align: center;
         padding:.133333rem 0;
      }
      .hotBankcard{
          padding: 0 .4rem .133333rem .4rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
      }
      .hotBankcard .item-bank{
          display: flex;
          width: 4.48rem;
          height: 2.266667rem;
          background: white;
          margin-top: .266667rem;
          border-radius: .133333rem;
          padding: .133333rem;
      }
      .hotBankcard .item-bank img{
          width: 2.133333rem;
          height: 2.133333rem;
      }
      .hotBankcard .item-bank>div{
          height: 2.133333rem;
          padding:.266667rem 0  0 .133333rem;
          flex-grow: 1;
      }
      .hotBankcard .item-bank>div h3{
          font-size: .373333rem;
          font-weight:600;
          color: #333;
          border-bottom: 2px solid #999;
          padding: .133333rem;
      }
      .hotBankcard .item-bank>div p{
          width: 2.133333rem;
          font-size: .32rem;
          transform-origin: 0;
          transform: scale(0.90);
      }
      .invitationCard{
          margin-top: .266667rem;
      }
      .invitationCard_ul li{
         height: 2.266667rem;
         background: white;
         margin-top: .133333rem;
         padding: .266667rem .133333rem .133333rem .266667rem;
         display: flex;
         align-items: center;
         justify-content: space-between;
      }
      .invitationCard_ul li .logo{
          width: 2.4rem;
          height: 1.733333rem;
          background: royalblue;
      }
      .invitationCard_ul li .content{
          height: 1.733333rem;
          flex-grow: 1;
          padding-left: .266667rem;
          margin-right:.4rem;
          border-left: 1px solid #999;
      }
      .content{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
      }
      .bankname{
          display: flex;
          justify-content: space-between;
      }
      .bankname h3{
          font-size: .426667rem;
          color: #333;
          font-weight: 600;
      }
      .bankname p{
          font-size: .32rem;
          transform-origin: 0;
          transform: scale(0.9);
      }
      .peoplenum{
          height: 2.266667rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          font-size: .32rem;
          transform-origin: 0;
          transform: scale(0.9)
      }
     .batchRate{
         font-size:.32rem;
         margin-bottom: -0.2rem;
     }
</style>
