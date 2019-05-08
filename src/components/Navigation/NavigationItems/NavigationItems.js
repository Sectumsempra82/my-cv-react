import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <>
        <ul className={classes.NavigationItems}>
            <li><NavigationItem link="/" exact>Home</NavigationItem></li>
            <li><NavigationItem link="https://github.com/Sectumsempra82?tab=repositories" exact><FontAwesomeIcon icon={['fab', 'github']} /></NavigationItem></li>
        </ul>
    </>
);

export default navigationItems;