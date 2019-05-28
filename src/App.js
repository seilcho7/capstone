import React from 'react';
import {
  Link,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import Home from './components/Home';
import Canvas from './components/Canvas';
import HostPage from './components/HostPage';
import JoinPage from './components/JoinPage';
import HostOrJoin from './components/HostOrJoin';
import HowToPlay from './components/HowToPlay';
import WaitPage from './components/WaitPage';
import styles from './css/JoinPage.module.css';
import Answer from './components/Answer';
// import SubmitAnswer from './components/SubmitAnswer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawingData: '',
      drawing: '',
      drawEnd: false,
      name: '',
      gamePin: '',
      roomId: '',
      saveRoomId: '',
      socketRoomId: '',
      users: '',
      redirect: false,
      joined: styles.joinButton,
      isHost: false,
      answerChoices: ['bird', 'birdDog', 'Flying Panda!'],
      start: false,
      pointsArray: '',
      disableHost: false
    };  
  }

  componentDidMount() {
    // const { host } = window.location;
    const url = `ws://localhost:4000/ws`;
    this.connection = new WebSocket(url);

    this.connection.onmessage = (e) => {
      console.log(e.data);
      const data = JSON.parse(e.data);
      console.log(data);
      const {users, newUsers, roomPin, start, pointsArray, disableHostButton} = JSON.parse(e.data)
      console.log("================= You put a console log here =================");
      console.log(newUsers);

      Object.keys(data).forEach((key) => {
        switch(key){
          // case 'drawData':
          //   console.log("drawData did a thing in new switch");
          //   this.setState({
          //     drawingData: drawData
          //   })
          //   break;
          case 'users': 
            console.log("users did a thing in new switch");
            this.setState({
              users: users
            })
            break;
          case 'roomPin': 
            console.log("roomId did a thing in new switch");
            this.setState({
              socketRoomId: roomPin
            })
            break;
          case 'start': 
            console.log("start did a thing in new switch");
            this.setState({
              start,
              users: newUsers,
            })
            break;
          case 'pointsArray':
            this.setState({
              pointsArray
            })
          case 'disableHostButton':
            this.setState({
              disableHost: disableHostButton
            })
          default: 
            console.log('Not working - NEW switch')
            break;
        }
      })
      // console.log(this.state.socketRoomId.roomId);
      // console.log (this.state.drawing)
    }
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/how-to-play' component={HowToPlay} />
        <Route path="/answer" component={(props) => (
            <Answer {...props} answerChoices={this.state.answerChoices} />
          )}/>
        {/* <Route path="/submitanswer" component={(props) => (
            <SubmitAnswer {...props} submitAnswer={this._addAnswerChoice}/>
          )}/> */}
        <Route path='/host-or-join' render={(props) => (
            <HostOrJoin {...props} handleClickHost={this._setPin} disableHost={this.state.disableHost} />
          )} />
        <Route path='/host' render={(props) => (
            <HostPage {...props} users={this.state.users} pin={this.state.roomId} resetData={this._resetData} confirmHost={this._confirmHost} />
          )} />
        <Route path='/join' render={(props) => (
            <JoinPage {...props} nameValue={this.state.name} name={this._handleChangeName} pinValue={this.state.gamePin} pin={this._handleChangePin} submit={this._handleSubmitJoin} activate={this.state.joined} pinMatch={this._pinMatch}/>
        )} />
        <Route path ='/wait' render={(props) =>(
          <WaitPage {...props} isHost={this.state.isHost} gameStart={this.state.start} handleLeave={this._leaveWaitPage}/>
        ) } />
        <Route path ='/canvas' render={(props) =>(

          <Canvas users={this.state.users} hostStatus={this.state.isHost} isHost={this.state.isHost} connection={this.connection} name={this.state.name} points={this.state.pointsArray}/>
        ) } />

        {/* {this.state.start && !this.state.isHost ? <Canvas setDrawingData={this._setDrawingData} handleSend={this._sendDrawing} drawing={this.state.drawingData} saveableCanvas={this.saveableCanvas} /> : null} */}
      </div>
    )
  }
  _login = () => {
    this.connection.send(JSON.stringify({
      login: 1
    }))
  }

  _drawTimeCount = () => {
    this.setState({
      drawEnd: true
    })
  }
  _pinMatch =() => {
    if(this.state.gamePin === this.state.socketRoomId) {
      this.setState({
        joined: styles.joinButtonActivated
      })
    }
  }
  _handleChangeName =(event)=> {
    console.log (event.target.value)
    this.setState({
        name: event.target.value
    })
  }
  _handleChangePin =(event)=> {
    console.log (event.target.value)
    
    this.setState({
        gamePin: event.target.value
    })
    if(event.target.value === this.state.socketRoomId) {
      this.setState({
        joined: styles.joinButtonActivated
      })
    }
  }
  _handleSubmitJoin = e =>{
    if (this.state.gamePin === this.state.socketRoomId) {
      this.connection.send(JSON.stringify({
        name: this.state.name,
        gamePin: this.state.gamePin,
        disableHost: this.state.disableHost
      }))
      // window.location.assign('http://localhost:3000/wait')
    } else if(this.state.gamePin !== this.state.socketRoomId){
      alert("WRONG PIN")
    }
  }
  _setPin = (roomId) => {
    this.setState({
      roomId,
      disableHost: true
    }, () => {
      this.connection.send(JSON.stringify({roomId: this.state.roomId, disableHost: this.state.disableHost}));
    })
  }
  _resetData = () => {
    this.setState({
      saveRoomId: this.state.roomId,
      roomId: '',
      socketRoomId: '',
      disableHost: false
    }, () => {
      this.connection.send(JSON.stringify({saveRoomId: this.state.saveRoomId, disableHost: this.state.disableHost}))
    })
  }

  _confirmHost = () => {
    this.setState({
      isHost: true
    }, () => {
      this.connection.send(JSON.stringify({start: true, roomId: this.state.socketRoomId}));
    })
    console.log(this.state.isHost);
    console.log(this.state.start);
  }

  _addAnswerChoice = (newAnswer) => {
    this.setState({
      answerChoices: [...this.state.answerChoices, newAnswer]
    })
    console.log("Did you ring?");
  }

}


export default App;
