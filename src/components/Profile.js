import React, { Component } from 'react';
import { Grid, Header, Message } from 'semantic-ui-react'

import autobind from 'react-autobind'
import NavigationUser from './NavigationUser';
class Profile extends Component {
  constructor(props){
    super(props)
    autobind(this)
    this.state = {
        activeItem: 'profile',
    }

  }

  handleItemClick = (e, { name }) => {
    if (name === 'home' || name === 'profile' || name === 'friends') {
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
        {"profile"}
        
      </div>
    )
  }
}

export default Profile;