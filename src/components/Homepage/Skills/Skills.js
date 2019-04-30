import React, { Component } from 'react';
import {  Card, CardGroup, ListGroup } from 'react-bootstrap';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Skills.module.css';

class Skills extends Component {
    // renderStars = (n) => {
    //     let stars = [...Array(n)].map((v, i) => <FontAwesomeIcon icon={["fas", "star"]}  key={'s' + i}/>);
    //     if (n < 5) {
    //         let m = 5 - n;
    //         let noStars = [...Array(m)].map((v, i) => <FontAwesomeIcon icon={["far", "star"]} key={'ns' + i}/>);
    //         const allStars = stars.concat(noStars);
    //         return allStars;
    //     } else {
    //         return stars;
    //     }
    // }

    render() {
        return (
            <section className={classes.Skills}>
                <Card className={classes.MainCard}>
                <Card.Header><h2>Skills</h2></Card.Header>
                    <CardGroup>
                        <Card bg="dark" text="white" >
                            <Card.Header>Back-end</Card.Header>
                            <Card.Body>
                                <Card.Title>Web and standalone</Card.Title>
                                <ListGroup style={{ color: 'black' }}>
                                    <ListGroup.Item>npm / Node.js</ListGroup.Item>
                                    <ListGroup.Item>Python</ListGroup.Item>
                                    <ListGroup.Item>PHP</ListGroup.Item>
                                    <ListGroup.Item>Joomla/Wordpress</ListGroup.Item>
                                    <ListGroup.Item>OpenCart</ListGroup.Item>
                                    <ListGroup.Item>Smallatlk (Cincom)</ListGroup.Item>
                                    <ListGroup.Item>MySql/MariaDb</ListGroup.Item>
                                    <ListGroup.Item>OracleDB 11g, 12g, 18g</ListGroup.Item>
                                    <ListGroup.Item>GIT / GRUNT / JENKINS</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card bg="dark" text="white" >
                            <Card.Header>Front-end</Card.Header>
                            <Card.Body>
                                <Card.Title>UI, UX and Animations</Card.Title>
                                <ListGroup style={{ color: 'black' }}>
                                    <ListGroup.Item>Javascript</ListGroup.Item>
                                    <ListGroup.Item>React.js</ListGroup.Item>
                                    <ListGroup.Item>Angular 2.xx</ListGroup.Item>
                                    <ListGroup.Item>HTML5/CSS3</ListGroup.Item>
                                    <ListGroup.Item>Bootstrap</ListGroup.Item>
                                    <ListGroup.Item>Sass</ListGroup.Item>
                                    <ListGroup.Item>XML</ListGroup.Item>
                                    <ListGroup.Item>JQuery</ListGroup.Item>
                                    <ListGroup.Item>CSS animations</ListGroup.Item>
                                    <ListGroup.Item>Svg</ListGroup.Item>
                                    <ListGroup.Item>Responsive design</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card bg="dark" text="white" >
                            <Card.Header>Server side</Card.Header>
                            <Card.Body>
                                <Card.Title>OS, Networking and Tools</Card.Title>
                                <ListGroup style={{ color: 'black' }}>
                                    <ListGroup.Item>Windows 10</ListGroup.Item>
                                    <ListGroup.Item>Windows Server 12 / 16</ListGroup.Item>
                                    <ListGroup.Item>Active Directory / SCCM</ListGroup.Item>
                                    <ListGroup.Item>Networking</ListGroup.Item>
                                    <ListGroup.Item>Firewall (Palo Alto)</ListGroup.Item>
                                    <ListGroup.Item>VMWare / Hyper-V</ListGroup.Item>
                                    <ListGroup.Item>CMD/Powershell</ListGroup.Item>
                                    <ListGroup.Item>Linux Debian / Arch</ListGroup.Item>
                                    <ListGroup.Item>Bash</ListGroup.Item>
                                    <ListGroup.Item>Apache2 / IIS Hosting</ListGroup.Item>
                                    <ListGroup.Item>Proxy / VPN </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <br />
                    </CardGroup>
                </Card>
            </section>
        )
    }



}

export default Skills;