import React from 'react';
import classes from './Header.module.css';
import NavBar from '../NavBar/NavBar'
import Logo from '../Logo/Logo'
import Grid from '@material-ui/core/Grid'
const Header = (props) => {
    return (
        <div className={classes.Header}>
            <Grid container size={40}>
                <Grid item xs={8}>
                    <Logo />
                </Grid>
                <Grid item xs={4}>
                    <NavBar />
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;