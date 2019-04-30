import React from 'react';
import classes from './DgfSample.module.css';
import dgflogo from '../../../../../../assets/images/DGF/dgf_logo.png'; 
import dgfcover from '../../../../../../assets/images/DGF/cover.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DgfSample = (props) => {
    return (

            <div className={classes.DgfSample}>
                <h2>DGF PROFESSIONAL </h2>
                <p>   Contacts:  <a href="https://www.facebook.com/pg/DGF-Professional-Assistenza-infermieristica-a-domicilio-449303755235534/posts/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /> </a> </p>
                <h3>Freelancer -- December 2014 / January 2015</h3>
                <h5>Mission:</h5>
                <ul>
                    <li>
                        <p>Logo Design</p>
                        <img src={dgflogo} alt='Dgf Professional Logo' />
                    </li>
                    <li>
                        Cover Design
                        <img src={dgfcover} alt='Dgf Professional Cover' />
                    </li>
                    <li>
                        Website prototype
                    </li>
                </ul>
            </div>

            );
}

export default DgfSample;