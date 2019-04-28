import React from 'react';

import myLogo from '../../assets/images/my-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={myLogo} alt="RCBLogo" />
    </div>
);

export default logo;