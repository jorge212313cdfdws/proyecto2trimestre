import React from "react";
import "./Workouts.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

// Importa las imágenes desde la carpeta assets/images
import BenchPressImg from "../../assets/images/bench-press.jpg";
import DumbbellFlyImg from "../../assets/images/dumbbell-fly.jpg";
import PullUpImg from "../../assets/images/pull-up.jpg";
import BarbellRowImg from "../../assets/images/barbell-row.jpg";
import SquatImg from "../../assets/images/squat.jpg";
import LegPressImg from "../../assets/images/leg-press.jpg";

// Importa imágenes de músculos
import ChestMuscleImg from "../../assets/images/muscles-chest.png";
import BackMuscleImg from "../../assets/images/muscles-back.png";
import LegsMuscleImg from "../../assets/images/muscles-legs.png";


function Workouts() {
  return (
    <>
    <Header />
    <div className="workouts-container">
      <section className="workouts-hero">
        <h1>Rutinas de Ejercicio</h1>
      </section>

      {/* Sección Pecho */}
      <section className="workout-section">
        <h2>Pecho</h2>
        <div className="workout-group">
          <div className="workout-card">
            <img src={BenchPressImg} alt="Press de Banca" className="exercise-img" />
            <img src={ChestMuscleImg} alt="Músculos trabajados" className="muscle-img" />
            <h3>Press de Banca</h3>
            <p>Ejercicio compuesto para desarrollar la fuerza y masa del pecho.</p>
          </div>
          <div className="workout-card">
            <img src={DumbbellFlyImg} alt="Aperturas con Mancuernas" className="exercise-img" />
            <img src={ChestMuscleImg} alt="Músculos trabajados" className="muscle-img" />
            <h3>Aperturas con Mancuernas</h3>
            <p>Ejercicio de aislamiento para trabajar la parte media del pecho.</p>
          </div>
        </div>
      </section>

      {/* Sección Espalda */}
      <section className="workout-section">
        <h2>Espalda</h2>
        <div className="workout-group">
          <div className="workout-card">
            <img src={PullUpImg} alt="Dominadas" className="exercise-img" />
            <img src={BackMuscleImg} alt="Músculos trabajados" className="muscle-img" />
            <h3>Dominadas</h3>
            <p>Ejercicio clave para fortalecer la espalda y los bíceps.</p>
          </div>
          <div className="workout-card">
            <img src={BarbellRowImg} alt="Remo con Barra" className="exercise-img" />
            <img src={BackMuscleImg} alt="Músculos trabajados" className="muscle-img" />
            <h3>Remo con Barra</h3>
            <p>Ideal para desarrollar grosor y fuerza en la espalda.</p>
          </div>
        </div>
      </section>

      {/* Sección Piernas */}
      <section className="workout-section">
        <h2>Piernas</h2>
        <div className="workout-group">
          <div className="workout-card">
            <img src={SquatImg} alt="Sentadilla con Barra" className="exercise-img" />
            <img src={LegsMuscleImg} alt="Músculos trabajados" className="muscle-img" />
            <h3>Sentadilla con Barra</h3>
            <p>Ejercicio base para ganar fuerza y masa muscular en las piernas.</p>
          </div>
          <div className="workout-card">
            <img src={LegPressImg} alt="Prensa de Piernas" className="exercise-img" />
            <img src={LegsMuscleImg} alt="Músculos trabajados" className="muscle-img" />
            <h3>Prensa de Piernas</h3>
            <p>Aísla el trabajo en los cuádriceps y glúteos.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default Workouts;

