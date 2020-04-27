import React from "react";
// 导入组件
import {Carousel, Flex, Grid, SearchBar, WingBlank} from "antd-mobile";
// 导入样式
import './index.scss'
// 导入axios
// 导入url
import {BASE_URL} from '../../utils/axios'
import {getGroup, getNews, getSwiper} from "../../utils/api/home";
// 导入一些数据
import navs from "../../utils/home/navs";

class Index extends React.Component {
  state = {
    swiper: [],
    group: [],
    news: [],
    imgHeight: 234,
    isPlay: false,
    keyword: '',
    currCity: {
      label: '北京',
      value: ''
    }
  }

  componentDidMount() {
    this.loadDatas()
  }

  // 获取初始化数据
  loadDatas = async () => {
    const apis = [getSwiper(), getGroup(this.state.currCity.value), getNews(this.state.currCity.value)];
    let res = await Promise.all(apis);
    this.setState({
      swiper: res[0].data,
      group: res[1].data,
      news: res[2].data
    }, () => {
      this.setState({
        isPlay: true
      })
    })
  }
  // 轮播图、
  renderCarousel = () => {
    // console.log('d', this.state.swiper);
    return this.state.swiper.map(val => (
      <a
        key={val.id}
        href="http://www.itheima.com"
        style={{display: 'inline-block', width: '100%', height: this.state.imgHeight, background: 'gray'}}
      >
        <img
          src={`${BASE_URL}${val.imgSrc}`}
          alt=""
          style={{width: '100%', verticalAlign: 'top'}}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event('resize'));
            this.setState({imgHeight: 'auto'});
          }}
        />
      </a>
    ))
  }


  // 栏目组数据
  renderNav = () => {
    return navs.map((item) => (
      <Flex.Item key={item.id} onClick={() => this.props.history.push(item.path)}>
        <img src={item.img} alt=""/>
        <p>{item.title}</p>
      </Flex.Item>
    ))
  }


  // 渲染租房小组
  renderGroup = () => {
    return (
      <div>
        {/*标题*/}
        <Flex className="group-title" justify="between">
          <h3>租房小组</h3>
          <span>更多</span>
        </Flex>
        {/*宫格*/}
        <Grid
          data={this.state.group}
          columnNum={2}
          // 关闭默认正方形
          square={false}
          hasLine={false}
          renderItem={item => {
            return (
              // item结构
              <Flex className="grid-item" justify="between">
                <div className="desc">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <img src={`http://localhost:8080${item.imgSrc}`} alt=""/>
              </Flex>
            )
          }}
        />
      </div>
    )
  }

  // 渲染最新资讯
  renderNews() {
    return this.state.news.map(item => (
      <div className="news-item" key={item.id}>
        <div className="imgwrap">
          <img
            className="img"
            src={`http://localhost:8080${item.imgSrc}`}
            alt=""
          />
        </div>
        <Flex className="content" direction="column" justify="between">
          <h3 className="title">{item.title}</h3>
          <Flex className="info" justify="between">
            <span>{item.from}</span>
            <span>{item.date}</span>
          </Flex>
        </Flex>
      </div>
    ))
  }

  // 渲染顶部导航
  renderTopNav = () => {
    const { push } = this.props.history;
    return (
      <Flex justify="around" className="topNav">
        <div className="searchBox">
          <div className="city" onClick={() => push('/cityList')}>
            {this.state.currCity.label}<i className="iconfont icon-arrow" />
          </div>
          <SearchBar
            value={this.state.keyword}
            onChange={(v) => this.setState({ keyword: v })}
            placeholder="请输入小区或地址"
          />
        </div>
        <div className="map">
          <i key="0" className="iconfont icon-map" onClick={() => push('/map') }/>
        </div>
      </Flex>
    )
  }


  render() {
    return (
      <div>
        {/*顶部导航*/}
        <div>
          {this.renderTopNav()}
        </div>
        {/* 轮播图效果*/}
        <Carousel
          autoplay={this.state.isPlay}
          infinite
          autoplayInterval={'2000'}
        >
          {this.renderCarousel()}
        </Carousel>
        {/*  栏目导航数据*/}
        <Flex className={'nav'}>
          {
            this.renderNav()
          }
        </Flex>
        {/*  租房小组数据  */}
        <div className={'group'}>
          {this.renderGroup()}
        </div>
        {/*  最新资讯数据 */}
        <div className={'news'}>
          <h3 className={'group-title'}>最新资讯</h3>
          <WingBlank size="md">{this.renderNews()}</WingBlank>
        </div>
      </div>
    );
  }
}

export default Index
