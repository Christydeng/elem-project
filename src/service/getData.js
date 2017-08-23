import Vue from 'vue';

const  baseUrl = 'http://cangdu.org:8001';

export  const global = {
    /*
     * 统一接口处理：get请求方法封装。this.$http.get(url, [options])
     * @param url { String } -必选 接口url
     * @param options { Object } -必选 含官方的所有options对象。传参为{params:{key:11}}
     * @param sucCb { Function } -必选 成功回调
     * @param errorCb { Function } -可选 失败回调
     * @param isLoading { Boolean } -可选 是否显示加载状态
     * @param isLogin { Boolean } -可选 是否登陆信息（移动端使用得较多，设置头部信息）
     */

    get: function( url, options, sucCb, errorCb, isLoading, isLogin ){
        
        if(!url){
            console.log('请传接口url');
            return false ;
        }
        //请求路径拼接
        url = baseUrl + url;

        //默认laoding状态
        var isLoading = isLoading===undefined ||(isLoading!==undefined && isLoading !== false )? true : false;  

        //遮罩层
        if(isLoading){
            var loadingInstance = Loading.service();
        }
        Vue.http.get(url, options).then((response) => {
            // 响应成功回调
            sucCb(response);
            if(isLoading){
               loadingInstance.close();
            }
        }, (response) => {
            // 响应错误回调
            errorCb(response);
            if(isLoading){
               loadingInstance.close();
            }
        })
    },
}

export const getUser = null;

export const getAddressList = null;