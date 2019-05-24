import React from 'react';
import styles from '../css/WaitPage.module.css';
import { Link, Redirect} from 'react-router-dom';

export default function WaitPage({gameStart, isHost}) {
    return (
        <div>
            <h1>Waiting on Host to Start Game</h1>
            { gameStart && !isHost ? <Redirect to='/canvas' /> : <div></div>}
            <div className={styles.leaveButtonContainer}>
                <Link to='/join' className={styles.leaveButton}>Leave</Link>
            </div>
        </div>
    )
}