import React from 'react';
import styles from '../css/WaitPage.module.css';
import { Link, Redirect } from 'react-router-dom';
import GamePage from './GamePage'

export default function WaitPage({isHost, gameStart}) {
    return (
        <div>
            <h1>Waiting on Host to Start Game</h1>
            <div>
            { !isHost && gameStart ?
                <Redirect to='/gamePage' /> : <div></div>}
            </div>
            <div className={styles.leaveButtonContainer}>
                <Link to='/join' className={styles.leaveButton}>Leave</Link>
            </div>
        </div>
    )
}