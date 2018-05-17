import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

class NavigationUser extends Component {
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

        <Menu.Item
            active={this.props.activeItem === 'home'}
            name='home'
            onClick={this.props.menuHandler}
            as={Link}
            to='/home'
        >
        HOME
        </Menu.Item>

        <Menu.Item
            active={this.props.activeItem === 'profile'}
            name='profile'
            onClick={this.props.menuHandler}
            as={Link}
            to='/profile'
        >
        PROFILE
        </Menu.Item>


        <Menu.Item
            active={this.props.activeItem === 'friends'}
            name='friends'
            onClick={this.props.menuHandler}
            as={Link}
            to='/friends'
        >
        FRIENDS
        </Menu.Item>

        
        

        <Menu.Item
            position="right"
            as={Link}
            to='/'
        >
        LOGOUT
        </Menu.Item>


          

        </Menu>
      </div>
    )
  }

}

export default NavigationUser;