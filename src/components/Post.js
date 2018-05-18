import React, { Component } from 'react';
import autobind from 'react-autobind'
import NavigationUser from './NavigationUser';
import {Grid, Card, Label, Icon, Image, Segment, Modal, Comment } from 'semantic-ui-react';
import Logo from '../assets/sample.jpg'

import {Button, Input } from 'semantic-ui-react';
import './../css/Profile.css'

class Post extends Component {
  constructor(props){
    super(props)
    autobind(this)
    this.state = {
      enableComment: 0
    }

    this.handleComment = this.handleComment.bind(this);
  }

  handleComment(e){
    if(this.state.enableComment == 1) this.setState({ enableComment: 0 });
    else this.setState({ enableComment: 1 });
  }

  render() {
    var comment_array = [];

    this.props.content.comments.map(item=>{
      comment_array.push(item);
    })

    return (
      <div>
        <Segment.Group horizontal>
          <div>
            <Image class = "PostIcon" src= {Logo} size = "tiny" circular />
          </div>

          <Label color="blue" fluid>
            {this.props.content.post}
          </Label>

          <Button>
            <Icon name = "thumbs up"/>
          </Button>

          <Button onClick = {this.handleComment}>
            <Icon name = "comments"/>
          </Button>
        </Segment.Group>

        <Comment.Group>
          {
            this.state.enableComment === 1 ?
              this. props.content.comments.map(item=>{
                return(
                    <Comment>
                      <Comment.Avatar src={Logo} />
                        <Comment.Content>
                          <Comment.Author as='a'>{item.author}</Comment.Author>
                          <Comment.Metadata>
                            <div>{item.timestamp}</div>
                          </Comment.Metadata>
                          <Comment.Text>{item.content}</Comment.Text>
                          <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                          </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                )
              })
            :
              ""
          }
        </Comment.Group>
      </div>
    )
  }
}

export default Post;