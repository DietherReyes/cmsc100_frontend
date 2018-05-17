import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import SignUP from './SignUp';
import Login from './Login';
class Navigation extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    return (
      <div>
        <Menu
          size='massive'
          inverted={true}
          fixed='top'
          color={'blue'}
        >
          
        <Menu.Item header>THE RIFT</Menu.Item>


        <Menu.Item position="right">
          <Login/>
          <SignUP/>
        </Menu.Item>


          

        </Menu>
      </div>
    )
  }

}

export default Navigation;