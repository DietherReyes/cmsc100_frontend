import React, { Component } from 'react';
import { Modal, Label, Dropdown, Button, Form, Icon, Message, Segment, Header } from 'semantic-ui-react'
import autobind from 'react-autobind'


const inlineStyle = {
    modal : {
      marginTop: '0px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    autobind(this); 
    this.state = {
      open: false,
      username: '',
      password: '',
      email: '',
      about: '',
      month: "January",
      day:'1',
      year: '1985',
      
      monthsOptions: [
          "January",
          "February",
          "March", 
          "April",
          "May",
          "June",
          "July",
          "August",
          "September", 
          "October",
          "November",
          "December"
      ],
      daysOptions:[
          "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
          "11", "12", "13", "14", "15", "16", "17", "18", "19",
          "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
          "30", "31"
      ],
      yearsOptions:[
          "1985",
          "1986",
          "1987",
          "1988",
          "1989",
          "1990",
          "1991",
          "1992",
          "1993",
          "1994",
          "1995",
          "1996",
          "1997",
          "1998",
          "1999",
          "2000",
          "2001",
          "2002",
          "2003",
          "2004",
      ]

    }
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleEmail(e){
    this.setState({ email: e.target.value});
  }

  handleAbout(e){
    this.setState({ about: e.target.value});
  }

  handleMonth(e, {value}){
      this.setState({ month: value});
  }

  handleDay(e, {value}){
    this.setState({ day: value});
  }
    
  handleYear(e, {value}){
    this.setState({ year: value});
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
              <Button.Content visible>SIGNUP</Button.Content>
              
            </Button>
          }
        >
          <Header
            content='SignUp'
          />

          <Modal.Content>
          <Form>
            <Form.Input label='Username' placeholder='Username' type='text' onChange={this.handleUsername} />
            <Form.Input label='Password' placeholder='Password' type='password' onChange={this.handlePassword} />
            <Form.Input label='Email' placeholder='Email' type='text' onChange={this.handlePassword} />
            <Form.Input label='About' placeholder='About' type='text' onChange={this.handletext} />


            
            <Form.Field inline>
                <Label size='large'>Month</Label>
                <Dropdown
                  selection
                  text={this.state.month}
                  options={
                    this.state.monthsOptions.map((month) => {
                      return (
                        <Dropdown.Item
                          key={month}
                          value={month}
                          text={month}
                          onClick={this.handleMonth}
                        />
                      )
                    })
                  }
                />
            </Form.Field>

            <Form.Field inline>
                <Label size='large'>Day</Label>
                <Dropdown
                  selection
                  text={this.state.day}
                  options={
                    this.state.daysOptions.map((day) => {
                      return (
                        <Dropdown.Item
                          key={day}
                          value={day}
                          text={day}
                          onClick={this.handleDay}
                        />
                      )
                    })
                  }
                />
            </Form.Field>

            <Form.Field inline>
                <Label size='large'>Year</Label>
                <Dropdown
                  selection
                  text={this.state.year}
                  options={
                    this.state.yearsOptions.map((year) => {
                      return (
                        <Dropdown.Item
                          key={year}
                          value={year}
                          text={year}
                          onClick={this.handleYear}
                        />
                      )
                    })
                  }
                />
            </Form.Field>

            
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


export default SignUp




