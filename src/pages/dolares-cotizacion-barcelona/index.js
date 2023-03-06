import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import PopupGoogle from "../../componentes/popup google/PopupGoogle";
import Mapa from "../../componentes/mapa_barcelona/Mapa";
import Contenedor from "../../componentes/contenedor/Contenedor";
import ConversorGoogle from "../../componentes/conversor_google/ConversorGoogle";

export default function Home({ santantoni }) {
  const [open, setOpen] = useState(null);
  return (
    <>
      <Head>
        <title>Cambia euros por dólares en Barcelona - CurrencyMarket</title>
        <meta
          name="description"
          content="En nuestras casas de cambio en Barcelona puedes comprar dólares a precio de cotización. Sin comisiones. Totalmente gratis. Recibe tus dólares en efectivo al momento."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Contenedor>
        <section className={styles.contenedor_conversor}>
          {/* <div className="bloque_izq">
            <TituloIzq />
            <Conversor />
  </div>
          <div className="bloque_der">
            <img src={ImagenChicoBandera} alt="" />
          </div>*/}
        </section>
        {/* <div className="separador_section">
          <img src={Rectalgle34} alt="" />
        </div>*/}
        <ConversorGoogle open={open} setOpen={setOpen} />
        <Mapa
          santantoni={santantoni}
          //tirso={tirso}
          //alcala={alcala}
          //bernardo={bernardo}
          //caminos={caminos}
          //tetuan={tetuan}
          //delicias={delicias}
        />
      </Contenedor>
      <PopupGoogle open={open} setOpen={setOpen} />
    </>
  );
}
export async function getStaticProps() {
  const ciudad1 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-santantoni.txt`
  );
  const santantoni = await ciudad1.json();

  // Pass data to the page via props
  return {
    props: { santantoni },
    revalidate: 1,
  };
}
