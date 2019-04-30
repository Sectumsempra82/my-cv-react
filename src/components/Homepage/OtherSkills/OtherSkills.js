import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import classes from './OtherSkills.module.css';

class OtherSkills extends Component {


    render() {
        return (
            <section className={classes.OtherSkills}>
                
                <Card className={classes.Card}>
                    <Card.Header><h2>  Other Skills</h2></Card.Header>
                    <Card.Body>
                        <Card.Text className={classes.Lists}>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </Card.Text>                        
                    </Card.Body>
                </Card>;
            </section>
        )
    }



}

export default OtherSkills;