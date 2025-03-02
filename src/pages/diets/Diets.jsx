import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./Diets.css";
import Footer from "../../components/footer/Footer"; 

function Diets() {
  const [goal, setGoal] = useState("gain");

  const diets = {
    lose: {
      title: "Dieta para Bajar de Peso",
      description: "Reducir calorías y aumentar proteínas para la pérdida de grasa.",
      ingredients: ["Pollo", "Verduras", "Aguacate", "Frutos secos", "Pescado"],
    },
    gain: {
      title: "Dieta para Ganar Músculo",
      description: "Optimiza proteínas y carbohidratos para favorecer la ganancia muscular.",
      ingredients: ["Huevos", "Pechuga de pollo", "Pescado", "Batatas", "Quinoa"],
    },
    maintain: {
      title: "Dieta para Mantener el Peso",
      description: "Equilibra macronutrientes para mantener tu composición corporal.",
      ingredients: ["Arroz integral", "Guisantes", "Carne roja", "Verduras", "Frutas"],
    },
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="diets-container">
          <h1 className="title">Elige tu Objetivo</h1>
          <div className="buttons">
            <button onClick={() => setGoal("lose")}>Bajar de Peso</button>
            <button onClick={() => setGoal("gain")}>Subir de Peso</button>
            <button onClick={() => setGoal("maintain")}>Ganar Músculo</button>
          </div>

          <div className="diet-info">
            <h2>{diets[goal].title}</h2>
            <p>{diets[goal].description}</p>
            <h3>Ingredientes Clave:</h3>
            <ul>
              {diets[goal].ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Diets;
