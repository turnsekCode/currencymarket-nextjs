import React from "react";
import FooterPasos from "../footer_pasos/FooterPasos";
import SeccionFooter from "../seccion_footer/SeccionFooter";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.contenedor_footer}>
      <FooterPasos />
      <SeccionFooter />
    </footer>
  );
};

export default Footer;
