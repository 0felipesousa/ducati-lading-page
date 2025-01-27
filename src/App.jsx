import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Specifications from './components/Specifications/Specifications';
import Gallery from './components/Gallery/Gallery';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <Specifications />
        <Gallery />
      </main>
    </div>
  );
}

export default App;