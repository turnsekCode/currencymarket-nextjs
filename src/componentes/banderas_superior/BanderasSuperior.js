import React from "react";
import styles from "./banderasSuperior.module.css";
import BanderaSuperiorIzq from "../../../public/assets/esquina-sup-izquierda.png";
import BanderaSuperiorDer from "../../../public/assets/esquina-sup-derecha.png";
import Image from "next/image";

const BanderasSuperior = () => {
  return (
    <div className={styles.contenedor_banderas}>
      <Image
        className={styles.imagen_bandera_izq}
        src={BanderaSuperiorIzq}
        alt="banderas"
      />
      <Image
        className={styles.imagen_bandera_der}
        src={BanderaSuperiorDer}
        alt="banderas"
      />
    </div>
  );
};

export default BanderasSuperior;
