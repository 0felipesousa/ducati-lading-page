import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <div className="titulo">
            <h1>DUCATI</h1>
          </div>

          <button 
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#specs" onClick={() => setMenuOpen(false)}>Especificações</a></li>
            <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Galeria</a></li>
          </ul>

          <div className="action-buttons">
            <button className="btn btn-test">Test Drive</button>
            <button className="btn btn-buy">Comprar</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;