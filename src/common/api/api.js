
// 公用文件请勿修改！！！！

const agree=getScheme();

module.exports={

    agree,//测试正式环境下通用url地址头部

    originPhp:agree+'wap.youdingkeji.com',//php域名

    originJava:agree+'api.youdingkeji.com',//java域名

    originWeb:agree+'web.youdingkeji.com',//web域名

    apiUrl:agree+'api.youdingkeji.com/yiding-rest/rest/activity/entry.json',//java活动接口
    
    downUrl:agree+'web.youdingkeji.com/sms/download/link.html',

   
}

function getScheme(){
    return(location.protocol==='https:'&&location.origin.indexOf('://t')==-1?'https://':'https://t')
}