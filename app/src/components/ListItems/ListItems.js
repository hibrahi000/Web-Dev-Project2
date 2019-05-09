import React from 'react';
import classes from './ListItems.module.css'
const listItems = (props) => {
    
    let itemList = props.content.map((item, key) => {
        return <li key={key}><a href="_blank">{item}</a></li>
    })

    return (
        <div className={classes.ListItems}>
            <h3>{props.title}</h3>
            <ul>
                {itemList}
            </ul>
        </div>
    );
};

export default listItems;