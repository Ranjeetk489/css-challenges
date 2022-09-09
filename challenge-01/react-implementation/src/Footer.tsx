import React, { useState } from 'react';
import CompleteLogo from "./assets/complete.svg";
import styled from 'styled-components';

const Footer = () => {
    const [isConfirmed, setConfirmed] = useState(false);

    if(false){
        return (<SuccessFooter/>)
    }
    return (
        
        <FooterContainer>
            <FormContainer>
                <Label htmlFor="name" >cardholder name</Label>
                <Input type='text' id='name' placeholder='e.g. Jane Applessed' />
                <Label htmlFor="cnumber">cardholder name</Label>
                <Input type='number' id='cnumber' placeholder='e.g. 1234 5678 9123 0000' />
                <DateLabelContainer>
                    <Label htmlFor='exp'>exp. date (MM/YY)</Label>
                    <Label htmlFor="cvv">cvv</Label>
                </DateLabelContainer>
                <DateInputContainer>
                <DateInput type='number' id='exp' placeholder='MM' />
                <DateInput type='number' id='exp' placeholder='YY'/>
                <CvvInput type='number' id='cvc' placeholder='e.g. 123'/>
                </DateInputContainer>
                <Button>Confirm</Button>
            </FormContainer>
        </FooterContainer>

    )
}

export default Footer

const SuccessFooter = ()=> {
    return  (
        <SuccessBox>
        <LogoContainer src= {CompleteLogo} alt = "success"/>
        <Message>Thank You!</Message>
        <SuccessMessage>We've added your card details</SuccessMessage>
        <Button>Continue</Button>
        </SuccessBox>
    )
}



const FooterContainer = styled.div`
    width: 100%;
    margin-top: 4rem;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
`;

const DateLabelContainer = styled.div`
    display: flex;
    gap:8%;
`;

const DateInputContainer = styled.div`
    display: flex;
    gap:2%;
`;

const Label = styled.label`
    margin-bottom: 8px;
    margin-top:1.5rem;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing:1px;
    font-weight: 600;
`;

const Input = styled.input`
    height:2.5rem;
    font-size: 1rem;
    padding-left: 12px;
    border: 1px solid hsl(270, 3%, 87%);
    border-radius: 5px;
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }    
 `;


const DateInput = styled(Input)`
    width: 4.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
`
const CvvInput = styled(DateInput)`
    width:100%;
`
const Button = styled.div`
    text-align: center;
    margin-top:1.5rem;
    background: hsl(278, 68%, 11%);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    width:100%;
`;

const SuccessBox = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    gap:1.5rem;
    width:80%;
    margin: 6rem auto;

`

const LogoContainer = styled.img`
    width:fit-content;
`;

const Message = styled.div`
    font-size:1.4rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 700;

`;
const SuccessMessage = styled.div`
    font-size: 18px;
`;