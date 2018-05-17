import React, { Component } from 'react';
import autobind from 'react-autobind'
import NavigationUser from './NavigationUser';
import {Card, Label, Icon, Image, Segment } from 'semantic-ui-react';
import Logo from '../assets/sample.jpg'
class Home extends Component {
  constructor(props){
    super(props)
    autobind(this)
    this.state = {
      activeItem: 'home',
      
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

        
          
        <Segment.Group horizontal>
          <Segment>
            <Card>
              <Image src={Logo} />
            </Card>
          </Segment>

          <Segment>
              <Label>
                <div className="ui large label"> Username </div>
                <div className="ui large label">{this.state.empNum}</div>
              </Label>
          </Segment>
          
        </Segment.Group>
         
        

        <Segment>
        
        </Segment>
        
      </div>
    )
  }
}

export default Home;