<template>
    <div class="index">
        <el-row class="header">
            <el-col :span="24" class="">
                <router-link to="/"><img src="../../../logo.png" class="header-logo" ></router-link>
                <ul class="header-operations">
                    <li><img :src="user.avator" class="img-circle"></li>
                    <li class="text">你好，{{user.position}}-{{user.id}}</li>
                </ul>
            </el-col>
        </el-row>
        <el-row class="container">
            <el-col :span="4" class="menu-container">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title"><i class="fa fa-shopping-bag"></i>产品</template>
                            <router-link to="/inventory" tag="li"><el-menu-item index="1-1">检索库存</el-menu-item></router-link>
                            <el-menu-item index="1-2">SKU-同步</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2"><i class="fa fa-truck"></i>物流</el-menu-item>
                    <el-menu-item index="3"><i class="fa fa-exchange"></i>网站对接</el-menu-item>
                    <el-menu-item index="3"><i class="fa fa-calculator "></i>账务明细</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="20" class="content-container">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                user: {
                    id: 'SKT7629',
                    position: '运营专员',
                    avator: 'http://img.chinatimes.com/newsphoto/2015-07-24/656/20150724002279.jpg'
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .index
        height 100%
        .header
            width 100%
            padding 0 20px
            box-sizing border-box
            background-color rgb(32,160,255)
            .header-logo
                display inline-block
                border-style none
                padding 10px
                margin 10px
            .header-operations
                display inline-block
                float right
                padding-right 30px
                height 100%
                list-style none outside none
                margin 0
                bottom 0
                li
                    color #fff
                    display inline-block
                    vertical-align middle
                    padding 0
                    margin 0 10px
                    line-height 80px
                    cursor pointer
                    .img-circle
                        border-radius 50%
                        width 50px
                        height 50px
                        vertical-align middle
        .container
            height 100%
            .menu-container
                height 100%
                .el-menu
                    height 100%
                    font-size 50px
                    .fa
                        margin-right 8px
            .content-container
                height 100%
                padding 25px
</style>