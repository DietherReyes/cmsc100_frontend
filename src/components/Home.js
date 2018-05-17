import React, { Component } from 'react';
import autobind from 'react-autobind'
import NavigationUser from './NavigationUser';
import {Card, Label, Icon, Image, Segment, Modal } from 'semantic-ui-react';
import Logo from '../assets/sample.jpg'

import {Button, Input } from 'semantic-ui-react';
import './../css/Profile.css'

class Home extends Component {
  constructor(props){
    super(props)
    autobind(this)
    this.state = {
      activeItem: 'home',
      
    }

    this.handleComment = this.handleComment.bind(this);
  }

  handleItemClick = (e, { name }) => {
    if (name === 'home' || name === 'profile' || name === 'friends' || name === 'notification') {
      this.setState({ activeItem: name});
    } else {
      this.setState({ activeItem: name });
    }
  }

  handleComment(){

  }

  render() {
    return (
      <div>
        <NavigationUser 
          menuHandler = {this.handleItemClick}
          activeItem = {this.state.activeItem}
        />
          
        <Segment.Group horizontal>
          <Segment>
            <Card>
              <Image src={Logo} />
            </Card>
          </Segment>

          <Segment>
              <Label>
                <div className="ui large label"> Username </div>
              </Label>

              <span class = "attribute">
                
              </span>

              <br/>

              <Label>
                <div className="ui large label"> Birthday </div>
                <div className="ui large label">{this.state.empNum}</div>
              </Label>

              <br/>

              <Label>
                <div className="ui large label"> About </div>
                <div className="ui large label">{this.state.empNum}</div>
              </Label>
          </Segment>
          
        </Segment.Group>
         
        {/* For post, should create new component for this */}
        <Segment.Group horizontal>
          <div>
            <Image class = "PostIcon" src= {Logo} size = "tiny" circular />
          </div>

          <Input 
            class = "Profile" 
            action = "Post"
            placeholder="Input current thoughts here"/>

          <Button>
            <Icon name = "thumbs up"/>
          </Button>

          <Button onClick = {this.handleComment}>
            <Icon name = "comments"/>
          </Button>

        </Segment.Group>
        
      </div>
    )
  }
}

export default Home;