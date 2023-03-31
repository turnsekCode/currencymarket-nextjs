import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import styles from "./botonLlamarFijo.module.css";

const BotonLlamarFijo = () => {
  return (
    <div className={styles.contenedor_llamar_fijo}>
      <a href="tel:672616533">
        <LocalPhoneIcon />
        <h3>
          LLAMAR <span>AL 672 61 65 33</span>
        </h3>
      </a>
    </div>
  );
};

export default BotonLlamarFijo;
