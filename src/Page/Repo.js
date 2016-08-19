// modules/Repo.js
import React from 'react'
import NavLink from '../NavLink'
import { browserHistory,hashHistory } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        <hr/>
        <h3>{this.props.params.userName}</h3>
        <button onClick={hashHistory.goBack} >Back</button>
      </div>
    )
  }
})
