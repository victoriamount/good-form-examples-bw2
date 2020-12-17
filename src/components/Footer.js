import React from 'react';
import Styled from 'styled-components'

const StyledFooter = Styled.footer`
    background-color: #D1DEDE;
    text-align: center;
    padding: 1% 30%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    p{
        color: #1D201F;
    }
`

const StyledFooterNav = Styled.div`
    display: flex;
    justify-content: space-around;

`
const StyledFooterLink = Styled.a`
    text-decoration: none;
    color: #40798C;
    &:hover{
        font-weight: bolder;
        transition: all 0.1s ease-in-out;
    }
`

export default function Footer() {

    return (
        <StyledFooter>
            <StyledFooterNav>
                <StyledFooterLink href='#'>Home</StyledFooterLink>
                <StyledFooterLink href='#'>Dashboard</StyledFooterLink>
                <StyledFooterLink href='#'>Log In</StyledFooterLink>
                <StyledFooterLink href='#'>Sign Up</StyledFooterLink>
            </StyledFooterNav>
            <p>&copy; 2020</p>
        </StyledFooter>
    )
}