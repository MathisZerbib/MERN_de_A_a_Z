import React from 'react';
import { Button } from "react-bootstrap";
import { slide as Menu } from 'react-burger-menu'
import API from '../../utils/API';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../Home/Home.css';


export class Home extends React.Component {
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
            <div className="Home">
              {/* <Menu>
        <a id="Dashboard" className="menu-item" href="/dashboard">Dashboard</a>
        <a id="map" className="menu-item" href="/map">Map</a>
        <a id="Account" className="menu-item" href="/account">My Account</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu> */}
             <Grid fluid>
        <Row>
          <Col xsOffset={10} xs={2} s>
          <Button
                href="/login"
                block
                bsSize="large"
                type="submit"
                >
                Connexion
                </Button>
          </Col>
        </Row>

        <Row>
  <Col xs> </Col> 
  <Col xs> </Col>
  <Col xs> </Col> 
        </Row>

      </Grid>
            </div>
        )
    }
}