import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logo from '../img/picme-logo.png';


function HowToPlay() {
  return (
      <Wrapper>
            {/* <Link to='/'> */}
              <AppLogo src={logo} />
            {/* </Link> */}
       <Heading>How to play</Heading>
       <Text>
       Join as a host or player. As the host, you will receive a prompt to draw. Your friends will then make their best guesses, and you choose the closest (or favorite) answer. 
       </Text>
          <Link to='/host-or-join'>
              <Button1>let's play!</Button1>
            </Link>

      </Wrapper>
    );
}

  export default HowToPlay;

  const Wrapper = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    padding: 30px;
  `;

  const Heading = styled.text`
    font-weight: bold;
    text-transform: uppercase; 
    text-align: center;
    font-size: 56px;
    color: white;
    margin-bottom: 20px;
  `;

  const Text = styled.text`
    text-align: center;
    font-size: 24px;
    color: white;
    padding-right: 30px;
    padding-left: 30px;
  `;

  const Button1 = styled.button`
  background-color: #FF2D55;
  color: white;
  width: 200px;
  height: 50px;
  margin-top: 50px;
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
  height: 80px;
  margin-bottom: 50px;
`