import React from "react";
// 导入组件
import {Carousel} from "antd-mobile";
// 导入axios
// 导入url
import {BASE_URL} from '../../utils/axios'
import {getSwiper} from "../../utils/api/home";


class Index extends React.Component{
  state = {
    // 轮播图数据
    swiper: [],
    //  轮播图的默认高度
    imgHeight: 176,
    isPlay: false
  }
  componentDidMount() {
    this.getSwiper()
  }
  // 获取轮播图数据
  getSwiper = async() => {
    const {status, data} = await getSwiper()
    if (status === 200) {
      this.setState({
        swiper: data,
      },() => {
        // 确保swiper已经有数据了，
        this.setState({
          isPlay: true
        })
      })
    }
  }

  render() {
    return (
      <div>
        {/*
        autoplay 设置自动播放
        infinite 是否循环无限循环，默认是false
        beforeChange 切换时触发的事件
        afterChange  切换时触发的事件
        */}
        {/* 轮播图效果*/}
        <Carousel
          autoplay={this.state.isPlay}
          infinite
          autoplayInterval={'2000'}
        >
          {this.state.swiper.map(val => (
            <a
              key={val.id}
              href="http://www.itheima.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`${BASE_URL+val.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  // 窗口大小改变的时候=》自适应，将图片自适应（**移动端适配用的）
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Index
