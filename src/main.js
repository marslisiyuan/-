// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './static/js/flexible.js';
import './static/css/index.css';
import store from './store/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import "./static/js/jquery.cookie"
import "./static/js/jquery.md5.js"
import "./static/js/jquery.qrcode.min.js"
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import qs from 'qs';
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' });

// Vue.use(VueAxios, axios)
Vue.use(VueResource)
// router.beforeEach((to, from, next) => {
//   const role = localStorage.getItem('ms_username');
//   if(!role && to.path !== '/backstage/login'){
//       next('/backstage/login');
//   }else if(to.meta.permission){
//       // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//       role === 'admin' ? next() : next('/backstage/403');
//   }else{
//       // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//       if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
//           Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//               confirmButtonText: '确定'
//           });
//       }else{
//           next();
//       }
//   }
// })

// Vue.prototype.settime=function(){
//   var times=5;
//  (function(){
//   if(times=='0'){
//     clearInterval(settime)
//     var merchantNo=$.parseJSON(JSON.parse(localStorage.getItem('info'))['42'])[0].merchantNo
//     var MAC=$.md5('0700490020'+merchantNo+'HZ-1.0.0'+'21E4ACD4CD5D4619B063F40C5A454F7D')
//     $.ajax({
//       type:"get",
//       url:"http://hangzhou.llyzf.cn/lly-posp-proxy/uploadImage.app?0=0700&3=490020&42="+merchantNo+'&59=HZ-1.0.0&MAC='+MAC,
//       success:function(res){
//         console.log(res)
//       }
//     })
//   }else{
//     times--;
//     console.log('aa')
//     // console.log(this.$store.state.version)
//   }
//  })()
// }
// Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

