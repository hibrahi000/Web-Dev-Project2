import React from 'react';
import classes from './CustomButton.module.css'

const CustomButton = (props) => <button className={classes.CustomButton} >{props.children}</button>

export default CustomButton;