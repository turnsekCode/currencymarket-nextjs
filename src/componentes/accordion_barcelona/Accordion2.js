import React from "react";
import GoogleLogo from "../../../public/assets/logo-Google_1.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./accordion2.module.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "react-scroll";
import Image from "next/image";

const Accordion2 = ({
  showPopup,
  setShowPopup,
  //onSelectAlcala,
  //onSelectDelicias,
  //onSelectTetuan,
  //onSelectBernardo,
  //onSelectTirso,
  //onSelectCaminos,
  onSelectSantantoni,
  //tirso,
  //alcala,
  //bernardo,
  //caminos,
  //tetuan,
  //delicias,
  santantoni,
}) => {
  const horarios = santantoni?.result?.opening_hours?.weekday_text;
  const listaHorarios = horarios?.map((number, i) => (
    <li key={i} className={`dia_${i++}`}>
      {number}
    </li>
  ));
  const resenas = santantoni?.result?.rating;
  if (resenas > 4.7) {
    var img_valoracion = 69;
  } else if (resenas < 4.8 && resenas < 4.3) {
    var img_valoracion = 62;
  } else if (resenas < 4.4 && resenas < 3.7) {
    var img_valoracion = 55;
  } else if (resenas < 3.8 && resenas < 3.3) {
    var img_valoracion = 48;
  } else if (resenas < 3.4 && resenas < 2.7) {
    var img_valoracion = 41;
  } else if (resenas < 2.8 && resenas < 2.3) {
    var img_valoracion = 34;
  } else if (resenas < 2.4 && resenas < 1.7) {
    var img_valoracion = 27;
  } else if (resenas < 1.8 && resenas < 1.3) {
    var img_valoracion = 20;
  } else if (resenas < 1.4 && resenas < 0.7) {
    var img_valoracion = 13;
  }
  const toggleTab = (index) => {
    setShowPopup(index);
  };

  return (
    <>
      <div
        id="delicias"
        className={
          showPopup === 7
            ? `${styles.contenedor_titulo_accordion} ${styles.active}`
            : `${styles.contenedor_titulo_accordion}`
        }
      >
        <span>
          <ArrowForwardIosIcon />
        </span>
        <Link
          to="contendor_mapa"
          smooth={true}
          offset={-110}
          spy={true}
          duration={500}
        >
          <h2
            onClick={() => {
              toggleTab(7);
              onSelectSantantoni();
            }}
            className={styles.nombre_tienda}
          >
            {santantoni?.result?.name}
          </h2>
        </Link>
      </div>

      <div
        className={
          showPopup === 7
            ? `${styles.contenedor_accordion2_active}`
            : `${styles.contenedor_accordion2}`
        }
      >
        <div
          className={
            showPopup === 7
              ? `${styles.cabecera_estrellas_active}`
              : `${styles.cabecera_estrellas}`
          }
        >
          <span
            className={styles.boton_cierre}
            onClick={() => {
              setShowPopup(false);
            }}
          >
            <HighlightOffIcon />
          </span>
          <div className={styles.contenedor_google_accordion}>
            <div className={styles.logo_google}>
              <Image
                src={GoogleLogo}
                alt="Logo google"
                width={106}
                height={60}
              />
            </div>
            <div className={styles.contenedor_resenas}>
              <span>{santantoni?.result?.rating}</span>
              <span className={styles.img_stars}>
                <span
                  style={{ width: img_valoracion }}
                  className={styles.imgValoracion}
                ></span>
              </span>
              <div className={styles.numero_reviews}>
                <span>{santantoni?.result?.user_ratings_total}</span> reseñas de
                Google
              </div>
            </div>
          </div>
          <div>
            <p className={styles.contacto_accordion}>Contacto:</p>
            <a
              href="http://bit.ly/3g7uDF2"
              rel="noreferrer"
              target="_blank"
              className={styles.direccion_accordion}
            >
              {santantoni?.result?.formatted_address}
            </a>
            <br></br>
            <a
              href={`tel:${santantoni?.result?.international_phone_number}`}
              className={styles.telefono_accordion}
            >
              {santantoni?.result?.international_phone_number}
            </a>
          </div>
          <div className={styles.contenedor_horarios}>
            <p className={styles.contacto_accordion}>Horarios:</p>{" "}
            {listaHorarios}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion2;
