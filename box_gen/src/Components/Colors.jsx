import React  from 'react';

const Colors = (props) => {
    const {allColors} = props


    return (
        <div>
            {
            allColors.map((item,idx) => 
            <div key = {idx}>
                background color = {item}
            </div>
            )
            }
        </div>
    );
}

export default Colors;

