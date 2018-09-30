import Bankcard from '@/components/emptypay/bankCard'
import Passageway from '@/components/emptypay/passageway'
import Explain from '@/components/emptypay/explain'
import SaveImage from '@/components/emptypay/saveImage'
import Checkstand from '@/components/emptypay/checkstand'
import Trading from '@/components/emptypay/trading'
import emptyPayMoney from '@/components/emptypay/emptyPayMoney'
export default[
    {
        path:'/emptypay/bankcard',
        name:'Bankcard',
        component:Bankcard,
        meta: { 
            title:'请选择银行卡'
         }
    },{
        path:'/emptypay/trading',
        name:'Trading',
        component:Trading,
        meta:{
            title:'交易总额'
        }
    },{
        path:'/emptypay/passageway',
        name:'passageway',
        component:Passageway,
        meta:{
            title:'选择无卡通道'
        }
    },{
        path:'/emptypay/explain',
        name:'Explain',
        component:Explain,
        meta:{
            title:'通道说明'
        }
    },{
        path:'/tool/saveImage',
        name:'SaveImage',
        component:SaveImage,
        meta:{
            title:'我的海报'
        }
    },{
        path:'/checkstand',
        name:'Checkstand',
        component:Checkstand,
        meta:{
            title:'收银台'
        }
    },{
        path:'/emptyPayMoney',
        name:'emptyPayMoney',
        component:emptyPayMoney,
        meta:{
            title:'花呗回款'
        }
    }
]