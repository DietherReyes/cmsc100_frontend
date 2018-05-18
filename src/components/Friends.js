import React, { Component } from 'react';
import { Image, Grid, Header, Message, Segment } from 'semantic-ui-react'

import autobind from 'react-autobind'
import NavigationUser from './NavigationUser';
import Logo from '../assets/sample.jpg'
import FriendComponent from './FriendComponent.js'

const name_array = ["Jan Magnus Mariano", "Diether Binuya Reyes", "Kopiko 78 C", "Absolute Drinking Water", "ReactJS", "Donald Knuth"];

class Friends extends Component {
  constructor(props){
    super(props)
    autobind(this)
    this.state = {
        activeItem: 'friends',
    }

  }

  handleItemClick = (e, { name }) => {
    if (name === 'home' || name === 'profile' || name === 'friends' || name === 'notification') {
      this.setState({ activeItem: name});
    } else {
      this.setState({ activeItem: name });
    }
  }


  render() {
    var arrlength = name_array.length;
    var name_render = [];

    for(var count = 0; count < arrlength; count+=3){
      var inside_array = [];
      if(count < arrlength) inside_array.push(name_array[count]);
      if(count+1 < arrlength) inside_array.push(name_array[count+1]);
      if(count+2 < arrlength) inside_array.push(name_array[count+2]);
      name_render.push(inside_array);
    }

    return (
      <div>
        <NavigationUser 
          menuHandler = {this.handleItemClick}
          activeItem = {this.state.activeItem}
        />

        <Grid columns={3}>
          {
            name_render.map(item =>{
              return(
                <Grid.Row>
                  <FriendComponent
                    array={item}
                  />
                </Grid.Row>
              )
            })
          }
        </Grid>  
      </div>
    )
  }
}

export default Friends;