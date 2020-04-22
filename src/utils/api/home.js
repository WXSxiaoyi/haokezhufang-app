// home页面用到的api接口
// 导入axios
import axios from '../axios'

/*
* home 接口
* */
// 获取轮播图数据
export function getSwiper() {
  return axios.get('/home/swiper')
}
