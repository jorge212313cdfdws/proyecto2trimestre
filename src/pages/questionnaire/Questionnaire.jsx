import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import "./Questionnaire.css";

function Questionnaire() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        username,
        age: Number(age),
        weight: Number(weight),
      });
      setUsername("");
      setAge("");
      setWeight("");
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setUsername(user.username);
    setAge(user.age);
    setWeight(user.weight);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingId) return;

    await updateDoc(doc(db, "users", editingId), {
      username,
      age: Number(age),
      weight: Number(weight),
    });

    setEditingId(null);
    setUsername("");
    setAge("");
    setWeight("");
  };

  return (
    <div className="questionnaire">
      <h1>Cuestionario de Identificación</h1>
      <form onSubmit={editingId ? handleUpdate : handleSubmit}>
        <label htmlFor="username">Nombre:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="age">Edad:</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="0"
          required
        />

        <label htmlFor="weight">Peso (kg):</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          min="0"
          required
        />

        <button type="submit" className="submit-btn">
          {editingId ? "Actualizar" : "Enviar"}
        </button>
      </form>

      <h2>Usuarios Registrados</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <span>
              <strong>{user.username}</strong> - {user.age} años - {user.weight} kg
            </span>
            <div className="button-group">
              <button className="edit-btn" onClick={() => handleEdit(user)}>✏️</button>
              <button className="delete-btn" onClick={() => handleDelete(user.id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Questionnaire;
