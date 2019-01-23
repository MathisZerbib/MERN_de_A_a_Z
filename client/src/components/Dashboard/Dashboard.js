import React from 'react';
import { Button } from "react-bootstrap";
import { slide as Menu } from 'react-burger-menu'
import API from '../../utils/API';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../Dashboard/Dashboard.css';


export class Dashboard extends React.Component {
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
            <div className="Dashboard">
             <Menu>
        <a id="Dashboard" className="menu-item" href="/dashboard">Dashboard</a>
        <a id="map" className="menu-item" href="/map">Map</a>
        <a id="Account" className="menu-item" href="/account">My Account</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>,
      <Grid fluid>
        <Row>
          <Col xs={12} s>
          <h1>Dashboard</h1>
                <Button
                onClick={this.disconnect}
                block
                bsSize="large"
                type="submit"
                >
                Se déconnecter
                </Button>
          </Col>
        </Row>
      </Grid>
            </div>
        )
    }
}