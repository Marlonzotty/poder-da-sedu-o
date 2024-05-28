import React from 'react';
import Header from './components/Header';
import HeaderContent from './components/HeaderContent';
import MainContent from './components/MainContent';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Instructor from './components/Instructor';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderContent />
      <MainContent />
      <Benefits />
      <CTA />
      <Instructor />
      <Footer />
    </div>
  );
}

export default App;
