import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './nav/nav';
import styled, { createGlobalStyle } from 'styled-components';
import About from './about-components/about';
import Skills from './skills-components/skills';
import Projects from './projects-components/projects';
import Contact from './contact-components/contact';

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
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
