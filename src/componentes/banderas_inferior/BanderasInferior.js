import React from "react";
import styles from "./banderasInferior.module.css";
import BanderaIzq from "../../../public/assets/bandera_footer_izq.png";
import BanderaDer from "../../../public/assets/bandera_footer_der.png";
import Image from "next/image";

const BanderasInferior = () => {
  return (
    <div className={styles.contenedor_banderas_inferior}>
      <Image
        className={`${styles.banderas_inferior} ${styles.izq}`}
        src={BanderaIzq}
        alt="bandera"
      />
      <Image
        className={styles.banderas_inferior}
        src={BanderaDer}
        alt="bandera"
      />
    </div>
  );
};

export default BanderasInferior;
