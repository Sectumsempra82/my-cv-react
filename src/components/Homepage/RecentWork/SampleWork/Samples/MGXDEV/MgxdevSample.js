import React from 'react';
import classes from './MgxdevSample.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import won from '../../../../../../assets/images/MGX/won.png';




const MgxdevSample = (props) => {
    return (

        <div className={classes.MgxdevSample}>
            <div className={classes.BrandName}><h3>Mediagenix NG</h3></div>
            <p>   Contacts: <a href='https://www.mediagenix.tv/en/'>  Website </a> - <a href="https://www.facebook.com/MEDIAGENIX/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /> </a> - <a href="https://www.linkedin.com/company/mediagenix-ng/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /> </a></p>
            <h5><b>Back-end / GUI Developer <br /> September 2017 / September 2018</b></h5>
            <h6>Mission:</h6>

                    <p><b>Back-end development of <a href='https://en.wikipedia.org/wiki/WHATS%27On_(Software)'> Whats'On</a>, a major broadcast scheduling system</b></p>
                    <img src={won} alt="Whats'On software" />
                    <ul>
                        <li>
                            <p>Object-Oriented development in <a href="https://en.wikipedia.org/wiki/Smalltalk">Smalltalk</a>, within the <a href="http://www.cincomsmalltalk.com/main/community/product-portal/trying-cincom-smalltalk/try-cincom-smalltalk/">Cincom VisualWorks IDE</a>.</p>
                        </li>
                        <li>
                            <p>GUI Development</p>
                        </li>
                        <li>
                            <p>Debugging and testing</p>
                        </li>
                        <li>
                            <p>REST and SOAP APIs</p>

                        </li>
                        <li>
                            <p>Development on OracleDB 11, 12, 18</p>
                        </li>
                        <li>
                            <p>AGILE / SCRRUM / KANBAN </p>
                        </li>
                        <li>
                            <p>On-site integration development with 3rd party software</p>
                        </li>
                    </ul>

        </div>

    );
}

export default MgxdevSample;