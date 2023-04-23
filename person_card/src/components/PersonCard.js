import React, {useState} from 'react';

const PersonCard = (props) =>{
    const [age, setAge] = useState(props.age);
    return(
        <div>
            <h1>{props.lName}, {props.fName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick ={ () => setAge(age+1) }>Birthday Button</button>
        </div>
    )
}

export default PersonCard;