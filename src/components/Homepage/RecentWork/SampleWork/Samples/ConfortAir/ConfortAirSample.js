
import React from 'react';
import classes from './ConfortAirSample.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ConfortAirSample = (props) => {
    return (

        <div className={classes.ConfortAirSample}>
            <h2>ConfortAirSample S.R.L.</h2>
            <p>   Contacts: <a href='https://www.confortair.it'>  Website </a> - <a href="https://www.facebook.com/confortair/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /> </a> </p>
            <h3>Web Developer -- September 2014 / July 2017</h3>
            <h5>Mission:</h5>
            <ul>
                <li>
                    <p>Back-end redesign: <a href='https://www.confortair.it'>  ConfortAir.it </a></p>
                    <ul>
                        <li>
                            New Php Back-end
                        </li>
                        <li>
                            Form re-implementation in : React.js / Angular.js / Php
                        </li>
                        <li>
                            New mailing system
                        </li>
                        <li>
                            Mobile friendly adaptation
                        </li>
                        <li>
                            SEO
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Complete website redesign:<a href='https://www.climagratis.it'> Climagratis.it </a> </p>
                    <ul>
                        <li>
                        <a href='https://www.climagratis.it'> Front-end redesign </a> 
                        </li>
                        <li>
                            Custom Php Back-end with user management
                        </li>
                        <li>
                            Responsive design
                        </li>
                        
                    </ul>
                </li>
                <li>
                    Website prototype
                    </li>
            </ul>
        </div>

    );
}

export default ConfortAirSample;