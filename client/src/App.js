import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Login } from './components/Login/Login.js';
import { Signup } from './components/Signup/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import './App.css';
import ResponsiveMenu from 'react-responsive-navbar';
class App extends Component {
        render() {
            return (
              <div className="App">
              <div className="App-content">
                  <Switch>  
                      <Route exact path="/" component={Login}/>
                      <Route exact path ="/signup" component={Signup}/>
                      <PrivateRoute path='/dashboard' component={Dashboard} />
                  </Switch>
              </div>
          </div>,
                <ResponsiveMenu
                  menuOpenButton={<div />}
                  menuCloseButton={<div />}
                  changeMenuOn="500px"
                  largeMenuClassName="large-menu-classname"
                  smallMenuClassName="small-menu-classname"
                  menu={
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                    </ul>
                  }
                />
                
              );
    }
}
export default App;
