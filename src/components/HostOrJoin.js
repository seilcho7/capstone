import React from 'react';
import styles from '../css/HostOrJoin.module.css';
import { Link } from 'react-router-dom';

export default function HostOrJoin() {
    return (
        <div>
            <div className={styles.hostButtonContainer}>
                <Link to='/host'><button className={styles.hostButton}>Host</button></Link>
            </div>
            <div className={styles.joinButtonContainer}>
                <Link to='join'><button className={styles.joinButton}>Join</button></Link>
            </div>
        </div>
    )
}