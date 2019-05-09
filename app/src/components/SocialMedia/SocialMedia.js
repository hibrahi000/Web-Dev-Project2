import React from 'react';
import classes from './SocialMedia.module.css'
const socialMedia = (props) => {
    
    let socialList = props.content.map((social, key) => {
        return <li key={key}><a href="_blank"><img src={social}/></a></li>
    })

    return (
        <div className={classes.SocialMedia}>
            <h3>{props.title}</h3>
            <ul>
                {socialList}
            </ul>
        </div>
    );
};

export default socialMedia;