import { useState } from "react";
import "../css/Me.css";

function Me({
  nombre,
  apellido,
  edad,
  carrera,
  ciudad,
  intereses,
  infoExtra,
}) {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section className="me">
      <h2>Sobre mí</h2>

      <p>Nombre: {nombre} {apellido}</p>
      <p>Edad: {edad}</p>
      <p>Carrera: {carrera}</p>
      <p>Ciudad: {ciudad}</p>

      <h3>Intereses</h3>

      <ul>
        {intereses.map((interes) => (
          <li key={interes}>{interes}</li>
        ))}
      </ul>

      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>

      {mostrarMas && <p>{infoExtra}</p>}
    </section>
  );
}

export default Me;
