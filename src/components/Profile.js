import React, { Component } from 'react';
import { Grid, Header, Message } from 'semantic-ui-react'

import autobind from 'react-autobind'
import NavigationUser from './NavigationUser';

import Logo from '../assets/sample.jpg'
class Profile extends Component {
  constructor(props){
    super(props)
    autobind(this)
    this.state = {
        activeItem: 'profile',
    }

  }

  handleItemClick = (e, { name }) => {
    if (name === 'home' || name === 'profile' || name === 'friends' || name == 'notification') {
      this.setState({ activeItem: name});
    } else {
      this.setState({ activeItem: name });
    }
  }


  render() {
    return (
      <div>

        <NavigationUser 
          menuHandler = {this.handleItemClick}
          activeItem = {this.state.activeItem}
        />
        
      </div>
    )
  }
}

export default Profile;