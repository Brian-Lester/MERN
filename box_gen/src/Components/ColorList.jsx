import React from 'react';

const ColorList = (props) => {
    const {allColors} = props
    return (
        <div>
            {
                allColors.map((color, idx) =>(
                    <div key ={idx} style={{backgroundColor : {color}, width:'100px', height: '100px'} }>
                        <h2>{color}</h2>
                    </div>
                ))
            }
        </div>
    );
}

export default ColorList;

