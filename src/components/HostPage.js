import React from 'react';
import styles from '../css/HostPage.module.css';
import { Link } from 'react-router-dom';
import logo from '../img/picme-logo.png';
import styled from 'styled-components';

export default function HostPage({pin, resetData, users, confirmHost}) {
    return (
        <Wrapper>
            <div className={styles.pinNum}>
                <AppLogo src={logo} />
                <h3>join this game using the pin:</h3>
                <Pin>{pin}</Pin>
            </div>
            <div className={styles.userListContainer}>
                <ul className={styles.userList}>
                    {users ? users.map((user, i) => (<li key={i}>{users[i]}</li>)) : null}
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                {users[0] ? <Link to='/canvas' onClick={confirmHost}>
                    <Button1>start</Button1>
                </Link> : null}
                <Link to='/host-or-join' onClick={resetData}>
                    <Button2>cancel</Button2>
                </Link>
            </div>
        
        </Wrapper>
    )
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin-top: 20px;
`;

const AppLogo = styled.img`
    height: 180px;
`
const Pin = styled.div`
    font-size: 60px;
`

export const Button1 = styled.button`
    background-color: #FF2D55;
    color: white;
    width: 200px;
    height: 50px;
    margin-top: 0px;
    margin-bottom: 10px;
    border-radius: 25px;
    border-color: black;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 20px;
    &:hover {
        cursor: pointer;
        background-color: #b82640;;
        color: white;
    }
`;

// how to play button
export const Button2 = styled.button`
    background-color: #5856D6;
    color: white;
    width: 200px;
    height: 50px;
    margin: 10px;
    border-radius: 25px;
    border-color: black;
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 20px;
    &:hover {
        cursor: pointer;
        background-color: #393898;
        color: white;
    }
`;