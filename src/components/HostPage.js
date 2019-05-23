import React from 'react';
import styles from '../css/HostPage.module.css';
import { Link } from 'react-router-dom';
import logo from '../img/picme-logo.png';
import styled from 'styled-components';

export default function HostPage({pin, resetPin, users}) {
    console.log(pin);
    return (
        <div>
            <div className={styles.text}>
            <AppLogo src={logo} />
                <h3>Join this Game using the Pin:</h3>
                <h3>{pin}</h3>
            </div>
            <div className={styles.userListContainer}>
                <ul className={styles.userList}>
                    {users ? users.map((user, i) => (<li key={i}>{users[i]}</li>)) : null}
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <Link to='/' className={styles.startButton}>Start Game</Link>
                <Link to='/host-or-join' onClick={resetPin} className={styles.cancelButton}>Cancel Game</Link>
            </div>
        </div>
    )
}

const AppLogo = styled.img`
  height: 150px;
`