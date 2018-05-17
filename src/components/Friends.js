import React, { Component } from 'react';
import { Grid, Header, Message } from 'semantic-ui-react'

import autobind from 'react-autobind'
import NavigationUser from './NavigationUser';
class Friends extends Component {
  constructor(props){
    super(props)
    autobind(this)
    this.state = {
        activeItem: 'friends',
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
        {
            "friends"
        }
        
      </div>
    )
  }
}

export default Friends;