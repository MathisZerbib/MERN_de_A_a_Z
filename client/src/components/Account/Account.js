import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import API from '../../utils/API';


export class Account extends React.Component {
    showSettings (event) {
        event.preventDefault();
      }
    constructor(props){
        super(props);
        this.disconnect.bind(this);
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }
    render() {
        return(
            <div className="Account">
     <Menu>
        <a id="Dashboard" className="menu-item" href="/dashboard">Dashboard</a>
        <a id="map" className="menu-item" href="/map">Map</a>
        <a id="Account" className="menu-item" href="/account">My Account</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>,
            <h1>My Account</h1>
            </div>
        )
    }
}