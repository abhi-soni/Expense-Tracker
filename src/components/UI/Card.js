import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
        // "props.children" will recieve children components (ExpenseItem, ExpenseDate) etc from code.
    );
}

export default Card;