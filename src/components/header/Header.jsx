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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">FitTrack</Link>
      </div>

      <nav className={`header-center ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/home" onClick={closeMenu}>{i18n.t("Home")}</Link></li>
          <li><Link to="/explore" onClick={closeMenu}>{i18n.t("Explore")}</Link></li>
          <li><Link to="/diets" onClick={closeMenu}>{i18n.t("Diets")}</Link></li>
          <li><Link to="/workouts" onClick={closeMenu}>{i18n.t("Workouts")}</Link></li>
          <li><Link to="/imcs" onClick={closeMenu}>{i18n.t("Imc")}</Link></li>
          <li><Link to="/questionnaire" onClick={closeMenu}>Cuestionario</Link></li>
          <li><Link to="/rss"onClick={closeMenu}>RSS</Link></li>

        </ul>
      </nav>

      <div className="header-right">
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className="language-buttons">
          <button onClick={() => changeLanguage('es')}>ES</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
