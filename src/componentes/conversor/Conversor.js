import { useState, useEffect, useRef } from "react";
import styles from "./conversor.module.css";

const Conversor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTMm1jsqMJYy06TXURw9EVyFqalRHk_m0vTJmoGjBd2ss0YIG0mi8oifYw2CvMsl5R4K0rHrJ5CsI2x/pub?gid=0&single=true&output=csv"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  //const [valorMoneda, setValorMoneda] = useState("0");
  const refInput1 = useRef();
  const refInput2 = useRef();
  const replace = data.toString().replace(",", ".");
  const calcularCambio = (event) => {
    const { id, value: valor } = event.target;
    let cambio = 0;

    if (id === "input-izquierdo") {
      // si cambia el input izquierdo, calcula el derecho
      cambio = valor * replace;
      refInput2.current.value = cambio.toFixed(2);
    } else {
      // si cambia el input derecho, calcula el izquierdo
      cambio = valor / replace;
      refInput1.current.value = cambio.toFixed(2);
    }
  };
  return (
    <>
      <div className={styles.contenedor_conversor_divisa}>
        <h4>
          Conversor <span>de divisa</span>
        </h4>
      </div>
      <div className={styles.contenedor_conversor_inferior}>
        <div className={styles.contenedor_input}>
          <div className={styles.bloque_der_moneda_inferior}>
            <p>EUR</p>
          </div>
          <div className={styles.bloque_izq_moneda}>
            <input
              id="input-derecho"
              ref={refInput2}
              type="text"
              pattern="[0-9]*"
              placeholder="Cantidad"
              inputMode="numeric"
              defaultValue=""
              onChange={calcularCambio}
            />{" "}
            €<p className={styles.info_precio}>Sin comisiones</p>
          </div>
        </div>
      </div>
      <div className={styles.contenedor_input}>
        <div className={styles.bloque_der_moneda}>
          <p>USA</p>
        </div>
        <div className={styles.bloque_izq_moneda}>
          <input
            id="input-izquierdo"
            ref={refInput1}
            type="text"
            className={styles.input_dolar}
            pattern="[0-9]*"
            placeholder="0.00"
            inputMode="numeric"
            onChange={calcularCambio}
            readOnly
          />
          $<p className={styles.info_precio}>1$ = {replace / 1} €</p>
        </div>
      </div>
    </>
  );
};

export default Conversor;
