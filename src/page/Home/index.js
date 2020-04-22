import React from "react";

import {Route} from 'react-router-dom'

import {TabBar} from 'antd-mobile';
// 导入组件
import House from "../House/index";
import Index from "../Index/index";
import Profile from "../Profile/index";
// 导入样式
import './index.css'
// 导入数据
import tabBarConfig from '../../utils/tabBarConfig'

// 组件
class Homeindex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.location.pathname
    };
  }

  renderTabBar = () => {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition="bottom"
        noRenderContent={true}
      >
        {
          tabBarConfig.map((item) => <TabBar.Item
              title={item.title}
              key={item.path}
              icon={
                <i className={`iconfont ${item.icon}`} />
              }
              selectedIcon={<i className={`iconfont ${item.icon}`} />}
              selected={this.state.selectedTab === item.path}
              onPress={() => {
                this.props.history.push(item.path);
                this.setState({
                  selectedTab: item.path,
                });
              }}
            />
          )
        }
      </TabBar>
    )
  }

  render() {
    return (
      <div>
        <Route exact path="/home" component={Index}/>
        <Route path="/home/house" component={House}/>
        <Route path="/home/profile" component={Profile}/>
        <div className="barBox">
          {this.renderTabBar()}
        </div>
      </div>
    )
  }
}

export default Homeindex
