import React from "react";

import './index.scss'
import {NavBar} from "antd-mobile";

/*
* 地图找房
* */

class Map extends React.Component{

  componentDidMount() {
    this.initMap()
  }

  // 初始化地图
  initMap = () => {
    const {BMapGL} = window
    // 创建地图实例
    const map = new BMapGL.Map("container");
    // 地图定位的经纬度设置（天安门）
    let point = new BMapGL.Point(116.404, 39.915);
    map.centerAndZoom(point,15)
  }


  render() {
    return (
      <div className={'mapBox'}>
        {/*导航条*/}
        <NavBar
          mode="light"
          onLeftClick={() => {
            this.props.history.goBack()
          }}
        >
          地图找房
        </NavBar>
        {/*地图*/}
        <div id={'container'}></div>
      </div>
    )
  }
}

export default Map
