import React, { Component } from "react";
import autobind from "react-autobind";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './css/App.css'
import About from "./components/About.js";
import SignUp from "./components/SignUp.js";
import NavigationLogIn from "./components/NavigationLogIn"
class App extends Component {

  constructor(props){
    super(props);
    autobind(this);
    this.state = {
      username: "",
      password: "",
    }
  }
  render() {
    return (
      <div className="App">
        <Router >
          <div>
            <NavigationLogIn/>
            <Container style={{ marginTop: '7em' }}>
              <Route exact path="/" component={About} />
              
            </Container>
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
