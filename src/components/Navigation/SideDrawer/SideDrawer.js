import React from 'react';
import classNames from 'classnames/bind';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

let cx = classNames.bind(classes);

const sideDrawer = ( props ) => {
    // let attachedClasses = [classes.SideDrawer, classes.Close];
    // if (props.open) {
    //     attachedClasses = [classes.SideDrawer, classes.Open];
    // }

    let className = cx({
        SideDrawer: true,
        Close: !props.open,
        Open: props.open
      });

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={className} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems /* isAuthenticated={props.isAuth} */ />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;