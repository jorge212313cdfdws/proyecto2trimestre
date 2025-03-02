import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      {/* Bloque Izquierdo (Logo) */}
      <div className="header-left">
        <Link to="/" className="logo">FitTrack</Link>
      </div>

      {/* Bloque Central (Links de Navegación) */}
      <nav className={`header-center ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/home">{i18n.t("home")}</Link></li>
          <li><Link to="/explore">{i18n.t("explore")}</Link></li>
          <li><Link to="/diets">{i18n.t("diets")}</Link></li>
          <li><Link to="/workouts">{i18n.t("workouts")}</Link></li>
          <li><Link to="/imcs">{i18n.t("imc")}</Link></li>
        </ul>
      </nav>

      {/* Bloque Derecho (Menú Hamburguesa y Selector de Idioma) */}
      <div className="header-right">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <div className="language-buttons">
          <button onClick={() => changeLanguage('es')}>ES</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
