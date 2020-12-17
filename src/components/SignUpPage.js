import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from '../validation/formSchema';
import Styled from 'styled-components';


const StyledSignupPage = Styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  /* background-color: #f8f8f8; IN THE BODY OF CSS*/
`

const StyledForm = Styled.form`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    /* border: 1px solid red; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 5% 5%;
    max-height: 450px;
    width: 450px;
    background-color: white;
    h3{
        text-align: center;
        font-family: 'Nixie One', cursive;
        color: #40798c;
        font-size: 2rem;
    }
    label{
        display: flex;
        justify-content: space-between;
        padding: 3%;
    }
    .errorsText{
        display: none;
    }
    button{
        width: 40%;
        margin: 4% 30% 0;
        padding: 1% 0;
        border: 2px solid #f08700;
        color: #40798c;
        /* background-color: #f8f8f8; */
        border-radius: 5px;
        font-size: 1.2rem;
        font-family: 'Nixie One', cursive;
        &:hover{
            background-color: #40798c;
            color: white;
            border: 2px solid white;
        }
        transition: 0.1s ease-in-out;
    }
`


// ------ CONSTANTS ------

const postAPI = 'https://reqres.in/api/users';

const initialFormValues = {
    username: "",
    phone: "",
    password: "",
    primaryemail: ""
}

const initialFormErrors = {
    username: "",
    phone: "",
    password: "",
    primaryemail: ""
}







// ------------ SIGN UP FORM ------------ 
const SignUpForm = (props) => {
    const { formValues, setFormValues, formErrors, setFormErrors, disabled, setDisabled, postNewUser } = props;

// ------ EVENT HANDLERS AND A HELPER ------ 
    const onSubmit = evt => {
        evt.preventDefault()
        const newUser = {
            username: formValues.username.trim(),
            primaryemail: formValues.primaryemail.trim(),            
            phone: formValues.phone.trim(),
            password: formValues.password.trim(),
        }
        postNewUser(newUser)

    }
    const onChange = evt => {
        const { name, value } = evt.target
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({ ...formErrors, [name]: "" })
            })
            .catch(err => {
                
                setFormErrors({ ...formErrors, [name]: err.errors[0] })
            })
        setFormValues({ ...formValues, [name]: value })
    }

// ------ SIDE EFFECTS ------
    useEffect(() => {
        schema.isValid(formValues).then(valid => {
            setDisabled(!valid)
        })
    }, [formValues])

    return (
        <StyledForm onSubmit={onSubmit}>
            <h3>Create An Account</h3>
            <label>
                Username
                <input 
                name="username"
                type="text"
                value={formValues.username}
                onChange={onChange}
                />
                <div class='errorsText'>{formErrors.username}</div>
            </label>
            <label>
                Email
                <input 
                name="primaryemail"
                type="email"
                value={formValues.primaryemail}
                onChange={onChange}
                />
                <div class='errorsText'>{formErrors.primaryemail}</div>                
            </label>
            <label>
                Password
                <input 
                name="password"
                type="text"
                value={formValues.password}
                onChange={onChange}
                />
                <div class='errorsText'>{formErrors.password}</div>
            </label>    
            <label>
                Phone
                <input 
                name="phone"
                type="text"
                value={formValues.phone}
                onChange={onChange}
                />
                <div class='errorsText'>{formErrors.phone}</div>                
            </label>
            <button id="submitButton" disabled={disabled}>SIGN UP</button>                    
        </StyledForm>
    )
};








// ------------ SIGN UP PAGE ------------
export default function SignUpPage() {
// ------ STATES ------
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(true)

// ------ NETWORK HELPERS ------
    const postNewUser = (newUser) => {
        axios.post(postAPI, newUser)
            .then(res => {
                console.log(res.data)
            })
            .catch(handleError)
            .finally(resetForm)
    }

// ------ OTHER HELPERS ------
    const handleError = err => { debugger };
    const resetForm = () => {setFormValues(initialFormValues)};



    return (
        <StyledSignupPage>
            <SignUpForm formValues={formValues} setFormValues={setFormValues} formErrors={formErrors} setFormErrors={setFormErrors} disabled={disabled} setDisabled={setDisabled} postNewUser={postNewUser} />
        </StyledSignupPage>
    )
};


