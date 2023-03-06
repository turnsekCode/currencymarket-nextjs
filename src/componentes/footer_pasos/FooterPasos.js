import React from "react";
import styles from "./footerPasos.module.css";
import Rectangle46 from "../../../public/assets/Rectangle 46.png";
import Image from "next/image";

const FooterPasos = () => {
  return (
    <section className={styles.contenedor_section_footer}>
      <h2 className={styles.titulo_superior_footer}>
        Cambia Euros a Dólares en <span>3 pasos:</span>
      </h2>
      <div className={styles.contenedor_cajas_pasos}>
        <div className={styles.caja_pasos}>
          <h3>1</h3>
          <h4>LLAMA</h4>
          <p>a tu tienda más cercana</p>
        </div>
        <div className={styles.caja_pasos}>
          <h3>2</h3>
          <h4>RESERVA</h4>
          <p>la cantidad de dólares que necesitas</p>
        </div>
        <div className={styles.caja_pasos}>
          <h3>3</h3>
          <h4>RECOGE</h4>
          <p>tus dólares</p>
        </div>
      </div>
      <h2 className={styles.titulo_inferior_footer}>
        DE FORMA <span>RÁPIDA Y SEGURA</span>
      </h2>
      <Image
        className={styles.barra_inferior}
        src={Rectangle46}
        alt="barra"
        width="0"
        height="0"
      />
    </section>
  );
};

export default FooterPasos;
