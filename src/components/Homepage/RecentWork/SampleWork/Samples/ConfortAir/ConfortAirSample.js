import React from 'react';
import classes from './ConfortAirSample.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import banner from '../../../../../../assets/images/ConfortAir/banner.jpg';
import form from '../../../../../../assets/images/ConfortAir/confort_form.png';
import clima from '../../../../../../assets/images/ConfortAir/clima.png';
import appenergia from '../../../../../../assets/images/ConfortAir/appenergia.png';



const ConfortAirSample = (props) => {
    return (

        <div className={classes.ConfortAirSample}>
            <h2>ConfortAir S.R.L.</h2>
            <p>   Contacts: <a href='https://www.confortair.it'>  Website </a> - <a href="https://www.facebook.com/confortair/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /> </a> </p>
            <h3>Web Developer -- September 2014 / July 2017</h3>
            <h5>Mission:</h5>
            <ul>
                <li>
                    <p><b>Back-end redesign</b>: <a href='https://www.confortair.it'>  ConfortAir.it </a></p>
                    <ul>
                        <li>
                            <p>New Php Back-end</p>
                        </li>
                        <li>
                            <p>Form re-implementation in : React.js / Angular.js / Php</p>
                            <img src={form} alt="Form ConfortAir" />
                        </li>
                        <li>
                            <p>New mailing system</p>
                        </li>
                        <li>
                            <p>Mobile friendly adaptation</p>
                            <img src={banner} alt="Banner ConfortAir Responsive" />
                        </li>
                        <li>
                            <p>SEO</p>
                        </li>
                        <li><p><a href='https://www.confortair.it'>  Check the website </a></p></li>
                    </ul>
                </li>
                <li>
                    <p><b>Complete website redesign</b>:<a href='https://www.climagratis.it'> Climagratis.it </a> </p>
                    <ul>
                        <li>
                            <p><a href='https://www.climagratis.it'> Front-end redesign </a> </p>
                            <img src={clima} alt="Climagratis front-end" />
                        </li>
                        <li>
                            <p>Custom Php Back-end with user management</p>
                        </li>
                        <li>
                            <p>Responsive design</p>
                        </li>

                    </ul>
                </li>
                <li>
                    <p><b>Realization of</b>:<a href='http://www.appenergia.com'> AppEnergia.com </a> </p>
                    
                    <ul>
                        <li>
                        <p><a href='http://www.appenergia.com'> Front-end design </a> </p>
                            <img src={appenergia} alt="Appenergia front-end" />
                        </li>
                        <li>
                            Multi-domain / Multilanguage website
                        </li>
                        <li>
                            SEO
                        </li>
                    </ul>
                </li>
                <li>
                    <p><b>Maintenance of many existing portals among which:</b></p>
                    <ul>
                        <li>
                            <p><a href='http://www.confortservizi.it'>Confortservizi.it</a></p>
                        </li>
                        <li><p><a href='http://www.confortairlions.it'>Confortairlions.it</a></p></li>
                        <li><p><a href='http://www.assistenzaemmeti.it'>Assistenzaemmeti.in</a></p></li>
                        <li><p><a href='http://www.emmetiassistenza.it'>Emmetiassistenza.in</a></p></li>
                        <li><p><a href='http://www.haierassistenza.it'>Haierassistenza.in</a></p></li>
                        <li><p><a href='http://www.ricambiemmeti.it'>Ricambiemmeti.in</a></p></li>
                        <li><p><a href='http://www.ricambihaier.it'>Ricambihaier.in</a></p></li>
                        <li><p><a href='http://www.assistenzahaier.it'>Assistenzahaier.in</a></p></li>
                    </ul>
                </li>
            </ul>
        </div>

    );
}

export default ConfortAirSample;