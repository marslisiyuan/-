import Account from '@/components/user/account'
import Service from '@/components/user/service'
import Buyvip from '@/components/user/buyvip'
import Rankinglist from '@/components/user/rankinglist'
import Helpcenter from '@/components/user/helpcenter'
import Manual from '@/components/user/Manual'
import Useflow from '@/components/user/useflow'
import Schedule from '@/components/user/schedule'
import Advice from '@/components/user/Advice'
import Invite from "@/components/user/invite"
import Poster from "@/components/user/poster"
import classroom from "@/components/user/classroom"
import PersonalSetting from "@/components/user/PersonalSetting"
import Certification from "@/components/user/certification"
import attestationInfo from "@/components/user/attestationInfo"
import Upload from "@/components/user/upload"
import Customer from "@/components/user/customer"
import Paymentdetail from "@/components/user/paymentdetail"
import Commission from "@/components/user/commission"
import Clientgrade from "@/components/user/clientgrade"
import SaveImageone from "@/components/emptypay/saveImageone"
import cardPay from "@/components/user/cardPay"
export default [
        {path: '/user/account',
        name:'account',
        component: Account,
        meta:{
            title:'账户管理'
            }
        },{
            path: '/user/service',
            name: 'Service',
            component: Service,
            meta:{
                title:'专属服务经理'
            }
        },{
            path: '/user/buy_vip',
            name: 'Buyvip',
            component: Buyvip,
            meta:{
                title:'升级代理'
            }
        },{
            path:'/user/rankinglist',
            name:'Rankinglist',
            component:Rankinglist,
            meta:{
                title:'排行榜'
            }
        },{
            path:'/user/help_center',
            name:'Helpcenter',
            component:Helpcenter,
            meta:{
                title:'帮助中心'
            }
        },{
            path:'/user/manual',
            name:'Manual',
            component:Manual,
            meta:{
                title:'平台手册'
            }
        },{
            path:'/user/Paymentdetail',
            name:'Paymentdetail',
            component:Paymentdetail,
            meta:{
                title:'收支明细'
            }
        },{
            path:'/user/attestationInfo',
            name:'attestationInfo',
            component:attestationInfo,
            meta:{
                title:'实名认证'
            }
        },{
            path:'/user/Commission',
            name:'Commission',
            component:Commission,
            meta:{
                title:'利润明细'
            }
        },{
            path:'/user/use_flow',
            name:'Useflow',
            component:Useflow,
            meta:{
                title:'卡盟流程说明'
            }
        },{
            path:'/user/schedule',
            name:'Schedule',
            component:Schedule,
            meta:{
              title:'信息查询'
            }
        },{
            path:'/user/advice',
            name:'Advice',
            component:Advice,
            meta:{
                title:'意见反馈'
            }
        },{
            path:'/user/poster',
            name:'Poster',
            component:Poster,
            meta:{
                title:'我的专属海报'
            }
        },{
            path:'/user/classroom',
            name:'Classroom',
            component:classroom,
            meta:{
                title:'课堂'
            }
        },{
            path:'/user/invite',
            name:'Invite',
            component:Invite,
            meta:{
                title:'去邀请好友'
            }
        },{
            path:'/user/PersonalSetting',
            name:'PersonalSetting',
            component:PersonalSetting,
            meta:{
                tltle:'个人设置'
            }
        },{
            path:'/user/Certification',
            name:'Certification',
            component:Certification,
            meta:{
                tltle:'实名认证'
            }
        },{
            path:'/user/upload',
            name:'Upload',
            component:Upload,
            meta:{
                tltle:'照片上传'
            }
        },{
            path:'/user/customer',
            name:'Customer',
            component:Customer,
            meta:{
                tltle:'我的客户'
            }
        },{
            path:'/tool/SaveImageone',
            name:'SaveImageone',
            component:SaveImageone,
            meta:{
                tltle:'好友邀请'
            }
        },{
            path:'/user/Clientgrade',
            name:'Clientgrade',
            component:Clientgrade,
            meta:{
                tltle:'等级升级'
            }
        },{
            path:'/user/cardPay',
            name:'cardPay',
            component:cardPay,
            meta:{
                tltle:'卡包付费'
            }
        }
    ]
