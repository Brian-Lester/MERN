import React from 'react';
import Thing1 from './Thing1';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const {searchItem, setSearchItem, responseData , setResponseData} = props
    const navigate = useNavigate();
    const changeHandler = (e) => {
        setSearchItem({...searchItem, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${searchItem.Obj}/${searchItem.id}`)

    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <select onChange={changeHandler} name = 'Obj'>
                    <option>
                        people
                    </option>
                    <option>
                        planets
                    </option>
                    <option>
                        vehicles
                    </option>
                </select>
                <input  onChange={changeHandler} type='number' name = 'id'/>
            <button>submit</button>
            </form>
            <Thing1 searchItem ={searchItem} responseData = {responseData} setResponseData = {setResponseData}/>
        </div>
    );
}

export default Form;
