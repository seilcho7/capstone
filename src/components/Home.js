import React from 'react';
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal';
import logo from './Logo1.png'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          show: false,
        };
      }
    
      _handleClose = () => {
        this.setState({ show: false });
      }
    
      _handleShow = () => {
        this.setState({ show: true });
      }
    
      render() {
        return (
            <HomePage>
                <img src={logo} />
                <Button>Click to play</Button>
          <>
            <Button onClick={this._handleShow}>
              How to Play
            </Button>
            <Modal show={this.state.show}>
                <ModalWrapper>
                    <Modal.Body>
                        Draw something and have people guess what you're drawing. Pick your favorite guess.
                    </Modal.Body>
                        <Modal.Footer>
                            <Button2 onClick={this._handleClose}>
                            Let's play!
                            </Button2>
                        </Modal.Footer>
                </ModalWrapper>
            </Modal>
          </>
            </HomePage>
        );
      }
    }
    

export default Home;


// STYLED COMPONENTS

const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 150px;
    background-color: black;
`;
    
const Button = styled.button`
    background-color: black;
    color: white;
    width: 200px;
    height: 50px;
    margin: 10px;
    border-radius: 4px;
    font-family: 'Avenir';
    font-size: 20px;
    &:hover {
        cursor: pointer;
        background-color: #39FF14;
        color: black;
    }
`;

const Button2 = styled.button`
    background-color: #4d4dff;
    color: white;
    width: 100px;
    height: 50px;
    border-radius: 4px;
    font-family: 'Avenir';
    font-size: 14px;
    margin-left: 20px;
    &:hover {
        cursor: pointer;
        background-color: #39FF14;
        color: black;
    }
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #4d4dff;
  color: white;
`;
