import React, { Component } from 'react';
//import { Link } from 'react-router'
import {Button, Card, Row, Col  ,CardTitle , Icon , Navbar , NavItem , Input , Table } from 'react-materialize';
import NavLink from '../NavLink'

export default class Main extends Component{
  render() {
    return (
      <div>
        <Navbar brand='React Router' right >
            <NavLink to="/about"><Icon>assignment_ind</Icon> </NavLink>
            <NavLink to="/repos"><Icon>shopping_cart</Icon> </NavLink>
            <NavLink to="/"><Icon>home</Icon> </NavLink>
        </Navbar>
          {this.props.children}
      </div>
    )
  }
}
