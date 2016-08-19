import React from 'react';
import ReactDOM from 'react-dom';
//import MyTitle from './App';
import './index.css';

import RouterApp from './RouteApp';

var title = 'Card board!!';
/*
ReactDOM.render(
  <MyTitle title={title} />,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <RouterApp />,
  document.getElementById('root')
);
