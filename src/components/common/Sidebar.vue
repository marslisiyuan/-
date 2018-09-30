<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: '/backstage/dashboard',
                        title: '系统导航',
                         subs: [
                            {   
                                index: '/backstage/indexImage',
                                title: '首页图片'
                            },{   
                                index: '/backstage/user',
                                title: '个人中心'
                            },{   
                                index: '/backstage/notify',
                                title: '客服'
                            }
                        ]
                    },{
                        icon: 'el-icon-setting',
                        index: '3',
                        title: '首页',
                         subs: [
                            {   
                                index: '/backstage/tool',
                                title: '展业图片'
                            },{   
                                index: '/backstage/emptypay',
                                title: '无卡支付'
                            },{   
                                index: '/backstage/creditcard',
                                title: '办卡中心'
                            },{   
                                index: '/backstage/increase_cheats',
                                title: '金融秘籍'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '1',
                        title: '个人中心',
                         subs: [
                            {   
                                index: '/backstage/rule',
                                title: '常见问题'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-warning',
                        index: '/backstage/permission',
                        title: '权限测试'
                    },
                    {
                        icon: 'el-icon-error',
                        index: '/backstage/404',
                        title: '404页面'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
