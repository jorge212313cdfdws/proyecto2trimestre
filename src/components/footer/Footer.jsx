import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 FitTrack. Todos los derechos reservados</p>
      <p>
        <a href="#">Política de Privacidad</a> | <a href="#">Cookies</a> | <a href="#">Condiciones de Venta</a>
      </p>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaGithub />
      </div>
    </footer>
  );
}

export default Footer;
