<template>
    <div>
        <!-- 平台手册title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>平台手册</span>
            <span></span>
        </div>

        <!-- 平台手册导航 -->
        <ul class="ptscul">
            <li class="on"  @click.capture="togglenav($event)">
                <P>
                    <span>概述</span>
                </P>
            </li>
            <li @click.capture="togglenav($event)">
                <P>
                    <span>首页</span>
                </P>
            </li>
            <li @click.capture="togglenav($event)">
                <P>
                    <span>抢单</span>
                </P>
            </li>
            <li @click.capture="togglenav($event)">
                <P>
                    <span>车险</span>
                </P>
            </li>
            <li @click.capture="togglenav($event)">
                <P>
                    <span>消息</span>
                </P>
            </li>
            <li @click.capture="togglenav($event)">
                <P>
                    <span>个人中心</span>
                </P>
            </li>
        </ul>

        <!-- 订单查询介绍图 -->
        <div>
            <img src="" alt=""></div>
        </div>

    </template>
    <script>
        export default {
            data() {
                return {}
            },
            mounted() {
                this
                    .$store
                    .commit('shownav', false)
                // console.log(this.$store.state.show)
                //   $('.nav-list').css('display','none')
            },
            methods: {
                backed() {
                    window,
                    history.go(-1)
                },
                togglenav(event){
                    $(event.currentTarget).addClass('on').siblings().removeClass('on')
                }
            }
        }
    </script>
    <style scoped="scoped">
        .ptscul {
            position: fixed;
            overflow-x: auto;
            width: 100%;
            top: 1.2rem;
            box-shadow: 0 0.3125rem 0.625rem rgba(0,0,0,.3);
            white-space: nowrap;
            font-size: 0;
            background-color: #fff;
        }
        .ptscul li {
            display: inline-block;
            font-size: 0;
        }
        .ptscul li P {
            display: block;
            padding: 0 0.4rem;
            font-size: 0.4rem;
        }
        .ptscul li P span {
            position: relative;
            display: block;
            height: 1.066667rem;
            line-height: 1.066667rem;
        }
        .ptscul .on span{
            color: #4196ff;
        }
        .ptscul .on span::after{
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: .053333rem;
            background-color: #4196ff;
        }
    </style>