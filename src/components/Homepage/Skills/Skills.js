import React, { Component } from 'react';
import { Container, Card, CardGroup, ListGroup } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Skills.module.css';

class Skills extends Component {
    renderStars = (n) => {
        let stars = [...Array(n)].map((v, i) => <FontAwesomeIcon icon={["fas", "star"]}  key={'s' + i}/>);
        if (n < 5) {
            let m = 5 - n;
            let noStars = [...Array(m)].map((v, i) => <FontAwesomeIcon icon={["far", "star"]} key={'ns' + i}/>);
            const allStars = stars.concat(noStars);
            return allStars;
        } else {
            return stars;
        }
    }

    render() {
        return (
            <section className={classes.Skills}>
                <Container >
                    <CardGroup>
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Back-end</Card.Header>
                            <Card.Body>
                                <Card.Title>Web and standalone</Card.Title>
                                <ListGroup style={{ color: 'black' }}>
                                    <ListGroup.Item>npm / Node.js {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>Python {this.renderStars(3)}</ListGroup.Item>
                                    <ListGroup.Item>PHP {this.renderStars(4)}</ListGroup.Item>
                                    <ListGroup.Item>Joomla/Wordpress {this.renderStars(4)}</ListGroup.Item>
                                    <ListGroup.Item>OpenCart {this.renderStars(4)}</ListGroup.Item>
                                    <ListGroup.Item>Smallatlk (Cincom) {this.renderStars(4)}</ListGroup.Item>
                                    <ListGroup.Item>MySql/MariaDb {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>OracleDB 11g, 12g, 18g {this.renderStars(4)}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Front-end</Card.Header>
                            <Card.Body>
                                <Card.Title>UI, UX and Animations</Card.Title>
                                <ListGroup style={{ color: 'black' }}>
                                    <ListGroup.Item>Javascript {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>React.js {this.renderStars(4)}</ListGroup.Item>
                                    <ListGroup.Item>Angular 2.xx {this.renderStars(2)}</ListGroup.Item>
                                    <ListGroup.Item>HTML5/CSS3 {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>Bootstrap {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>Sass {this.renderStars(3)}</ListGroup.Item>
                                    <ListGroup.Item>XML {this.renderStars(3)}</ListGroup.Item>
                                    <ListGroup.Item>JQuery {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>CSS animations {this.renderStars(4)}</ListGroup.Item>
                                    <ListGroup.Item>Svg {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>Responsive design {this.renderStars(5)}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Server side</Card.Header>
                            <Card.Body>
                                <Card.Title>Primary Card Title</Card.Title>
                                <ListGroup style={{ color: 'black' }}>
                                    <ListGroup.Item>Windows 10 {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>Windows Server 12 / 16 {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>Active Directory / SCCM {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>Networking {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>Firewall (Palo Alto) {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>VMWare / Hyper-V {this.renderStars(4)}</ListGroup.Item>
                                    <ListGroup.Item>CMD/Powershell {this.renderStars(3)}</ListGroup.Item>
                                    <ListGroup.Item>Linux Debian / Arch {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>Bash {this.renderStars(5)}</ListGroup.Item>
                                    <ListGroup.Item>Apache2 / IIS Hosting {this.renderStars(4)}</ListGroup.Item>
                                    <ListGroup.Item>Proxy / VPN  {this.renderStars(5)}</ListGroup.Item>
                                </ListGroup>
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