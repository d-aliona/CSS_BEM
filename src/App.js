import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Header } from './components/header/Header';
import { Portfolio } from './components/portfolio/Portfolio';
import { Chat } from './components/chat/Chat';
import { Footer } from './components/footer/Footer';

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/preise" element={<Header />} /> 
        <Route path="/referenzen" element={<Header />} />
        <Route path="/kontakt" element={<Header />} />
      </Routes>
      <Header />
      <Portfolio />
      <Chat />
      <Footer />
    </>
  );
}

export default App;
