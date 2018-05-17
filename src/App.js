import React, { Component } from "react";
import autobind from "react-autobind";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './css/App.css'
import About from "./components/About.js";
import SignUp from "./components/SignUp.js";
import NavigationLogIn from "./components/NavigationLogIn";
import Home from "./components/Home";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Notifications from "./components/Notification"

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

            <Container style={{ marginTop: '7em' }}>
              <Route exact path="/" component={About} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/friends" component={Friends} />
              <Route exact path="/notifications" component={Notifications}/>
            </Container>
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
