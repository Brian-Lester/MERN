import React from 'react';
import { useParams } from 'react-router-dom';

const Word = () => {
    const {word} = useParams();
    if (isNaN(word)) {
        return (
            <h1>You typed: {word}</h1>
        )
    }
    else{
    return (
        <div>
            <h1>Please type a word</h1>
        </div>
    );
    };
}

export default Word;
