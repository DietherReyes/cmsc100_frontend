import React, { Component } from 'react';
import { Input, Image, Grid, Segment, Label } from 'semantic-ui-react'
import Logo from '../assets/sample.jpg'
import './../css/Friends.css'

export default class FriendComponent extends Component {
  render() {
    console.log(this.props.array);
    return (
      this.props.array.map(item=>{
        return(
          <Grid.Column>
            <Segment>
              <div>
                <Image src= {Logo} size = "tiny" circular centered/>
                <Label centered> {item} </Label>
              </div>
            </Segment>
          </Grid.Column>
        );
      })
    );
  }
}
