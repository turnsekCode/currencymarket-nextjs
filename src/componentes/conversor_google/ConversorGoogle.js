import React from "react";
import styles from "./conversorGoogle.module.css";
import LogoGoogle from "../../../public/assets/logo-Google_1.png";
import MapaUsa from "../../../public/assets/mapa_usa.png";
import Conversor from "../conversor/Conversor";
import Rectalgle34 from "../../../public/assets/Rectangle 34.png";
import Image from "next/image";

const ConversorGoogle = ({ open, setOpen }) => {
  const popupOpen = () => {
    setOpen(true);
  };
  return (
    <section>
      <div className={styles.contenedor_precio_google}>
        <div className={styles.contenedor_conversor}>
          <h1 className={styles.titulo_precio}>
            Te damos los <span>dólares </span>al precio que marque
            <Image
              className={styles.logo_google}
              src={LogoGoogle}
              alt="logo google"
            />
          </h1>
          <span className={styles.boton_abrir_popup} onClick={popupOpen}>
            Compruébalo tú mismo
          </span>

          <div>
            <Conversor />
          </div>
        </div>
        <div className={styles.contenedor_mapa_usa}>
          <Image
            src={MapaUsa}
            alt="mapa usa"
            width={388}
            height={270}
            priority
          />
        </div>
      </div>
      <div className={styles.contenedor_texto_inferior}>
        <div className={styles.separador_section}>
          <Image src={Rectalgle34} alt="" />
        </div>
      </div>
      {/*<div className={styles.contenedor_parrafo}>
        <p>
          <strong>¿Dónde está el truco?</strong> No hay truco. Simplemente nos
          sobran dólares.
        </p>
  </div>*/}
    </section>
  );
};

export default ConversorGoogle;
