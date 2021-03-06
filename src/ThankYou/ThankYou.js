import React from 'react';

import classes from './ThankYou.module.css';
import Button from '../UI/Button/Button';

const thankYou = props => {
    const ClickedHandler = () => (
        props.history.push('/')
    )

        return (
            <div className={classes.ThankYou}>
                <h1>Thank you for contacting me</h1>
                <h3>I will reach back tp you as soon as possible</h3>
                <Button clicked={ClickedHandler}>Home</Button>
            </div>
        )
}

export default thankYou;