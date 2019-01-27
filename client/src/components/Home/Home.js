import React from 'react';
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
             <Grid fluid>

        <Row>
  <Col xs> First </Col> 
  <Col xs> Second </Col>
  <Col xs> Third</Col> 
        </Row>

      </Grid>
            </div>
        )
    }
}