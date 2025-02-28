import React, { useState } from "react";
import "./Imcs.css";
import Header from "../../components/header/Header";



function Imcs() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage("Bajo peso");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Peso normal");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("Sobrepeso");
      } else {
        setMessage("Obesidad");
      }
    } else {
      setMessage("Por favor ingrese todos los valores.");
    }
  };

  return (
    <>
    <Header /> 
    <div className="imc-container">
        
        
      <h1>Calculadora de IMC</h1>
      <div className="input-group">
        <label>Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="0"
        />
      </div>
      <div className="input-group">
        <label>Altura (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          min="0"
        />
      </div>
      <div className="input-group">
        <label>Edad:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="0"
        />
      </div>
      <div className="input-group">
        <label>Género:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
        </select>
      </div>
      <button onClick={calculateBMI}>Calcular IMC</button>
      {bmi && (
        <div className="result">
          <h2>Tu IMC es: {bmi}</h2>
          <p>Estado: {message}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default Imcs;
