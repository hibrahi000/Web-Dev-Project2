import React from 'react';
import classes from './NavBar.module.css';

const NavBar = (props) => {
    return (
            <ul>
                <li><a href="_blank">Home</a></li>
                <li><a href="_blank">News</a></li>
                <li><a href="_blank">Contact</a></li>
                <li><a href="_blank">About</a></li>
            </ul>
    );
};

export default NavBar;