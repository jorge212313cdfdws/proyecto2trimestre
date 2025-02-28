import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Asegúrate de que la ruta del CSS es correcta

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">FitTrack</div>
      
      <nav className={menuOpen ? "nav open" : "nav"}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/imcs">IMC</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/diets">Dietas</Link></li>
        </ul>
      </nav>
      
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </header>
  );
}

export default Header; // Exportación correcta
