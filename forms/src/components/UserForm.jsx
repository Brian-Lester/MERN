import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirm_pw, setConfirmPW] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { first_name,last_name, email, password,confirm_pw };
        console.log("Welcome", newUser);
    	setFirstName("");
        setLastName("");
    	setEmail("");
    	setPassword("");
        setConfirmPW("");
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name:: </label> 
                <input type="text" value={first_name} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name:: </label> 
                <input type="text" value={last_name} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirm_pw} onChange={ (e) => setConfirmPW(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>First name : {first_name}</p>
        <p>Last name : { last_name}</p>
        <p>Email :{email}</p>
        <p>Password {password}</p>
        <p>Confirm password: {confirm_pw}</p>
        </div>
    );
};
    
export default UserForm;

