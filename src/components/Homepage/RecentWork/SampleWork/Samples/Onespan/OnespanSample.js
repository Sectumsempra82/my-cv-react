import React from 'react';
import classes from './OnespanSample.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Onespan from '../../../../../../assets/images/OS/OneSpan.jpg';




const OnespanSample = (props) => {
    return (

        <div className={classes.OnespanSample}>
            <div className={classes.BrandName}><h3>Onespan (VASCO)</h3></div>
            <p>   Contacts: <a href='https://www.onespan.com/'>  Website </a> - <a href="https://www.facebook.com/onespan"><FontAwesomeIcon icon={['fab', 'facebook-f']} /> </a> - <a href="https://www.linkedin.com/company/onespan/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /> </a></p>
            <h5><b>Support Specialist / First line support <br /> May 2019 - November 2019</b></h5>
            <h6>Mission:</h6>

                    <p><b>First line technical support for Banking and Enterprise customers on security software</b></p>
                    <img src={Onespan} alt="OneSpan" />
                    <ul>
                        <li>
                            <p>First line support on a range of security software for servers, desktop and mobile devices</p>
                        </li>
                        <li>
                            <p>Incident management</p>
                        </li>
                        <li>
                            <p>Bug hunt and testing C++ / Java / Android / IOS applications</p>
                        </li>
                        <li>
                            <p>FIDO / Digipass / Oath / OTP</p>

                        </li>
                        <li>
                            <p>Working on ticket based system</p>
                        </li>
                        <li>
                            <p>24/7 turn based phone call support</p>
                        </li>
                        <li>
                            <p>Security and encryption</p>
                        </li>
                    </ul>

        </div>

    );
}

export default OnespanSample;