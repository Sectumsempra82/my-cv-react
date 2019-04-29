import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

import classes from './OtherSkills.module.css';

class OtherSkills extends Component {


    render() {
        return (
            <section className={classes.OtherSkills}>
                <h2>  Other Skills</h2>
                <div >
                    <ListGroup style={{ color: 'black' }} className={classes.First}>
                        <ListGroup.Item>npm / Node.js</ListGroup.Item>
                        <ListGroup.Item>Python</ListGroup.Item>
                        <ListGroup.Item>PHP</ListGroup.Item>
                        <ListGroup.Item>Joomla/Wordpress</ListGroup.Item>
                        <ListGroup.Item>OpenCart</ListGroup.Item>
                        <ListGroup.Item>Smallatlk (Cincom)</ListGroup.Item>
                        <ListGroup.Item>MySql/MariaDb</ListGroup.Item>
                        <ListGroup.Item>OracleDB 11g, 12g, 18g</ListGroup.Item>
                    </ListGroup>
                </div>
                <div >
                    <ListGroup style={{ color: 'black' }} className={classes.Second}>
                        <ListGroup.Item>npm / Node.js</ListGroup.Item>
                        <ListGroup.Item>Python</ListGroup.Item>
                        <ListGroup.Item>PHP</ListGroup.Item>
                        <ListGroup.Item>Joomla/Wordpress</ListGroup.Item>
                        <ListGroup.Item>OpenCart</ListGroup.Item>
                        <ListGroup.Item>Smallatlk (Cincom)</ListGroup.Item>
                        <ListGroup.Item>MySql/MariaDb</ListGroup.Item>
                        <ListGroup.Item>OracleDB 11g, 12g, 18g</ListGroup.Item>
                    </ListGroup>
                </div>
                <div >
                    <ListGroup style={{ color: 'black' }} className={classes.Third}>
                        <ListGroup.Item>npm / Node.js</ListGroup.Item>
                        <ListGroup.Item>Python</ListGroup.Item>
                        <ListGroup.Item>PHP</ListGroup.Item>
                        <ListGroup.Item>Joomla/Wordpress</ListGroup.Item>
                        <ListGroup.Item>OpenCart</ListGroup.Item>
                        <ListGroup.Item>Smallatlk (Cincom)</ListGroup.Item>
                        <ListGroup.Item>MySql/MariaDb</ListGroup.Item>
                        <ListGroup.Item>OracleDB 11g, 12g, 18g</ListGroup.Item>
                    </ListGroup>
                </div>
            </section>
        )
    }



}

export default OtherSkills;