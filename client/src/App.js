import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Login } from './components/Login/Login.js';
import { Signup } from './components/Signup/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import './App.css';
import { slide as Menu } from 'react-burger-menu'

class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }

        render() {
            return (
              <Menu>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>,
                   <div className="App">
            <div className="App-content">
                <Switch>  
                    <Route exact path="/" component={Login}/>
                    <Route exact path ="/signup" component={Signup}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                </Switch>
            </div>
        </div>
                
              );
    }
}
export default App;
