import React from 'react';

export default function Answer({answerChoices}) {
    return (
        <div>
                <ul>
                    {answerChoices ? answerChoices.map((answer, i) => (<li key={i}>{answer}</li>)) : null}
                </ul>
        </div>
    )
};
