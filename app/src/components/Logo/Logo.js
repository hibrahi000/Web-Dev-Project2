import React from 'react';
import classes from './Logo.module.css';
import logoImg from '../../assets/nyc-health.png'
const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={logoImg}/>
        </div>
    );
};

export default Logo;