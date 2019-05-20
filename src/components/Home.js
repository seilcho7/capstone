import React from 'react';
import styled, { keyframes } from 'styled-components'

function Home () {
    return (
        <HomePage>
            <Logo>PicMe</Logo>
            <Button>Click to play</Button>
        </HomePage>
    );
}


export default Home;


const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50%;
    background-color: #E5E5E5;
`;
    
    const Button = styled.button`
    background-color: #1A2230;
    color: white;
    width: 200px;
    height: 50px;
    border-radius: 4px;
    font-family: 'Avenir';
    &:hover {
        cursor: pointer;
        background-color: lightgray;
    }
`;


const coolKeyframes = keyframes`
  0% {
    color: white;
  }
  100% {
    letter-spacing: 5px;
  }
`

const Logo = styled.text`
    font-family: 'Moonllime';
    font-size: 125px;
    color: #101FA3;
    animation-name: ${coolKeyframes};
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
`;

 