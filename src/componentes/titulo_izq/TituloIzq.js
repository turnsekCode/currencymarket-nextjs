import React from "react";
import styles from "./TituloIzq.module.css";

const TituloIzq = () => {
  return (
    <div className={styles.contenedor_titulos}>
      <h2>Cambia Euros a</h2>
      <h1>DÓLARES</h1>
      <h2>
        A SU PRECIO REAL
        <br />
        <span className={styles.titulo_span}>
          Sin comisiones
          <br />
          Sin intereses
        </span>
      </h2>
    </div>
  );
};

export default TituloIzq;
