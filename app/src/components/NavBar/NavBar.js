import React from 'react';
import classes from './NavBar.module.css';

const NavBar = (props) => {
    return (
        <div className={classes.NavBar}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Catagory">Catagory</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/About">About</a></li>
            </ul>
        </div> 
    );
};

export default NavBar;