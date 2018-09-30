<template>
    <div>
        <!-- 专属客户经理title -->
        <div class="title titlefixed">
            <div @click="backed"><img src="../../assets/left.png" alt=""></div>
            <span>我的专属海报</span>
            <span></span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'fourone',
        data() {
            return {

            }
        },
        mounted(){
            this.$store.commit('shownav',false)
        },
        methods:{
            backed(){
                window.history.go(-1)
            }
        }
    }
</script>
<style scoped="scoped"></style>