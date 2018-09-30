import AddCard from "@/components/supportCard/addCard"
import Plan from "@/components/supportCard/plan"
import FormulatePlan from "@/components/supportCard/formulatePlan"
import PreviewPlan from "@/components/supportCard/previewPlan"
import PlanRecord from "@/components/supportCard/planRecord"
import MyData from "@/components/supportCard/myData"
import ViewPlan from "@/components/supportCard/viewPlan"
import PlanDetails from "@/components/supportCard/planDetails"
import BonusDetailed from "@/components/bonus/bonusDetailed"
import BonusXiangxi from "@/components/bonus/bonusXiangxi"
import Bonuscash from "@/components/bonus/bonuscash"
import Bonuscashdetail from "@/components/bonus/bonuscashdetail"
import Recharge from "@/components/supportCard/recharge"
import Deposit from "@/components/supportCard/deposit"
import CodeImg from "@/components/supportCard/codeImg"
import TiedCard from "@/components/supportCard/TiedCard"
import noreserve from "@/components/supportCard/noreserve"
import nrplanRecord from "@/components/supportCard/nrplanRecord"
import nrViewPlan from "@/components/supportCard/nrViewPlan"
import wkchannel from "@/components/supportCard/wkchannel"
export default[
    {
        path:'/supportCard/addCard',
        name:'AddCard',
        component:AddCard,
        meta:{
            title:'添加信用卡'
        }
    },
    {
        path:'/supportCard/Plan',
        name:'Plan',
        component:Plan,
        meta:{
            title:'养卡计划'
        }
    },
    {
        path:'/supportCard/Recharge',
        name:'Recharge',
        component:Recharge,
        meta:{
            title:'账户充值'
        }
    },
    {
        path:'/supportCard/CodeImg',
        name:'CodeImg',
        component:CodeImg,
        meta:{
            title:'我的二维码'
        }
    },
    {
        path:'/supportCard/Deposit',
        name:'Deposit',
        component:Deposit,
        meta:{
            title:'账户提现'
        }
    },
    {
        path:'/supportCard/formulatePlan',
        name:'FormulatePlan',
        component:FormulatePlan,
        meta:{
            title:'制定计划'
        }
    },
    {
        path:'/supportCard/previewPlan',
        name:'PreviewPlan',
        component:PreviewPlan,
        meta:{
            title:'预览计划'
        }
    },
    {
        path:'/supportCard/planRecord',
        name:'PlanRecord',
        component:PlanRecord,
        meta:{
            title:'预览详细计划'
        }
    },
    {
        path:'/supportCard/myData',
        name:'MyData',
        component:MyData,
        meta:{
            title:'我的资料'
        }
    },
    {
        path:'/supportCard/PlanDetails',
        name:'PlanDetails',
        component:PlanDetails,
        meta:{
            title:'计划详情'
        }
    },
    {
        path:'/supportCard/viewPlan',
        name:'ViewPlan',
        component:ViewPlan,
        meta:{
            title:'查看计划'
        }
    },
    {
        path:'/Bonus/BonusDetailed',
        name:'BonusDetailed',
        component:BonusDetailed,
        meta:{
            title:'分润明细'
        }
    },
    {
        path:'/Bonus/bonusXiangxi',
        name:'BonusXiangxi',
        component:BonusXiangxi,
        meta:{
            title:'分润详情'
        }
    },
    {
        path:'/Bonus/bonuscash',
        name:'Bonuscash',
        component:Bonuscash,
        meta:{
            title:'分润提现'
        }
    },
    {
        path:'/Bonus/bonuscashdetail',
        name:'Bonuscashdetail',
        component:Bonuscashdetail,
        meta:{
            title:'提现明细'
        }
    },
    {
        path:'/supportCard/TiedCard',
        name:'TiedCard',
        component:TiedCard,
        meta:{
            title:'落地商户'
        }
    },{
        path:'/supportCard/wkchannel',
        name:'wkchannel',
        component:wkchannel,
        meta:{
            title:'落地通道'
        }
    },
    {
        path:'/supportCard/nrplanRecord',
        name:'nrplanRecord',
        component:nrplanRecord,
        meta:{
            title:'无预留计划'
        }
    },
    {
        path:'/supportCard/nrViewPlan',
        name:'nrViewPlan',
        component:nrViewPlan,
        meta:{
            title:'无预留计划'
        }
    },
    {
        path:'/supportCard/noreserve',
        name:'noreserve',
        component:noreserve,
        meta:{
            title:'无预留计划'
        }
    }
]