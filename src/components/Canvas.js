import React from 'react';
import CanvasDraw from 'react-canvas-draw';
import styled from 'styled-components';
import AnswerSubmit from './AnswerSubmit'

export default class Canvas extends React.Component {
    // {handleSend, drawingData, saveableCanvas, setDrawingData, hostStatus}
    constructor(props) {
        super(props);
        this.state = {
            saveableCanvas: '',
            userAnswer: '',
            drawingData: '',
            userAnswers: '',
            submittedAnswer: false,
            playerNumber: '',
            activePlayer: 0,
            currentPoints: 0,
            pointsArray: ''
        }
    }
    
    componentDidMount(){

    if(this.props.connection) {
        this.setState({
            playerNumber:this.props.users.indexOf(this.props.name)
        })

        this.props.connection.onmessage = (e) => {
            const data = JSON.parse(e.data);
            console.log(data)
            const {drawData, userAnswers, nextPlayer, pointsArray} = JSON.parse(e.data);
            Object.keys(data).forEach((key) => {
                switch(key){
                    case 'drawData':
                        console.log("drawData did a thing in new switch");
                        this.setState({
                        drawingData: drawData
                        })
                    break;
                    case 'userAnswers':
                        this.setState({
                            userAnswers
                        })
                        console.log(this.state.userAnswers)
                        break;
                    case 'nextPlayer':
                        console.log('nextPlayer did a thing')
                        this.setState({
                            activePlayer: nextPlayer,
                            submittedAnswer:false,
                            userAnswers: ''
                        })
                        console.log(this.state.activePlayer)
                        break;
                    case 'pointsArray':
                        console.log('pointsArray did a thing')
                        this.setState({
                            pointsArray
                        })
                default:
                    break;
                }
            })
        }
    } else {
        console.log('no props! Start again from the beginning :)')
    }
}
    
    render() {
        if(this.props.hostStatus){
            console.log("YOU ARE IN IF HOSTSTATUS")
            if(this.state.drawingData){
                console.log("YOU ARE INSIDE THE OF set interval. check to see if data is still there")
                this.saveableCanvas.loadSaveData( //get derived states from props CONVERT TO CLASS
                    this.state.drawingData
                )
            }
        }
          
        return (
            <div>
            <Wrapper> 
                <Button onClick={() => {
                      // stores canvas data in variable and pushes to array 
                    const saveData = this.saveableCanvas.getSaveData(); 
                    const object = [];
                    object.push(saveData);
                    this.props.setDrawingData(object);
                    console.log(object)
                }}>
                Save
                </Button>
    
                {/*               Load button will retrieve the last drawing from state  */}
                <Button
                    onClick={() => {
                        console.log('loading data')
                        console.log(this.props.drawingData)
                        this.saveableCanvas.loadSaveData(
                            this.props.drawingData
                        )
                }}
                >Loadz</Button>
            <Button
                onClick={this.props.handleSend}
                >
                Send Drawing
                </Button>
                {/*   Host disabled canvas ternary render  */}
                { this.props.hostStatus ?  
                <div >
                    <CanvasDraw immediateLoading={true} disabled ref={canvasDraw => {
                    (this.saveableCanvas = canvasDraw)
                    }} />
                    {/*   User list and user points data render  */}
                    <ul>
                        {this.props.users ? this.props.users.map((user, i) => (<li key={i}>Player:{' '}{user} Points{' '}:{this.state.pointsArray[i]}</li>)) : null}
                    </ul> 
                    <h4> Answers </h4>
                        {this.state.userAnswers ? this.state.userAnswers.map((answer, i )=>(<li key={i}>{answer}</li>)): null}
                </div> : (this.state.activePlayer === this.state.playerNumber) ?
                // {/* //  User enabled canvas ternary render */}
                    <div onTouchEnd={async() => {
                        const saveData = await this.saveableCanvas.getSaveData();
                        const object = [];
                        object.push(saveData);
                        this._setDrawingData(object);
                        console.log(object);
                        this._sendDrawing();
                    }}
                    onMouseUp={async() => {
                        const saveData = await this.saveableCanvas.getSaveData();
                        const object = [];
                        object.push(saveData); 
                        this._setDrawingData(object);
                        console.log(object);
                        this._sendDrawing();
                    }}>
                        <CanvasDraw immediateLoading={true} ref={canvasDraw => {
                            (this.saveableCanvas = canvasDraw)
                        }} />
                        {/* Maps user answers as buttons to the active player */}
                        { this.state.userAnswers ? this.state.userAnswers.map((answer, i )=>(<li key={i}><button onClick={this._chooseAnswer} value={answer}>{answer}</button></li>)) : null}
                    </div> : 
                    // Answer Submit form
                    (this.state.activePlayer !== this.state.playerNumber && this.state.submittedAnswer === false) ?
                    <AnswerSubmit answerValue={this.state.userAnswer} handleChangeAnswer={this._handleChangeAnswer} submitAnswer={this._handleSubmit}/>
                    // Submitted answer 
                    : (this.state.activePlayer !== this.state.playerNumber && this.state.submittedAnswer === true) ? <div> Submitted answer! Good luck</div> 
                    : null}
                </Wrapper>
                </div>
        )
    }
    _sendDrawing = () => {  
        this.props.connection.send(JSON.stringify({drawData: this.state.drawingData[0]}));
      }

    _setDrawingData = (object) => {
        this.setState({
          drawingData: object
        })
      }
    _handleChangeAnswer =(event)=> {
        console.log (event.target.value)
        this.setState({
            userAnswer: event.target.value
        })
    }
    _handleSubmit = () => {
        console.log('submitted! Now have to send to the host')
        this.props.connection.send(JSON.stringify({
            answer: this.state.userAnswer,
            name: this.props.name}))
        this.setState({
            submittedAnswer: true
        })
    }

    _chooseAnswer = (event) => {
        console.log(event.target.value)
        this.props.connection.send(JSON.stringify({
            nextPlayer: this.state.activePlayer+1,
            selectedAnswer: event.target.value
        }))
    }
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: black;
`;
    
const Button = styled.button`
    background-color: #1A2230;
    color: white;
    width: 125px;
    height: 25px;
    border-radius: 4px;
    font-family: 'Avenir';
    font-size: 16px;
    &:hover {
        cursor: pointer;
        background-color: red;
    }
`;

