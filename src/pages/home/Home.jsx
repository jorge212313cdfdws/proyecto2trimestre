import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import Gym1 from "../../assets/images/gym1.jpg" 
import Gym3 from "../../assets/images/gym3.jpg"


function Home() {
  return (
    <div className="home-container">

      {/* Sección 1: Título y subtítulo */}
      <div className="home-welcome">
      <h1 className="home-title">
          <Link to="/explore" className="home-title-link">Bienvenido a FitTrack</Link>
        </h1>

        <p className="home-subtitle">
          Tu guía para mejorar tu salud, alimentación y entrenamientos.
        </p>
      </div>

      {/* Sección 2: Botones flotantes */}
      <div className="home-buttons">
        <div className="home-card">
          <h3>Mejora tu salud</h3>
          <p>El ejercicio ayuda a fortalecer tu corazón y mejorar la circulación.</p>
        </div>
        <div className="home-card">
          <h3>Aumenta tu energía</h3>
          <p>Mantente activo y reduce el cansancio diario.</p>
        </div>
        <div className="home-card">
          <h3>Control de peso</h3>
          <p>El entrenamiento regular ayuda a mantener un peso saludable.</p>
        </div>
      </div>

      {/* Sección 3: Imágenes con texto motivador */}
      <div className="home-motivation">
        <div className="motivation-block">
          <img src={Gym1} alt="Ejercicio" />
        </div>
        <div className="motivation-text">
          <h2>Empieza tu camino hacia una vida más saludable</h2>
          <p>El esfuerzo de hoy es el éxito de mañana.</p>
        </div>
        <div className="motivation-block">
          <img src={Gym3} alt="Motivación" />
        </div>
      </div>

      {/* Sección 4: Historia */}
      <div className="home-history">
        <h2>Nuestra Historia</h2>
        <p>
          FitTrack nació con la misión de ayudar a las personas a mejorar su
          bienestar físico y mental a través del ejercicio y la alimentación.
        </p>
      </div>
    </div>
  );
}

export default Home;

