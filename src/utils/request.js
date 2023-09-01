import axios from "axios";
//二次封装axios
const https = axios.create({
    baseURL:'/api',//通用请求前缀比如百度的就是https://www.baidu.com
    timeout:10000,//超时时间，最多请求10s，否则取消请求
})


//添加拦截器 
https.interceptors.request.use(function(config){
    //发送请求前做些什么
    return config
},function(error){
    //错误之后做什么
    return Promise.reject(error)
})


//同上不过是响应的时候接收到数据
https.interceptors.response.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
})

export default https