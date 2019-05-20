import React from 'react';
import styles from '../css/JoinPage.module.css';

export default function JoinPage() {
    return (
        <div>
            <div className={styles.text}>
                <h1>PicMe</h1>
                <h3>Join a Game</h3>
            </div>
            <div classname={styles.inputContainer}>
                <div className={styles.nameInputContainer}>
                    <h3>Display Name</h3>
                    <input className={styles.nameInput} type="text"/>
                </div>
                <div className={styles.pinInputContainer}>
                    <h3>Game Pin</h3>
                    <input className={styles.pinInput} />
                </div>
            </div>
            <div className={styles.joinButtonContainer}>
                <button className={styles.joinButton}>Join</button>
            </div>
        </div>
    )
}