import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './nav/nav';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100vw;
  }
`

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Nav />
        
      </BrowserRouter>
      
    </>
  )
}

export default App
