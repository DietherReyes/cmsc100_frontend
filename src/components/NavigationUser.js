import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Menu, Input, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
//import './../css/Navigation.css'

class NavigationUser extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    var divStyle = {
        height: '20%',
        margin: '1% 1% 1% 25%'
    };

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
            active={this.props.activeItem === 'notifications'}
            name='notifications'
            onClick={this.props.menuHandler}
            as={Link}
            to='/notifications'
        >
        NOTIFICATIONS
        </Menu.Item>

        <Input
            size="mini"
            icon={<Icon name='search' inverted circular link />}
            placeholder='Search...'
            style={divStyle}
        />

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