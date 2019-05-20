import React from 'react';
import axios from 'axios';
import qs from 'qs';

import Canvas from './components/Canvas';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawingData: '',
      drawing: '',
      activePlayer: true
    };  
  }

  componentDidMount() {
          //  If player is active player, draw data from state will be sent over websocket to database 
        // if (this.state.activePlayer=== true) {
        //     setInterval(async () => {
        //       const saveData = this.saveableCanvas.getSaveData(); 
        //           const object = []
        //           object.push(saveData)
        //             this.setState({
        //               drawingData: object
        //           })
        //       this.connection.send(JSON.stringify({message: this.state.drawingData[0]}));
        //       // this.saveableCanvas.loadSaveData(this.state.drawing[this.state.drawing.length-1])
        //     }, 8000);

        //       // If player is not active player, canvas should load new save data from state every 10 seconds
        // } else if (this.state.activePlayer=== false) {
        //     setInterval(async () => {
        //       this.saveableCanvas.loadSaveData(this.state.drawing[this.state.drawing.length-1])
        //     }, 10000)


        // }
    /// need to create countdown (30-45 seconds) that sets activePlayer to false;
    /// perhaps have another state variable that passes in ID of sorts based on when the 
    // player enters the room. 

    // const { host } = window.location;
    const url = `ws://localhost:31337/ws`;  // Sadly, the react proxy not playing well with websockets
    this.connection = new WebSocket(url);

    this.connection.onmessage = (e) => {
      console.log(e);
      console.log(e.data);
      this.setState({
        drawing: JSON.parse(e.data)
      });  
      console.log (this.state.drawing)    
    }
  }

  render() {
    return (
      <div className="App">
        <Canvas setDrawingData={this._setDrawingData} handleSend={this._sendDrawing} drawing={this.state.drawing} saveableCanvas={this.saveableCanvas} />
      </div>
    );
  }

  _sendDrawing = async () => {   
    this.connection.send(JSON.stringify({message: this.state.drawingData[0]}));
  
    this.setState({
      drawingData: ''
    })
  }

  _setDrawingData = (object) => {
    this.setState({
      drawingData: object
    })
  }

}


export default App;
