import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Login } from './components/Login/Login.js';
import { Home } from './components/Home/Home.js';
import { Signup } from './components/Signup/Signup.js';
import { Map } from './components/Map/Map.js';
import { Account } from './components/Account/Account.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import './App.css';


class App extends Component {
        render() {
            return (
                   <div className="App">
            <div className="App-content">
                <Switch>  
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path ="/signup" component={Signup}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/map' component={Map} />
                    <PrivateRoute path='/account' component={Account} />
                </Switch>
            </div>
        </div>
                
              );
    }
}
export default App;
