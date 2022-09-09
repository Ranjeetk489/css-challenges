

import './App.css';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';

function App() {
  const [name, setName] = useState("Jane Appleseed")
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
  const [month, setMonth] = useState("00")
  const [year, setYear] = useState("00")
  const [cvc, setCvc] = useState("000")

  return (
    <Main>
    <Header></Header>
    <Footer ></Footer>
    </Main>
  )
}

export default App

const Main = styled.div`
  @media only screen and (min-width: 768px) {
      display: flex;
      
    }
`