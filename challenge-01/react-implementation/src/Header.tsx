import React from "react";
import styled from "styled-components";
import MainImage from "./assets/bg-main.png";
import Logo from "./assets/card-logo.svg";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <BgImage>
          <ImageWrapper>
            <CardBackWrapper>
              <CardCvv>000</CardCvv>
              <CardBack
                src="https://i.ibb.co/47Rsp4z/bg-card-back.png"
                alt="card back"
                sizes=""
              />
            </CardBackWrapper>
            <CardFrontWrapper>
              <CardFront
                src="https://i.ibb.co/m8bqCwD/bg-card-front.png"
                alt="card front"
              />
              <CardLogo src={Logo} alt="cardLogo" />
              <CardNumber>0000 0000 0000 0000</CardNumber>

              <CardName>jane appleseed</CardName>

              <CardExpiry>00/00</CardExpiry>
            </CardFrontWrapper>

          </ImageWrapper>
        </BgImage>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  /* background: ; */
  width: 100vh;
  position: relative;
`;
const BgImage = styled.div`
  height: 15rem;
  background: url("https://i.ibb.co/sRGJdSh/bg-main-mobile.png");
  background-repeat: no-repeat;
  @media only screen and (min-width: 768px) {
    background: url("https://i.ibb.co/BzXHK5w/bg-main.png");
    height: 100vh;
    background-repeat: no-repeat;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 50%;
  right:-12rem;
  top:15%;
  @media only screen and (max-width: 665px) {
    width:20rem;
    left:3rem;
  }
`;

const CardBackWrapper = styled.div`
  position: relative;
  top:2rem;
  @media only screen and (max-width: 665px) {
    font-size: 12px;
    top:1.7rem;
    left:-1.7rem;
  }
`;

const CardFrontWrapper = styled.div`
  order: -1;
  left: 1rem;
  position: relative;
  @media only screen and (max-width: 665px) {
    order:1;
    font-size: 12px;
    top:5.5rem;
    left:-1.3rem;
  }
`;

const CardCvv = styled.div`
  position: absolute;
  right: 2rem;
  top:5.65rem;
  font-size: 1rem;
  color: white;
  z-index: 999;
  font-size: 12px;
  @media only screen and (max-width: 665px) {
    font-size: inherit;
    top:2.35rem;
    right:1.2rem;
  }

`;

const CardBack = styled.img`
  width:24rem;
  position: absolute;
  right: -1rem;;
  @media only screen and (max-width: 665px) {
    width:18rem;
    top:-2rem;
  }
  `;

const CardFront = styled.img`
  position: relative; 
  width: 24rem;
  @media only screen and (max-width: 665px) {
    width:18rem;
  }

`;

const CardLogo = styled.img`
  z-index: 999;
  position: absolute;
  left:1.5rem;
  top:1.4rem;
  @media only screen and (max-width: 665px) {
    width:4rem;
    top:1rem;
  }
`;

const CardNumber = styled.div`
  position: absolute;
  bottom: 4.5rem;
  left: 2rem;
  color: white;
  font-size: 1.6rem;
  letter-spacing: 2px;
  @media only screen and (max-width: 665px) {
    font-size: 1.2rem;
    left:1.4rem;
    bottom:3.5rem;
  }
  `;


const CardName = styled.div`
  position: absolute;
  bottom: 2rem;
  font-size:12px;
  left:2rem;
  color: white;
  text-transform: uppercase;
  @media only screen and (max-width: 665px) {
    bottom:1.5rem;
  }
`;

const CardExpiry = styled.div`
  position: absolute;
  bottom: 2rem;
  right:7.5rem;
  font-size: 12px;
  color: white;
  @media only screen and (max-width: 665px) {
    left:14rem;
    bottom:1.5rem;
  }
`;

