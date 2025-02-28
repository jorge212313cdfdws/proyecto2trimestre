import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";

// Importa las imágenes
import TrainingImg from "../../assets/images/training.jpg";
import NutritionImg from "../../assets/images/nutrition.jpg";
import ProgressImg from "../../assets/images/progress.jpg";

function Explore() {
  return (
    <div className="explore-container">
      <h1 className="explore-title">Explora FitTrack</h1>
      <div className="explore-sections">
      <Link to="/workouts" className="explore-item">
          <div className="explore-overlay">
            <h2>Entrenamientos</h2>
          </div>
          <img src={TrainingImg} alt="Entrenamiento" />
        </Link>
        <Link to="/diets" className="explore-item">
          <div className="explore-overlay">
            <h2>Nutrición</h2>
          </div>
          <img src={NutritionImg} alt="Nutrición" />
        </Link>
        <Link to="/imcs" className="explore-item">
          <div className="explore-overlay">
            <h2>IMC</h2>
          </div>
          <img src={ProgressImg} alt="Progreso" />
        </Link>
      </div>
    </div>
  );
}

export default Explore;
