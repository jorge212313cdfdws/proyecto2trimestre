import React from "react";
import "./RoutineCard.css";

const RoutineCard = ({ title, image, description }) => {
  return (
    <div className="routine-card">
      <img src={image} alt={title} className="routine-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default RoutineCard;
