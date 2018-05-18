import React, { Component } from 'react';
import autobind from 'react-autobind'
import NavigationUser from './NavigationUser';
import {Card, Label, Icon, Image, Segment, Modal } from 'semantic-ui-react';
import Logo from '../assets/sample.jpg'

import {Button, Input } from 'semantic-ui-react';
import Post from './Post'
import './../css/Profile.css'

const dummy_post = [
{author: "Steve Jobs",post: "CMSC 100", comments: 
  [{content: "Wow", author: "Diether", timestamp: "12:56 P.M"},
  {content: "Amazing", author: "Reyes", timestamp: "11:11 A.M"}]},
{author: "Someone",post: "Puyat", comments: []}];

class Home extends Component {
  constructor(props){
    super(props)
    autobind(this)
    this.state = {
      activeItem: 'home',
      username: 'Diether B. Reyes',
      birthday: 'May 18, 2018',
      about: 'Has a passion for fashion'
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
                {this.state.username}
              </span>

              <br/>

              <Label>
                <div className="ui large label"> Birthday </div>
              </Label>

              <span class = "attribute">
                {this.state.birthday}
              </span>

              <br/>

              <Label>
                <div className="ui large label"> About </div>
              </Label>

              <span class = "attribute">
                {this.state.about}
              </span>
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

        </Segment.Group>

        {
          dummy_post.map(item=>{
            return(
              <Post
                content={item}
              />
            )
          })
        }
      </div>
    )
  }
}

export default Home;