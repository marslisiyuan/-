import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)

// 创建一个存储对象
export default new Vuex.Store({
    state:{
        show:true,
        isLoading:false,
        money:String,
        information:{},
        certification:{},
        version:'HZ-1.0.0',
        url:'http://hangzhou.llyzf.cn/lly-posp-proxy/request.app'
    },
    mutations:{
      shownav(state,newvalue){
         state.show=newvalue
      },
      updateLoadingState(state,flag){
          state.isLoading=flag
      },
      versionState(state,flag){
        state.isLoading=flag
    },
      changeMoney(state,num){
          state.money=num
      },
      storageInformation(stare,data){
          stare.information=data
      },
      certificationInfo(stare,data){
        stare.certification=data
    }
    },
    actions:{
        storageMoney(context,num){
            context.commit("changeMoney",num)
        }
    }
})