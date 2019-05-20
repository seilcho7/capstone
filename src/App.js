import React from 'react';
import axios from 'axios';
import qs from 'qs';
import CanvasDraw from 'react-canvas-draw';
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
    const url = `ws:64.124.76.250:31337/ws`;  // Sadly, the react proxy not playing well with websockets
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
        <h1>Canvas App</h1>
        {/*           Save button  */}
            <button onClick={() => {
                  // localStorage.setItem( "savedDrawing",this.saveableCanvas.getSaveData());
                  // Retrieves from local storage and  pushes into empty array 
                  // const save = localStorage.getItem("savedDrawing")

                  // stores canvas data in variable and pushes to array 

                  const saveData = this.saveableCanvas.getSaveData(); 
                  const object = []
                  object.push(saveData)
                    this.setState({
                      drawingData: object
                  })
                  console.log(this.state.drawingData)
                }}>
                Save
              </button>

              {/*               Load button will retrieve the last drawing from state  */}
              <button
              onClick={() => {
                console.log('loading data')
                console.log(this.state.drawing)
                this.saveableCanvas.loadSaveData(
                  this.state.drawing
                )
              }}
              >Load</button>
            <button
                onClick={this._sendDrawing}
              >
                SendDrawing
              </button>
          <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)} />
    
  

        
      </div>
    );
  }

  _sendDrawing = async () => {   
    this.connection.send(JSON.stringify({message: this.state.drawingData[0]}));
  
    this.setState({
      drawingData: ''
    })
  }

}


export default App;
