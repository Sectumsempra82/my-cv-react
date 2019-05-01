import React from 'react';
import classes from './ThisWebsite.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const ThisWebsite = (props) => {
    return (

        <div className={classes.MgxdevSample}>
            <div className={classes.BrandName}><h3>This Website</h3></div>
            <p>Contacts: <a href='https://sectumsempra82.github.io/my-cv-react/#/'>  Website </a> - <a href="https://www.linkedin.com/in/radu-cristian-bejan/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /> </a>  - <a href="https://www.linkedin.com/in/radu-cristian-bejan/"><FontAwesomeIcon icon={['fas', 'envelope-open-text']} /> </a> </p>
            <h6>Mission:</h6>
            <div className={classes.BrandName}><h5><b>Online Portfolio </b>/b></h5></div>
            <p>This is my online portfolio. <br></br> You can find the source code for it on <a href='https://github.com/Sectumsempra82/my-cv-react'>GitHub</a> and an online version, hosted on GitHub Pages, at <a href='https://sectumsempra82.github.io/my-cv-react/'>https://sectumsempra82.github.io/my-cv-react/</a></p>
        </div>

    );
}

export default ThisWebsite;