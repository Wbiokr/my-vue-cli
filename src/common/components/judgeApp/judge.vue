<template>
    <div>
    
        <div class="noticeDown" :class="{current:current}">
    
            <h4>提示</h4>
    
            <p>请至本地打开app参与活动！</p>
    
            <p>如未安装app，点击“去下载app”参与！</p>
    
            <ul class="clearfix">
    
                <li @click='cancel'>取消</li>
    
                <li @click='down'>去下载APP</li>
    
            </ul>
    
        </div>
    
        <div class="zezhao" v-if='current'></div>
    
    </div>
</template>


<script>
    // import './judge.scss';
    
    import {
    
        agree
    
    } from '../../api/api.js';
    
    export default {
    
        props: ['current'],
    
        data: function() {
    
            return {
    
                dataTime: '',
    
                btnStatus: true,
    
            }
    
        },
    
        methods: {
    
            cancel: function() {
    
                this.$emit('update:current', false)
    
            },
    
            down: function() {
    
                this.$emit('update:current', false);
    
                window.location.href = agree + 'web.youdingkeji.com/sms/download/link.html';
    
            }
    
        }
    
    }
</script>