import React from 'react';

import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
// 导入组件
import Index from "./page/Home/index";
import CityList from "./page/CityList";
import Map from "./page/Map/Map";
// 导入404页面
import Fn404 from './page/Fn404/index'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home" component={Index} />
          <Route path="/cityList" component={CityList} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/map" component={Map}/>
          {/* 404页面 */}
          <Route component={Fn404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
