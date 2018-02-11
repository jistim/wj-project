import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Base from './Containers/Base';
import Admin from './Containers/Admin';

// style
import 'antd/lib/layout/style/index';
import 'antd/lib/row/style/index';
import 'antd/lib/col/style/index';
import 'antd/lib/collapse/style/index';
import 'antd/lib/popconfirm/style/index';
import 'antd/lib/modal/style/index';
import 'antd/lib/tree/style/index';
import 'antd/lib/menu/style/index';

import jistimUtilGen from './modules/jistimUtils';

window['JistimUtils'] = jistimUtilGen();

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/admin" component={Admin} />
      <Route component={Base} />,
    </Switch>
  </Router>,
  document.getElementById('app')
);
