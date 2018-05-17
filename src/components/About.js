import React, { Component } from 'react';
import { Grid, Header, Message } from 'semantic-ui-react'
import Login from './Login'
import autobind from 'react-autobind'
import '../css/LandingPage.css';

class About extends Component {
  constructor(props){
    super(props)
    autobind(this)
  }

  render() {
    return (
      <Grid divided='vertically' >
        <Grid.Row centered columns={2}>

          <Grid.Column>
            <br></br>
            <div className="padding">
              <Header as='h2' icon='info' color='blue' content='About Us' />

              <Message color='blue'>
                <p>Rift, is a system used by the ICS Registration Commitee to
                  keep track of adviser-advisee assignments, management of course offerings and report generation of the like
                </p>
              </Message>
            </div>
          </Grid.Column>
          
        </Grid.Row>
      </Grid>

    )
  }
}

export default About;