import React from 'react';
import classes from './NavBar.module.css';

const NavBar = (props) => {
    return (
        <div className={classes.NavBar}>
            <ul>
                <li><a href="_blank">Home</a></li>
                <li><a href="_blank">Catagory</a></li>
                <li><a href="_blank">Contact</a></li>
                <li><a href="_blank">About</a></li>
            </ul>
        </div> 
    );
};

export default NavBar;