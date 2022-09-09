import React from 'react'
import  styled from 'styled-components';
import MainImage from './assets/bg-main.png';
import Logo from "./assets/card-logo.svg";


const Header = () => {
  return (
    <>
        <HeaderContainer>
            <BgImage/>
            <ImageWrapper>
              <CardCvv>000</CardCvv>
            <CardBack src="https://i.ibb.co/47Rsp4z/bg-card-back.png" alt="card back" sizes=''/>
            <CardFront src="https://i.ibb.co/m8bqCwD/bg-card-front.png" alt="card front"/>
            <CardLogo src={Logo} alt="cardLogo"/>
            <CardNumber>0000 0000 0000 0000</CardNumber>
            <CardName>jane appleseed</CardName>
            <CardExpiry>00/00</CardExpiry>
            </ImageWrapper>
        </HeaderContainer>
    </>
  )
}

export default Header

const HeaderContainer = styled.div`
    /* background: ; */
    
`
const BgImage = styled.div`
    @media only screen and (min-width:375px){
      height: 15rem;
    }
    background: url("https://i.ibb.co/XD4Jdw6/bg-main.png");
    
`

const ImageWrapper = styled.div`
  position: relative;
  top:-12.5rem;
  left: 4.5rem;

  
`;

const CardCvv = styled.div`
  position: absolute;
  top:4.4rem;
  left:14.3rem;
  font-size: 12px;
  color: white;
  z-index: 99;
/* color:white; */
`
const CardFront = styled.img`
  position: absolute;
  width: 18rem;
  top:5.5rem;
  left:-3rem;
  
  
`
const CardLogo = styled.img`
  position: absolute;
  top:6.5rem;
  left:-2rem;
`;
const CardNumber = styled.div`
  position: absolute;
  top:11.2rem;
  left:-1.5rem;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 700;
  color:white;
  z-index:99;
`;
const CardName =  styled.div`
  position: absolute;
  top:13.2rem;
  text-transform: uppercase;
  font-size: 10px;
  color: white;
  left:-1.5rem;

`;
const CardExpiry = styled(CardName)`
  left: 11.5rem;
`;

const CardBack = styled.img`
  position: absolute;
  width: 18rem;
`
