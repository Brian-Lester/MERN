import React, {useState} from 'react';

const Form = (props) => {
    const {color, setColor, setAllColors,allColors} = props
    const [colorError, setColorError ] = useState("")

    const validateColor = (e) =>{
        setColor(e.target.value);
        console.log(e)
        if (e.target.value.length < 3 ){
            setColorError("Color must be atleast 3 charachters");
        }
        else {
            setColorError("")
        }
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(e.target.value)
        // const newColor = {color}
        setAllColors([...allColors,color])
        setColor("")
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>
                    Add a box
                </h1>
                    {colorError?
                    <p>{colorError}</p>:
                    null}
                <input type= "text" value={color} onChange = {validateColor}> 
                </input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
