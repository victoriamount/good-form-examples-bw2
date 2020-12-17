import React from 'react'
import Styled from 'styled-components'

const StyledHeader = Styled.header`
    padding: 0 2%;
    display: flex;
    flex-flow: row nowrap;
    background-color: #D1DEDE;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    nav{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
    h1{
        font-family: 'Nixie One', cursive;
        color: #40798C;
        font-size: 2.5rem;
    }
`
const StyledNavLink = Styled.a`
    color: #40798C;
    margin-left: 30px;
    text-decoration: none;
    font-weight: bold;
    &:hover{
        color: #f08700;
        transition: all 0.1s ease-in-out;
    }
`

const StyledNavSignUp = Styled.a`
    color: #40798C;
    margin-left: 30px;
    text-decoration: none;
    font-weight: bold;
    &:hover{
        color: #f08700;
        transition: all 0.1s ease-in-out;
    }    
    border-bottom: 2px solid #40798C;
`

export default function Navigation() {

    return (
        <StyledHeader>
            <h1>Co-Make</h1>
            <nav>
                <StyledNavLink href='#'>Home</StyledNavLink>
                <StyledNavLink href='#'>Dashboard</StyledNavLink>
                <StyledNavLink href='#'>Log In</StyledNavLink>
                <StyledNavSignUp href='#'>Sign Up</StyledNavSignUp>
            </nav>
        </StyledHeader>
    )
}