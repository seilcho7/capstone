import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../img/picme-logo.png';
import { Link } from 'react-router-dom';
import '../css/App.css';

function Home() {
    return (
        <HomePage>
                <AppLogo src={logo} />
            <Link to='/host-or-join'>
                <Button1>start game</Button1>
            </Link>
        <>
            <Link to='/how-to-play'>
                <Button2>how to play</Button2>
            </Link>
        </>
        </HomePage>
    );
}

export default Home;


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
    &:active {
        outline: none;
        background-color: #b82640;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
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
    &:active {
        outline: none;
        background-color: #393898;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
      }
`;

const AppLogo = styled.img`
  height: 180px;
`
