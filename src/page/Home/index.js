import React from "react";

import {Link, Route} from 'react-router-dom'

import Index from '../Index'
import House from '../House'
import Profile from '../Profile'


class Homeindex extends React.Component{

  render() {
    return (
      <div>
        <Route exact path='/home' component={Index} />
        <Route  path='/home/house' component={House} />
        <Route  path='/home/profile' component={Profile} />

        <div>
          <Link to='/home'>首页</Link>
          <Link to='/home/house'>房屋列表</Link>
          <Link to='/home/profile'>个人中心</Link>
        </div>

      </div>
    )
  }
}
export default Homeindex
