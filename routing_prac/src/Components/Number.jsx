import React from 'react';
import { useParams } from 'react-router-dom';

const Number = () => {
    const {num} = useParams();
    if (isNaN(num)) {
        return (
            <h1>Please type a number</h1>
        )
    }
    else{
    return (
        <div>
            <h1>You Typed the Number : {num}</h1>
        </div>
    );
    };
}

export default Number;
