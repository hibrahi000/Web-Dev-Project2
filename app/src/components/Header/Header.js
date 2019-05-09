import React from 'react';
import classes from './Header.module.css';
import NavBar from '../NavBar/NavBar'
import Logo from '../Logo/Logo'
const Header = (props) => {
    return (
        <div className={classes.Header}>
            <Logo />
            <NavBar />
        </div>
    );
};

export default Header;