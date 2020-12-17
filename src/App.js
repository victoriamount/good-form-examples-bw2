import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpPage from './components/SignUpPage'
import Issues from './components/Issues'
import Styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'


const StyledFooter = Styled.footer`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

function App() {
  return (
    <div>
      <Header />
        {/* <Issues /> */}
        <SignUpPage />
      <Footer />
    </div>
  );
}

export default App;
