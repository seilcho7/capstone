import React from 'react';
import styles from '../css/WaitPage.module.css';
import { Link, Redirect} from 'react-router-dom';
// import { getDiffieHellman } from 'crypto';
import styled from 'styled-components';
import { Button1} from './HostPage';



class WaitPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            gifs: [],
            gifType: ['cat', 'funny', 'start', 'cool', 'fun', 'awesome', 'dancing', 'play', 'games', 'ready', 'yay', 'dance', 'yeet', 'great', 'party', 'waiting', 'loading', 'wait']
        };
    }
    
    
    componentDidMount() {
        let max = this.state.gifType.length;
        let min = 0;
        let randomNum = Math.floor(Math.random() * (+max - +min)) + +min;

      fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.gifType[randomNum]}&api_key=1bfsUoRTBMhc1TV6tyg8jyIc8ddhB23f&limit=1`)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              isLoaded: true,
              gifs: result.data
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, gifs } = this.state;
      console.log(gifs);
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <Wrapper>
                <h1>waiting for host to start game</h1>
                { this.props.gameStart && !this.props.isHost ? <Redirect to='/canvas' /> : <div></div>}
                <div className={styles.leaveButtonContainer}>
                </div>
        
                {gifs.map(gif => (
                    <Gif src={gif.images.original.url} />
                    ))}
                <Button1>
                    <StyledLink to='/join' className={styles.leaveButton}>Leave</StyledLink>
                </Button1>
          </Wrapper>
        );
      }
    }
  }

  export default WaitPage;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    text-align: center;
  `;

  const Gif = styled.img`
    width: 290px; 
    height: 290px;
    border-radius: 50%;
    margin-bottom: 20px;
  `;
  
  const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
  `;
  