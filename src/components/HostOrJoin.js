import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/picme-logo.png';
import '../css/App.css';
import styled from 'styled-components';
import { Wrapper, Button2 } from './Home';


function generatePin() {
    let random = Math.floor((Math.random() * 8999) + 1000);
    let pin = random.toString();
    return pin;
}

export default function HostOrJoin({handleClickHost, showHost, showJoin}) {
    return (
        <Wrapper>
             {/* <Link to='/'> */}
                <AppLogo src={logo} />
            {/* </Link> */}
                {showHost ?
                <Link onClick={() => (handleClickHost(generatePin()))} to='/host'>
                    <Button1>host</Button1>
                </Link> : <div><Button3></Button3></div>}
                <Link to='/join'>
                    <Button2>join</Button2>
                </Link>
    
            
        </Wrapper>
    )
}

// STYLED COMPONENTS

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


const Button3 = styled.button`
    background-color: black;
    width: 200px;
    height: 50px;
    margin-top: 80px;
    margin-bottom: 10px;
    border-color: black;
`;

const AppLogo = styled.img`
  height: 180px;
`
