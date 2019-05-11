import React, { Component } from 'react';
import classes from './Demos.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button } from 'react-bootstrap';
import demoBaz from '../../../assets/images/demoBaz.png'; 
import myLogo from '../../../assets/images/my-logo.png'; 

class Demos extends Component {


    render() {
        return (
            <section className={classes.Demos}>
                <h1>DEMOS AND CODE SAMPLES</h1>
                <h3>Find the code on <a href={'https://github.com/Sectumsempra82?tab=repositories'}>Git <FontAwesomeIcon icon={['fab', 'github']} /></a></h3>
                <div className={classes.CardHolder}>
                <Card style={{ width: '18rem', margin: '0 auto' }}>
                <Card.Header className={classes.CardHeader}>This Website</Card.Header>
                        <Card.Img variant="top" src={myLogo} />
                        
                        <Card.Body>
                            <Card.Text>
                               My online portfolio, the one you are browsing just now.
                               React.js, a little Bootstrap and a sprinkle of FontAwesome are powering this portal.
                            </Card.Text>
                            <a href='https://github.com/Sectumsempra82/my-cv-react'><Button variant="primary"><FontAwesomeIcon icon={['fab', 'github']} />Check the code</Button></a>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '0 auto' }}>
                    <Card.Header className={classes.CardHeader}>Millionaire game</Card.Header>
                        <Card.Img variant="top" src={demoBaz} />
                        
                        <Card.Body>
                            <Card.Text>
                                An impementation of the famous game made with React.js and bootstrap
                            </Card.Text>
                            <a href='https://sectumsempra82.github.io/wannabe-bazillionaire/'><Button variant="primary">Play now!</Button></a>
                            <a href='https://github.com/Sectumsempra82/wannabe-bazillionaire'><Button variant="primary"><FontAwesomeIcon icon={['fab', 'github']} />Check the code</Button></a>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        )
    }



}

export default Demos;