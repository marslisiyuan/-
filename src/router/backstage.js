// import Backstage from '@/components/common/Backstage'
export default[
    {
        path: '/backstage',
        redirect: '/backstage/indexImage'
    },
       {
        path: '/backstage',
        component: resolve => require(['../components/common/Backstage.vue'], resolve),
        meta: { title: '自述文件' }
        ,
        children:[
            {
                path: '/backstage/dashboard',
                component: resolve => require(['../components/backstage/Dashboard.vue'], resolve),
                meta: { title: '系统首页' }
            },
            {
                // 个人中心
                path: '/backstage/user',
                component: resolve => require(['../components/backstage/user.vue'], resolve),
                meta: { title: '个人中心' }
            },
            {
                // 客服
                path: '/backstage/notify',
                component: resolve => require(['../components/backstage/notify.vue'], resolve),
                meta: { title: '客服' }
            },
            {
                // 展业图片
                path: '/backstage/tool',
                component: resolve => require(['../components/backstage/tool.vue'], resolve),
                meta: { title: '展业图片' }
            },
            {
                // 无卡支付
                path: '/backstage/emptypay',
                component: resolve => require(['../components/backstage/emptypay.vue'], resolve),
                meta: { title: '无卡支付' }
            },
            {
                // 办卡中心
                path: '/backstage/creditcard',
                component: resolve => require(['../components/backstage/creditcard.vue'], resolve),
                meta: { title: '办卡中心' }
            },
            {
                // 常见问题
                path: '/backstage/rule',
                component: resolve => require(['../components/backstage/rule.vue'], resolve),
                meta: { title: '常见问题' }
            },
            {
                // 金融秘籍
                path: '/backstage/increase_cheats',
                component: resolve => require(['../components/backstage/increase_cheats.vue'], resolve),
                meta: { title: '金融秘籍' }
            },
         
            {
                // 首页图片
                path: '/backstage/indexImage',
                component: resolve => require(['../components/backstage/indexImage.vue'], resolve),
                meta: { title: '首页图片'}
            },
            {
                // 权限页面
                path: '/backstage/permission',
                component: resolve => require(['../components/backstage/Permission.vue'], resolve),
                meta: { title: '权限测试', permission: true }
            }
        ]
    },
    {
        path: '/backstage/login',
        component: resolve => require(['../components/backstage/Login.vue'], resolve)
    },
    {
        path: '/backstage/404',
        component: resolve => require(['../components/backstage/404.vue'], resolve)
    },
    {
        path: '/backstage/403',
        component: resolve => require(['../components/backstage/403.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/backstage/404'
    }
]