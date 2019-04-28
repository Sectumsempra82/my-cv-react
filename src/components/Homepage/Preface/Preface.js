import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import classes from './Preface.module.css';

class Preface extends Component {


    render() {
        return (
            <section className={classes.Preface}>
                <Container >
                    <h1>Hi, my name is Cristian and I'm a Developer</h1>
                    <p>
                        I started my carrer in 2013, I love programming and learning to use new technologies.<br />
                        I worked as Front-end Developer, Back-end Developer and Support Engineer.<br />
                        I'm quietly confident, naturally curious, and perpetually working on improving my skills and knowledge.<br />
                    </p>
                </Container>
            </section>
        )
    }



}

export default Preface;