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

// 获取租房小组数据
export const getGroup = (area = 'AREA%7C88cff55c-aaa4-e2e0') => {
  return axios.get(`/home/groups?area=${area}`)
}

// 获取新闻
export const getNews = (area = 'AREA|88cff55c-aaa4-e2e0') => {
  return axios.get(`/home/news?area=${area}`)
}
