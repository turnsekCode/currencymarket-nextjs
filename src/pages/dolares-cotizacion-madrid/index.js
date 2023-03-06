import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import PopupGoogle from "../../componentes/popup google/PopupGoogle";
import Mapa from "../../componentes/mapa_madrid/Mapa";
import Contenedor from "../../componentes/contenedor/Contenedor";
import ConversorGoogle from "../../componentes/conversor_google/ConversorGoogle";

export default function Home({
  tirso,
  alcala,
  bernardo,
  caminos,
  tetuan,
  delicias,
}) {
  const [open, setOpen] = useState(null);
  return (
    <>
      <Head>
        <title>Cambia euros por dólares en Madrid - CurrencyMarket</title>
        <meta
          name="description"
          content="En nuestras casas de cambio en Madrid puedes comprar dólares a precio de cotización. Sin comisiones. Totalmente gratis. Recibe tus dólares en efectivo al momento."
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
          tirso={tirso}
          alcala={alcala}
          bernardo={bernardo}
          caminos={caminos}
          tetuan={tetuan}
          delicias={delicias}
        />
      </Contenedor>
      <PopupGoogle open={open} setOpen={setOpen} />
    </>
  );
}
export async function getStaticProps() {
  const ciudad2 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-tirsodemolina.txt`
  );
  const tirso = await ciudad2.json();

  const ciudad3 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-alcala.txt`
  );
  const alcala = await ciudad3.json();

  const ciudad4 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-sanbernardo.txt`
  );
  const bernardo = await ciudad4.json();

  const ciudad5 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-cuatrocaminos.txt`
  );
  const caminos = await ciudad5.json();

  const ciudad6 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-tetuan.txt`
  );
  const tetuan = await ciudad6.json();

  const ciudad7 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-delicias.txt`
  );
  const delicias = await ciudad7.json();

  // Pass data to the page via props
  return {
    props: { tirso, alcala, bernardo, caminos, tetuan, delicias },
    revalidate: 1,
  };
}
