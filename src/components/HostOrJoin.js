import React from 'react';
import styles from '../css/HostOrJoin.module.css';
import { Link } from 'react-router-dom';


function generatePin() {
    let random = Math.floor((Math.random() * 500) + 1000);
    let pin = random.toString();
    return pin;
}

export default function HostOrJoin({handleClickHost}) {
    return (
        <div>
            <div className={styles.hostButtonContainer}>
                <Link onClick={() => (handleClickHost(generatePin()))} className={styles.hostButton} to='/host'>Host</Link>
            </div>
            <div className={styles.joinButtonContainer}>
                <Link className={styles.joinButton} to='/join'>Join</Link>
            </div>
        </div>
    )
}