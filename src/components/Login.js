import React, { Component } from 'react';
import { Modal, Button, Form, Icon, Message, Segment, Header } from 'semantic-ui-react'
import autobind from 'react-autobind'
import SignUp from './SignUp'


const inlineStyle = {
  modal : {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};


class Login extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleUsername(e) {
    this.setState({ username: e.target.value })
  }

  handlePassword(e) {
    this.setState({ password: e.target.value })
  }

  open(){
    this.setState({open: true});
  }

  close(){
    this.setState({open: false});
  }

  
  render() {
    return (
      <div>
        <Modal
          style = {inlineStyle.modal}
          open={this.state.open}
          onOpen={this.open}
          onClose={this.close}
          closeOnDimmerClick={false}
          trigger={
            <Button
              color="vk"
              size='huge'
              animated='fade'
            >
              <Button.Content visible>LOGIN</Button.Content>
              
            </Button>
          }
        >
          <Header
            content='LOGIN'
          />

          <Modal.Content>

            <Form>
              <Form.Input value={this.state.username} label='Username' placeholder='Username' type='text' onChange={this.handleUsername} />
              <Form.Input value={this.state.password} label='Password' placeholder='Password' type='password' onChange={this.handlePassword} />
            </Form>
            
          </Modal.Content>

          <Modal.Actions>
            <Button
              floated="left"
              basic
              color='blue'
              onClick={() => this.handleSubmit()}
            >
              <Button.Content visible> Submit </Button.Content>
            </Button>

            <Button
              basic
              color='red'
              onClick={this.close}
            >
              <Button.Content visible> Cancel </Button.Content>
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}


export default Login




