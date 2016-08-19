// modules/Repos.js
import React , {Component} from 'react'
import { Link } from 'react-router'
import NavLink from '../NavLink'
import {Button, Card, Row, Col  ,CardTitle , Icon , Navbar , NavItem , Input , Table } from 'react-materialize';

let listId = 0;
export default class Home extends Component{

  constructor(props) {
    super(props);
   }

  render() {

    let listDetail = [];
    this.props.data.map( (list)=>{
      listDetail.push( <NavLink to={list.link} key={listId++}> <Icon>label</Icon> {list.name} </NavLink> );
      listDetail.push( <br key={listId++}/> );
    });

    return (
      <div>
        <h1>Home Page Hi Guest</h1>
        <NavLink to="/addRepos" > Add New </NavLink>
        <br/>
        {listDetail}
      </div>
    )
  }
}
