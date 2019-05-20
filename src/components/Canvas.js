
import React from 'react';
import CanvasDraw from 'react-canvas-draw';

export default function Canvas({handleSend, drawing, saveableCanvas, setDrawingData}) {
    return (
        <div>
        {/*           Save button  */}
            <button onClick={() => {
                  // localStorage.setItem( "savedDrawing",this.saveableCanvas.getSaveData());
                  // Retrieves from local storage and  pushes into empty array 
                  // const save = localStorage.getItem("savedDrawing")

                  // stores canvas data in variable and pushes to array 

                const saveData = saveableCanvas.getSaveData(); 
                const object = [];
                object.push(saveData);
                setDrawingData(object);
                // this.setState({
                //     drawingData: object
                // })
                // console.log(drawingData)
            }}>
            Save
            </button>

            {/*               Load button will retrieve the last drawing from state  */}
            <button
                onClick={() => {
                    console.log('loading data')
                    console.log(drawing)
                    saveableCanvas.loadSaveData(
                        drawing
                    )
            }}
            >Load</button>
        <button
            onClick={handleSend}
            >
            SendDrawing
            </button>
        <CanvasDraw
            ref={canvasDraw => (saveableCanvas = canvasDraw)} />
        </div>
    )
}