import React from 'react';
import styles from '../css/HostOrJoin.module.css';
import { Link } from 'react-router-dom';

export default function HostOrJoin() {
    return (
        <div>
            <div className={styles.hostButtonContainer}>
                <Link className={styles.hostButton} to='/host'>Host</Link>
            </div>
            <div className={styles.joinButtonContainer}>
                <Link className={styles.joinButton} to='/join'>Join</Link>
            </div>
        </div>
    )
}