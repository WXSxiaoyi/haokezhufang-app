import React from 'react';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';
// 导入组件
import Index from "./page/Home/index";
import CityList from "./page/CityList";
// 导入404页面
import Fn404 from './page/Map'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home" component={Index} />
          <Route path="/cityList" component={CityList} />

          {/* 404页面 */}
          <Route component={Fn404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
