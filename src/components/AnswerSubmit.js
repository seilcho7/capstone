import React from 'react';
import styled from 'styled-components';
import { Input } from './JoinPage';
import { Wrapper, Button2 } from './Home';



export default function AnswerSubmit({answerValue, handleChangeAnswer, submitAnswer}) {
    return (
        <Wrapper>
            
               <h3>Enter your answer below!</h3>
                <Input value={answerValue} className={styled.pinInput} onChange={handleChangeAnswer} maxLength="35"/>
                <Button2 onClick={submitAnswer}>PIC ME!</Button2>
        </Wrapper>
    )
};
