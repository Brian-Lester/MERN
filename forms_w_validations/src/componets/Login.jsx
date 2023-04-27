import React, {useState} from 'react';

const Login = (props) => {
    const [first_name, setFirstName] = useState("");
    const [f_name_error, setFirstNameError] = useState("")
    const[last_name, setLastName] = useState("");
    const [l_name_error, setLastNameError] = useState("")
    const [email, setEmail] = useState("");
    const [email_error, setEmailError] = useState("")
    const [password, setPassword] = useState("");
    const [password_error, setPasswordError] = useState("")
    const [confirm_pw, setConfirmPW] = useState("");
    const [conf_pw_error, setConfPwError] = useState("")
    const [submitted ,setSubmitted] = useState(false)

    const validateFName = (e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstName("First name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setFirstNameError("");
        }
    }
    const validateLname = (e) =>{
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameError("");
        }
    }
    const validateEmail = (e) =>{
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError(" email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Please provide a valid email!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }
    
    const validatePassword = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 1){
            setPasswordError("password bust be 8 charachters");
        }else if(e.target.value.length < 8){
            setPasswordError("password bust be 8 charachters");
        }  else{
            setPasswordError("");
        }
    }
    const validateConf = (e) =>{
        setConfirmPW(e.target.value)
        if(e.target.value !== password){
            console.log(confirm_pw !== password)
            setConfPwError("passwords dont match");
        }
        else{
            setConfPwError("")
        }
    }

    const user = (e) =>{
        e.preventDefault();
        const newUser = { first_name,last_name, email, password,confirm_pw };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPW("");
        setSubmitted(true)
    }
    return (
        <div>
            <form onSubmit={ user }>
                <div>
                {
                    f_name_error ?
                    <p>{ f_name_error }</p> :
                    ''
                }
                    <label>First Name:: </label> 
                    <input type="text" value={first_name} onChange={ validateFName } />
                </div>
                <div>
                {
                    l_name_error ?
                    <p>{ l_name_error }</p> :
                    ''
                }
                    <label>Last Name:: </label> 
                    <input type="text" value={last_name} onChange={ validateLname } />
                </div>
                <div>
                {
                    email_error ?
                    <p>{ email_error }</p> :
                    ''
                }
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ validateEmail } />
                </div>
                <div>
                {
                    password_error ?
                    <p>{ password_error }</p> :
                    ''
                }
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ validatePassword } />
                </div>
                <div>
                {
                    conf_pw_error ?
                    <p>{ conf_pw_error }</p> :
                    ''
                }
                    <label>Confirm Password: </label>
                    <input type="text" value={confirm_pw} onChange={validateConf } />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
    }




export default Login;

