// modules/Repos.js
import React,{Component} from 'react'
import { Link } from 'react-router'
import {Button, Card, Row, Col  ,CardTitle , Icon , Navbar , NavItem , Input , Table } from 'react-materialize';

let appId = 0;
export default class Repos extends Component{

  constructor(props) {
      super(props);
      this.state = {
         filterText: ''
      }
   }

  render() {

    let cards = [];

    this.props.data.forEach( (info) => {
     if (info.header.indexOf(this.state.filterText) >= 0 ){
        cards.push (
          <Col m={3} s={12} key={(appId++)}>
            <Card
                style={Repos.cardStyle}
                //{/*onClick={App.alertWhenClickImg.bind(this)} * /}
                header={<CardTitle reveal image={ (info.src.length > 0) ? require(info.src) : ''} waves='light'/>}
                title={info.header}
                reveal={<p>{info.detail}</p>} >
                <p><a href="#">This is a link</a></p>
            </Card>
            </Col>
        )
      }
    })

    return (


        <Row>
          <Col m={6} offset={'m5 s4'} s={2}>
            <SearchBox onChangeText={Repos.filterCard.bind(this)} />
          </Col>

            {cards}

          <Col m={3} offset={'m4 s4'} s={2}>
            <Button waves='light'> {'<<'} </Button>
          </Col>
          <Col m={2} s={4}>
            <Button waves='light'> {'>>'} </Button>
          </Col>
        </Row>

    )
  }

}


Repos.cardStyle = {
  width : '300px',
  height : '400px'
}

Repos.navigation = {
  height : '30px'
}

Repos.propTypes = {
  title: React.PropTypes.string.isRequired
}

Repos.defaultProps = {
  title : 'Card board!!',
  data : [
          {header:'hello world' , src: './logo_github_small.gif' , detail: 'hi github more detail...'} ,
          {header: 'jQuery', src: '', detail: 'http://jquery.com/' },
          {header:'jsx' , src: './logo_github_small.gif' , detail: 'Jsx world'},
          {header:'Backbone.js' , src: '' , detail: 'Backbone.js'},
            {header: 'jQuery', src: '', detail: 'http://jquery.com/' },
          {header:'hello world' , src: './logo_github_small.gif' , detail: 'hi github more detail...'} ,
          {header:'jsx' , src: './logo_github_small.gif' , detail: 'Jsx world'},
          {header:'Backbone.js' , src: '' , detail: 'Backbone.js'},
          {header:'hello world' , src: './logo_github_small.gif' , detail: 'hi github more detail...'} ,
          {header: 'jQuery', src: '', detail: 'http://jquery.com/' },
          {header:'jsx' , src: './logo_github_small.gif' , detail: 'Jsx world'},
          {header:'Backbone.js' , src: '' , detail: 'Backbone.js'},
        ]
}

Repos.alertWhenClickImg = function(e){
  alert(e.target.src);
}

Repos.filterCard = function(e){
  let value = e.target.value;
  this.setState({ filterText: value });
  console.log(e.target.value+': filterText '+ this.state.filterText );
}

class SearchBox extends Component {

  divStyles = {
    //'background-color':'white'
    'float' : 'left'
  }

  textStyles = {
    'width':'120px'
  }

  iconStyles = {
    'verticalAlign':'-webkit-baseline-middle'
  }

    render(){
      return (
        <div style={this.divStyles} >
          <input type={'text'} placeholder="Search..." onChange={this.props.onChangeText} style={this.textStyles} />
          <Icon right style={this.iconStyles} >search</Icon>
        </div>
      )
    }
}
