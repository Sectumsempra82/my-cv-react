import React, { Component } from 'react';
import classes from './Demos.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button } from 'react-bootstrap';
import demoBaz from '../../../assets/images/demoBaz.png'; 

class Demos extends Component {


    render() {
        return (
            <section className={classes.Demos}>
                <h1>DEMOS AND CODE SAMPLES</h1>
                <h3>Find the code on <a href={'https://github.com/Sectumsempra82?tab=repositories'}>Git <FontAwesomeIcon icon={['fab', 'github']} /></a></h3>
                <Card style={{ width: '18rem', margin: '0 auto' }}>
                    <Card.Img variant="top" src={demoBaz} />
                    <Card.Body>
                        <Card.Title>Millionaire game</Card.Title>
                        <Card.Text>
                            An impementation of the famous game made with React.js and bootstrap
                        </Card.Text>
                        <a href='https://sectumsempra82.github.io/wannabe-bazillionaire/'><Button variant="primary">Play now!</Button></a>
                    </Card.Body>
                </Card>
            </section>
        )
    }



}

export default Demos;