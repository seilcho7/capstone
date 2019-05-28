import React from 'react';
import styles from '../css/JoinPage.module.css';
import { Link } from 'react-router-dom'; 
import logo from '../img/picme-logo.png';
import styled from 'styled-components';
import { Button1, Button2, Wrapper } from './HostPage';

export default function JoinPage ({nameValue, name, pinValue, pin, submit, activate, pinMatch}){
        return (
            <Wrapper>
                <div className={styles.text}>
                <Link to='/'>
                    <AppLogo src={logo} />
                </Link>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.nameInputContainer}>
                        <Input placeholder={'display name'} value ={nameValue} className={styles.nameInput} type="text" onChange={name}/>
                    </div>
                    <div className={styles.pinInputContainer}>
                        <Input placeholder={'game pin'} value={pinValue} className={styles.pinInput} onChange={pin}/>
                    </div>
                </div>
            <div className={styles.ButtonContainer}>
            <Link to= '/wait' onClick={submit} className={activate}>
                 <Button1 onClick={submit} className={styles.joinButton}> Join </Button1></Link>
                 <Link to='/host-or-join' className={styles.cancelButton}>
                     <Button2>cancel</Button2>
                 </Link>
                {/* <Link to= '/wait' onClick={submit} className={activate}> Join </Link> */}
                {/* <Link to='/host-or-join' className={styles.cancelButton}>Cancel</Link> */}
            </div>
        </Wrapper>
    )
}


const AppLogo = styled.img`
  height: 150px;
`

export const Input = styled.input`
    margin: 5px;
    width: 200px;
    height: 50px;
    text-align: center;
    font-size: 18px;
    font-family: 'Montserrat';
    background-color: lightgray;
    outline: none;
    border-radius: 25px;
    border: 2px solid black;
`;
