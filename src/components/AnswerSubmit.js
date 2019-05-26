import React from 'react';
import styled from 'styled-components';


export default function AnswerSubmit({answerValue, handleChangeAnswer, submitAnswer}) {
    return (
        <div>
               <h3>Enter your answers below!</h3>
                <input value={answerValue} className={styled.pinInput} onChange={handleChangeAnswer}/>
                <button onClick={submitAnswer}>PIC ME!</button>
        </div>
    )
};
