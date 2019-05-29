import React from 'react';
import styles from '../css/HostOrJoin.module.css';
import { Link } from 'react-router-dom';
import logo from '../img/picme-logo.png';
import '../css/App.css';
import styled from 'styled-components';


function generatePin() {
    let random = Math.floor((Math.random() * 8999) + 1000);
    let pin = random.toString();
    return pin;
}

export default function HostOrJoin({handleClickHost, showHost, showJoin}) {
    return (
        <HomePage>
             {/* <Link to='/'> */}
                <AppLogo src={logo} />
            {/* </Link> */}
                {showHost ?
                <Link onClick={() => (handleClickHost(generatePin()))} to='/host'>
                    <Button1>host</Button1>
                </Link> : null}
                    
                {showJoin ?
                <Link to='/join'>
                    <Button2>join</Button2>
                </Link> : null} 
            
        </HomePage>
    )
}

// STYLED COMPONENTS

const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

// start game button  
const Button1 = styled.button`
    background-color: #FF2D55;
    color: white;
    width: 200px;
    height: 50px;
    margin-top: 80px;
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
const Button2 = styled.button`
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

const AppLogo = styled.img`
  height: 180px;
`
