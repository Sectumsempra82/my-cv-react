import React from 'react';
import classNames from 'classnames/bind';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

let cx = classNames.bind(classes);

const sideDrawer = ( props ) => {

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
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;