import React, { Component } from 'react';
import { Container, Card, CardGroup, ListGroup } from 'react-bootstrap';

import classes from './Skills.module.css';

class Skills extends Component {


    render() {
        return (
            <section className={classes.Skills}>
                <Container >
                    <CardGroup>
                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Back-end</Card.Header>
                            <Card.Body>
                                <Card.Title>Web and standalone</Card.Title>
                                <Card.Text>
                                    <ListGroup style={{ color: 'black' }}>
                                        <ListGroup.Item>Javascript (Node.js)</ListGroup.Item>
                                        <ListGroup.Item>Python</ListGroup.Item>
                                        <ListGroup.Item>PHP</ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Front-end</Card.Header>
                            <Card.Body>
                                <Card.Title>Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Server side</Card.Header>
                            <Card.Body>
                                <Card.Title>Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </CardGroup>
                </Container>
            </section>
        )
    }



}

export default Skills;