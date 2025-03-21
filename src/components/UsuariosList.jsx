import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";
import "./UsuariosList.css";

const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const usuariosRef = ref(database, "usuarios");
    onValue(usuariosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUsuarios(Object.values(data));
      }
    });
  }, []);

  return (
    <div className="usuarios-container">
      <h2>Lista de Usuarios</h2>
      <ul className="usuarios-list">
        {usuarios.map((usuario, index) => (
          <li key={index} className="usuario-item">
            <strong>Nombre:</strong> {usuario.nombre} <br />
            <strong>IMC:</strong> {usuario.imc} <br />
            <strong>Dieta:</strong> {usuario.dieta}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsuariosList;
