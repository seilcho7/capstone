import React from 'react';
import styles from '../css/HostPage.module.css';
import { Link } from 'react-router-dom';

export default function HostPage({pin}) {
    console.log(pin)
    return (
        <div>
            <div className={styles.text}>
                <h1>PicMe</h1>
                <h3>Join this Game using the Pin:</h3>
                <h3>{pin}</h3>
            </div>
            <div className={styles.userListContainer}>
                <ul className={styles.userList}>
                    <li>seil</li>
                    <li>ashish</li>
                    <li>antonio</li>
                    <li>rebecca</li>
                    <li>rebecca</li>
                    <li>chris</li>
                    <li>samson</li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <Link to='/' className={styles.startButton}>Start Game</Link>
                <Link to='/host-or-join' className={styles.cancelButton}>Cancel Game</Link>
            </div>
        </div>
    )
}