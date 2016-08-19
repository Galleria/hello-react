// modules/Repos.js
import React,{Component} from 'react'
import { Link ,hashHistory} from 'react-router'
import NavLink from '../NavLink'
import Home from './Home'
import {Button, Card, Row, Col  ,CardTitle , Icon , Navbar , NavItem , Input , Table } from 'react-materialize';

export default class AddRepos extends Component{

  constructor(props) {
      super(props);
   }

  render() {
    return (
      <div>
        <h1>Link Detail</h1>
        <hr/>
        <Row>
            <Input label="Name" ref="name" s={12} />
            <Input label="Catagory" ref="catagory" s={12} />
            <Input label="Topic" ref="topic" s={12} />
            <Button s={6} onClick={ AddRepos.submitForm.bind(this) }>Submit</Button>
            <Button s={6} onClick={ hashHistory.goBack } >Back</Button>
        </Row>
      </div>
    )
  }
}


AddRepos.submitForm = function(e){
  //console.dir( this.props.params.addRepo );
  var data = {
      name     : this.refs.name.state.value,
      catagory : this.refs.catagory.state.value,
      topic    : this.refs.topic.state.value,
  }
  //alert( JSON.stringify(data) );
  //console.log( Home.bind(this,data) );

  window.data.push( { link:'/repos/'+data.catagory+'/'+data.topic, name: data.name } );
  hashHistory.push('/');
}
