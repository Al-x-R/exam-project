import React from 'react';
import styles from './HowItWorkStep.module.sass';

const HowItWorkStep = (props) => {
    const {number, title, description} = props

    return (
        <div className={styles.step}>
            <div className={styles.step_circle}>{number}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default HowItWorkStep;
