import React from 'react';
import styles from '../css/JoinPage.module.css';
import { Redirect, Link } from 'react-router-dom'; 
import logo from '../img/picme-logo.png';
import styled from 'styled-components';
import { Button1 } from './HostPage';
import { Wrapper } from './Home';

// export default function JoinPage ({nameValue, name, pinValue, pin, submit, activate, kickUsers}){
export default class JoinPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    componentDidMount() {
        this.props.resetNamePin();
        this.props.resetJoinButton();
    }

    render () {
        return (
            <Wrapper>
                { this.props.kickUsers ? <Redirect to='/host-or-join' /> : null}
                <div className={styles.text}>
                {/* <Link to='/'> */}
                    <AppLogo src={logo} />
                {/* </Link> */}
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.nameInputContainer}>
                        <Input placeholder={'display name'} value ={this.props.nameValue} className={styles.nameInput} type="text" onChange={this.props.name}/>
                    </div>
                    <div className={styles.pinInputContainer}>
                        <Input placeholder={'game pin'} value={this.props.pinValue} className={styles.pinInput} onChange={this.props.pin}/>
                    </div>
                </div>
            <div className={styles.ButtonContainer}>
            <Link to= '/wait' onClick={this.props.submit} className={this.props.activate}>
                <Button1 onClick={this.props.submit} className={styles.joinButton}> join </Button1></Link>
                {/* <Link to='/host-or-join' className={styles.cancelButton}>
                    <Button2>cancel</Button2>
                 </Link> */}
                {/* <Link to= '/wait' onClick={submit} className={activate}> Join </Link> */}
                {/* <Link to='/host-or-join' className={styles.cancelButton}>Cancel</Link> */}
            </div>
        </Wrapper>
        )

    }
}


const AppLogo = styled.img`
    height: 180px;
    margin-bottom: 30px;
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
