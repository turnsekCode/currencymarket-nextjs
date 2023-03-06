import Header from "../header/Header";
import BanderasSuperior from "../banderas_superior/BanderasSuperior";
import Footer from "../footer/Footer";
import BanderasInferior from "../banderas_inferior/BanderasInferior";
import BotonLlamarFijo from "../boton_llamar_fijo/BotonLlamarFijo";
import ScrollToTop from "react-scroll-to-top";
import styles from "../../styles/Home.module.css";

export default function Contenedor({ children }) {
  return (
    <>
      <Header />
      <BanderasSuperior />
      <main className={styles.layout}>{children}</main>
      <ScrollToTop smooth />
      <Footer />
      <BanderasInferior />
      <BotonLlamarFijo />
    </>
  );
}
