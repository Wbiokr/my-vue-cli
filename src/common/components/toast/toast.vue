<template>
    <div class="toast">
        <transition name='toast'>
            <div class="toast-content" v-if='toastShow'>
                {{toastTxt}}
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        props: ['toastTxt', 'toastShow'],
        
    }
</script>
<style lang="stylus">
    .toast
        position fixed
        bottom 180px
        left 50%
        margin-left -50%
        width 100%
        .toast-content
            margin 0 auto
            background rgba(0,0,0,.6)
            width 600px
            padding 25px 20px
            color rgba(255,255,255,.8)
            font-size 26px
            text-align center
            line-height 36px
    .toast-enter-active,.toast-leave-active
        transition all linear .3s
    .toast-enter,.toast-leave-to
        opacity 0
        transform scale(0)
        background rgba(0,0,0,0)
</style>