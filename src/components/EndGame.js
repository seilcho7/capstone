import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export class EndGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.users ? this.props.users.map((user, i) => (<li key={i}>Player:{' '}{user} Points{' '}:{this.state.pointsArray[i]}</li>)) : null}
                </ul>
            
                <Link onClick={() => {
                        this.props.resetData();
                        }} to='/'>
                        <Button1>Go back home</Button1>
                </Link>
            </div>
        )
    }
}

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

export default EndGame;
