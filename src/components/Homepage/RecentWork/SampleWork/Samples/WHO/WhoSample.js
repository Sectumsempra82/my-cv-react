import React from 'react';
import classes from './WhoSample.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const WhoSample = (props) => {
    return (

        <div className={classes.MgxdevSample}>
            <div className={classes.BrandName}><h3>Who's next?</h3></div>
            <div className={classes.BrandName}><h5><b>RADU-CRISTIAN BEJAN</b></h5></div>
            <p>Contacts: <a href='https://sectumsempra82.github.io/my-cv-react/#/'>  Website </a> - <a href="https://www.linkedin.com/in/radu-cristian-bejan/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /> </a>  - <a href="https://www.linkedin.com/in/radu-cristian-bejan/"><FontAwesomeIcon icon={['fas', 'envelope-open-text']} /> </a> </p>
            <h6>Mission:</h6>
            <h5><b>Web Developer / Programmer / You name it</b></h5>
            <p>These days I am looking for a new mission. <br></br> If you think you need someone ready to face your challenges, works well in a team and brings fresh ideas, do not hesitate to contact me at <a href="mailto:sectumsempra82@gmail.com">sectumsempra82@gmail.com</a> or get in touch on <a href="https://www.linkedin.com/in/radu-cristian-bejan/">LinkedIn</a></p>
        </div>

    );
}

export default WhoSample;