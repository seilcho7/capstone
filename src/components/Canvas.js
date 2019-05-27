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
            activePlayer:  0
        }
    }
    
    componentDidMount(){
    if(this.props.connection) {
         console.log(this.props.connection)
        this.props.connection.onmessage = (e) => {
            const data = JSON.parse(e.data);
            const {drawData, userAnswers} = JSON.parse(e.data);
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
                default:
                    break;
                }
            })
        }
    } else {
        console.log('no props! Start again from the beginning :)')
    }
}

    // componentDidMount(){
    //     setInterval(() => {
    //         if(this.props.hostStatus){
    //             console.log("YOU ARE IN IF HOSTSTATUS")
    //             // console.log(saveableCanvas);
    //             // console.log(drawingData)
    //             if(this.props.drawingData){
    //                 console.log("YOU ARE INSIDE THE OF fucking set interval. check to see if data is still there")
    //                 this.saveableCanvas.loadSaveData( //get derived states from props CONVERT TO CLASS
    //                     this.props.drawingData
    //                 )
    //             }
    //         }
    //     }, 5000);
    // }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("did you call me?")
    //     state.saveableCanvas.loadSaveData( 
    //         props.drawingData
    //     )
    //     console.log(props.drawingData)
    // }
    
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
                    // this.setState({
                    //     drawingData: object
                    // })
                    // console.log(drawingData)
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
                        {this.props.users ? this.props.users.map((user, i) => (<li key={i}> {user}</li>)) : null}
                    </ul> 
                    <h4> Answers </h4>
                        {this.state.userAnswers ? this.state.userAnswers.map((answer, i )=>(<li key={i}>{answer}</li>)): null}
                </div> :
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
                            // this.setState({
                            //     saveableCanvas: canvasDraw
                            // })
                        }} />   
                </div> }
                {!this.state.submittedAnswer ? <AnswerSubmit answerValue={this.state.userAnswer} handleChangeAnswer={this._handleChangeAnswer} submitAnswer={this._handleSubmit}/>
                : <div> Submitted answer! Good luck</div> }
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
        this.props.connection.send(JSON.stringify({answer: this.state.userAnswer}))
        this.setState({
            submittedAnswer: true
        })
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

