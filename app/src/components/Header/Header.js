import React from 'react';
import classes from './Header.module.css';
import NavBar from '../NavBar/NavBar'
import CustomButton from '../CustomButton/CustomButton'
import Logo from '../Logo/Logo'
import Grid from '@material-ui/core/Grid';
const Header = (props) => {
    return (
        <div className={classes.Header}>
            <Logo />
            <NavBar />
        </div>
    );
};

export default Header;