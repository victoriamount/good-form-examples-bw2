import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import issueFormSchema from '../validation/issueFormSchema'
import Styled from 'styled-components'

// ------ STYLING ------

const StyledIssuePage = Styled.div`
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

const postAPI = 'https://reqres.in/api/users'

const initialFormValues = {
    title: "",
    description: "",
    image: "",
    category: "",
}

const initialFormErrors = {
    title: "",
    description: "",
    image: "",
    category: "",
}







// ------------ SIGN UP FORM ------------ 
const IssueForm = (props) => {
    const { formValues, setFormValues, formErrors, setFormErrors, disabled, setDisabled, postNewIssue } = props

// ------ EVENT HANDLERS AND A HELPER ------ 
    const onSubmit = evt => {
        evt.preventDefault()
        const categoryObj = {
            categoryid: formValues.category.trim()
        }
        const newIssue = {
            title: formValues.title.trim(),
            description: formValues.description.trim(),            
            image: formValues.image.trim(),
            category: categoryObj,
        }
        postNewIssue(newIssue)

    }
    const onChange = evt => {
        const { name, value } = evt.target
        console.log('changing')
        console.log(name, value)
        yup
            .reach(issueFormSchema, name)
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
        issueFormSchema.isValid(formValues).then(valid => {
            setDisabled(!valid)
        })
    }, [formValues])

    return (
        <StyledForm onSubmit={onSubmit}>
            <h3>Submit an Issue</h3>
            <label>
                Title
                <input 
                name="title"
                type="text"
                value={formValues.title}
                onChange={onChange}
                />
                <div class="errorsText">{formErrors.title}</div>
            </label>
            <label>
                Description
                <input 
                name="description"
                type="text" 
                value={formValues.description}
                onChange={onChange}
                />
                <div class="errorsText">{formErrors.description}</div>                
            </label>
            <label>
                Image
                <input 
                name="image"
                type="text"
                value={formValues.image}
                onChange={onChange}
                />
                <div class="errorsText">{formErrors.image}</div>                
            </label>    
            <label>
                Category
                <select onChange={onChange} value={formValues.category} name="category">
                    <option value="">- Select an option -</option>
                    <option value="4">Announcement</option>
                    <option value="5">Community Activities</option>
                    <option value="6">Crime and Safety</option>
                    <option value="7">Flooding</option>
                    <option value="8">General</option>
                    <option value="9">Holiday</option>
                    <option value="10">Lost and Found</option>
                    <option value="11">Pets</option>
                    <option value="12">Recomendation</option>
                    <option value="13">Road Closure and Transportation</option>
                    <option value="14">School and Education</option>
                    <option value="15">Utilities</option>
                    <option value="16">Yard and Lawn</option>
                </select>
                <div class="errorsText">{formErrors.category}</div>           
            </label>
            <button id="submitButton" disabled={disabled}>SUBMIT</button>      
                          {/* capitalized submit */}
        </StyledForm>
    )
};








// ------------ SIGN UP PAGE ------------
export default function IssuePage() {
// ------ STATES ------
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(true)

// ------ NETWORK HELPERS ------
    const postNewIssue = (newIssue) => {
        axios.post(postAPI, newIssue)
            .then(res => {
                console.log(res.data)
            })
            .catch(handleError)
            .finally(resetForm)
    }

// ------ OTHER HELPERS ------
    const handleError = err => { debugger }
    const resetForm = () => {setFormValues(initialFormValues)}



    return (

            

        <StyledIssuePage>
            <IssueForm formValues={formValues} setFormValues={setFormValues} formErrors={formErrors} setFormErrors={setFormErrors} disabled={disabled} setDisabled={setDisabled} postNewIssue={postNewIssue} />
        </StyledIssuePage>

            

    )
};


