import React from 'react'; 
import { useParams } from 'react-router-dom';

const Colors = () => {
    const{text,textColor,backGroundColor} = useParams();
    const style = {
        color : textColor,
        backgroundColor:backGroundColor
    }
    return (
        <div style={style}>
            <h1>{text}</h1>
        </div>
    );
}

export default Colors;
