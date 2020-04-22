// 这个位置放置axios的配置
// 导入axios
import axios from 'axios'
// 导入一个组件，为了加载动画效果
import {Toast} from 'antd-mobile'

// BaseUrl
const BASE_URL = 'http://localhost:8080'

// 创建一个新的axios对象
const instance = axios.create({
  baseURL: BASE_URL
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  Toast.loading('加载中...', 0);

  // const { url } = config;
  // if (url.startsWith('/user') && !url.startsWith('/user/registered') &&
  //   !url.startsWith('/user/login')) {}
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
  Toast.hide()

  const data = {
    status: response.data.status,
    data: response.data.body
  }
  if (response.data.description) data.description = response.data.description;
  return data;
}, function (error) {

  return Promise.reject(error);
});



// 导出BaseUrl
export {BASE_URL}

// 导出这个新对象
export default instance
