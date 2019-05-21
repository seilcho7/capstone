import React from 'react';
import styles from '../css/WaitPage.module.css';
import { Link } from 'react-router-dom';

export default function WaitPage() {
    return (
        <div>
            <h1>Waiting on Host to Start Game</h1>
            <div className={styles.leaveButtonContainer}>
                <Link to='/join' className={styles.leaveButton}>Leave</Link>
            </div>
        </div>
    )
}