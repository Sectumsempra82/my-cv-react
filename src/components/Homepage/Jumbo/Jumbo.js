import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

import classes from './Jumbo.module.css';
import bigLogo from '../../../assets/images/my-logo-full.jpg';

class Jumbo extends Component {


    render() {
        return (
            <Jumbotron fluid className={classes.Jumbo}>
                <img src={bigLogo} alt="RADU-CRISTIAN BEJAN"/>
            </Jumbotron>
        )
    }



}

export default Jumbo;