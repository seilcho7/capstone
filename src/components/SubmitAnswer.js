import React from 'react';
import { InputGroup, FormControl, Button} from 'react-bootstrap';

export default function SubmitAnswer({submitAnswer}) {
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Answer"
                    aria-label="Answer"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={() => {submitAnswer("test")}}>Submit Answer</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
};
