
import { Router, Route , IndexRoute , Link ,hashHistory,browserHistory } from 'react-router'
// browserHistory  reacl url
// hashHistory     hash url

import React,{Component} from 'react'

import MyTitle from './Page/Main';
import About from './Page/About'
import Repos from './Page/Repos'
import Repo from './Page/Repo'
import Home from './Page/Home'
import AddRepos from './Page/AddRepos'
 
export default class RouteApp extends Component {
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={MyTitle}>
          <IndexRoute component={() => <Home data={window.data}/> } />
          <Route path="/addRepos" component={AddRepos}/>
          <Route path="/repos" component={Repos}/>
          <Route path="/repos/:userName/:repoName" component={Repo}/>
          <Route path="/about" component={About}/>
        </Route>
        <Route path='*' component={MyTitle} />
      </Router>
      )
  }

}


window.data = [
    { link:'/repos/reactjs/react-router', name:'React' },
    { link:'/repos/facebook/hello-facebook', name:'Facebook' }
  ]
