import React, { useState } from  'react';
    
const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    
    const [fnameValid, setFnameValid] = useState(true);
    const [lnameValid, setLnameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmValid, setConfirmValid] = useState(true);

    const fnameErr = 'First must be at least 2 characters';
    const lnameErr = 'Last must be at least 2 characters';
    const emailErr = 'Email must be at least 2 characters';
    const passwordErr = 'Password must be atleast 8 characters';
    const confirmErr = 'Passwords must match';

    const handleFname = (e) => {
        const newFname = e.target.value;
        setFirstName(newFname);

        if(newFname.length < 2 && newFname.length !== 0){
            setFnameValid(false);
        } else {
            setFnameValid(true);
        }
    }

    const handleLname = (e) => {
        const newLname = e.target.value;
        setLastName(newLname);
        
        if(newLname.length < 2 && newLname.length !== 0){
            setLnameValid(false);
        } else {
            setLnameValid(true);
        }
    }

    const handleEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if(newEmail.length < 2 && newEmail.length !== 0){
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }
    }

    const handlePass = (e) => {
        const newPass = e.target.value;
        setPassword(newPass);

        if(newPass.length < 8 && newPass.length !== 0){
            setPasswordValid(false);
        } else {
            setPasswordValid(true);
        }
    }

    const handleConfirm = (e) => {
        const newConfirm = e.target.value;
        setConfirm(newConfirm);

        if(newConfirm != password && newConfirm.length !== 0){
            setConfirmValid(false);
        } else {
            setConfirmValid(true);
        }
    }

    return(
        <div>
            <form> 
                <div> 
                    <label>First Name: </label>
                    <input type = 'text' onChange={handleFname}></input>
                    {!fnameValid && <p>{fnameErr}</p>}
                </div>   
                <div> 
                    <label>Last Name: </label>
                    <input type = 'text' onChange={handleLname}></input>
                    {!lnameValid && <p>{lnameErr}</p>}
                </div>   
                <div> 
                    <label>Email: </label>
                    <input type = 'text' onChange={handleEmail}></input>
                    {!emailValid && <p>{emailErr}</p>}
                </div>   
                <div> 
                    <label>Password: </label>
                    <input type = 'password' onChange={handlePass}></input>
                    {!passwordValid && <p>{passwordErr}</p>}
                </div>
                <div> 
                    <label>Confirm Password: </label>
                    <input type = 'password' onChange={handleConfirm}></input>
                    {!confirmValid && <p>{confirmErr}</p>}
                </div>   
            </form>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
            
        </div>
    );
};
    
export default UserForm;