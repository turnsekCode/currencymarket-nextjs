import React, { useState, useRef } from "react";
import styles from "./mapa.module.css";
import "animate.css";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import Accordion2 from "../accordion/Accordion2";
import { Link } from "react-scroll";

const Mapa = ({
  tirso,
  alcala,
  bernardo,
  caminos,
  tetuan,
  delicias,
  santantoni,
}) => {
  const [showPopup, setShowPopup] = useState(null);

  const [viewState, setViewState] = useState({
    longitude: -0.8003027,
    latitude: 40.9339916,
    zoom: 5,
    cooperativeGestures: true,
  });

  const toggleTab = (index) => {
    setShowPopup(index);
  };
  const mapRef = useRef();

  const onSelectSantantoni = () => {
    mapRef.current?.flyTo({
      center: [2.1629099, 41.3921409],
      duration: 1500,
      zoom: 12,
    });
  };
  const onSelectDelicias = () => {
    mapRef.current?.flyTo({
      center: [-3.6951906, 40.4211045],
      duration: 1500,
      zoom: 11,
    });
  };
  const onSelectTirso = () => {
    mapRef.current?.flyTo({
      center: [-3.705431599999997, 40.4221929],
      duration: 1500,
      zoom: 11,
    });
  };
  const onSelectTetuan = () => {
    mapRef.current?.flyTo({
      center: [-3.698444600000016, 40.4703827],
      duration: 1500,
      zoom: 11,
    });
  };
  const onSelectAlcala = () => {
    mapRef.current?.flyTo({
      center: [-3.665292000000022, 40.439553],
      duration: 1500,
      zoom: 11,
    });
  };
  const onSelectBernardo = () => {
    mapRef.current?.flyTo({
      center: [-3.7073656999999685, 40.4332377],
      duration: 1500,
      zoom: 11,
    });
  };
  const onSelectCaminos = () => {
    mapRef.current?.flyTo({
      center: [-3.7039902999999867, 40.4588839],
      duration: 1500,
      zoom: 11,
    });
  };
  const resetMap = () => {
    mapRef.current?.flyTo({
      center: [-0.8003027, 40.9339916],
      duration: 1500,
      zoom: 5,
    });
  };
  return (
    <section>
      <h2 className={styles.titulo_mapa}>
        <span>¿Dónde cambiar euros a dólares?</span> Casas de Cambio en
        Barcelona y Madrid
      </h2>
      <div id="contendor_mapa" className={styles.contenedor_mapa}>
        <Map
          ref={mapRef}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          className={styles.mapa}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPA}
        >
          <FullscreenControl /> <GeolocateControl /> <NavigationControl />
          <button
            className={styles.reset_map}
            onClick={() => {
              resetMap();
              setShowPopup(false);
            }}
          >
            Reset Map
          </button>
          <Marker
            longitude={2.1629099}
            latitude={41.3821409}
            onClick={() => {
              toggleTab(7);
              onSelectSantantoni();
            }}
          ></Marker>
          {showPopup === 7 && (
            <Popup
              style={{ top: -25 }}
              longitude={2.1629099}
              className={styles.popup}
              latitude={41.3821409}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className={styles.contenedor_popuop}>
                <p className={styles.nombre_ciudad_popup}>Sant Antoni</p>
                <p className={styles.nombre_ciudad_popup}>Contacto:</p>
                <a
                  href="http://bit.ly/3g7uDF2"
                  rel="noreferrer"
                  target="_blank"
                  className={styles.direccion_popup}
                >
                  {santantoni.result?.formatted_address}
                </a>
                <br />
                <a
                  href="http://bit.ly/3g7uDF2"
                  rel="noreferrer"
                  ƒ
                  className={styles.boton_como_llegar}
                  target="_blank"
                >
                  Cómo llegar
                </a>
                <br></br>
                <a
                  href={`tel:${santantoni.result?.international_phone_number}`}
                  className={styles.telefono_popup}
                >
                  <span>Llamar: </span>
                  {santantoni.result?.international_phone_number}
                </a>
                <span className={styles.boton_ver_mas}>
                  <Link
                    to="delicias"
                    smooth={true}
                    offset={-110}
                    spy={true}
                    duration={500}
                  >
                    Ver Más
                  </Link>
                </span>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.6951906}
            latitude={40.4011045}
            onClick={() => {
              toggleTab(1);
              onSelectDelicias();
            }}
          ></Marker>
          {showPopup === 1 && (
            <Popup
              style={{ top: -25 }}
              longitude={-3.6951906}
              className="{styles.popup}"
              latitude={40.4011045}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className={styles.contenedor_popuop}>
                <p className={styles.nombre_ciudad_popup}>Delicias</p>
                <p className={styles.nombre_ciudad_popup}>Contacto:</p>
                <a
                  href="http://bit.ly/3X3XYRj"
                  rel="noreferrer"
                  target="_blank"
                  className={styles.direccion_popup}
                >
                  {delicias.result?.formatted_address}
                </a>
                <br />
                <a
                  href="http://bit.ly/3X3XYRj"
                  rel="noreferrer"
                  ƒ
                  className={styles.boton_como_llegar}
                >
                  Cómo llegar
                </a>
                <br></br>
                <a
                  href={`tel:${delicias.result?.international_phone_number}`}
                  className={styles.telefono_popup}
                >
                  <span>Llamar: </span>
                  {delicias.result?.international_phone_number}
                </a>
                <span className={styles.boton_ver_mas}>
                  <Link
                    to="delicias"
                    smooth={true}
                    offset={-110}
                    spy={true}
                    duration={500}
                  >
                    Ver Más
                  </Link>
                </span>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.7073656999999685}
            latitude={40.4232377}
            onClick={() => {
              toggleTab(2);
              onSelectBernardo();
            }}
          ></Marker>
          {showPopup === 2 && (
            <Popup
              style={{ top: -35 }}
              longitude={-3.7073656999999685}
              latitude={40.4232377}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className={styles.contenedor_popuop}>
                <p className={styles.nombre_ciudad_popup}>San Bernardo</p>
                <p className={styles.nombre_ciudad_popup}>Contacto:</p>
                <a
                  href="http://bit.ly/3V13uCi"
                  rel="noreferrer"
                  target="_blank"
                  className={styles.direccion_popup}
                >
                  {bernardo.result?.formatted_address}
                </a>
                <br />
                <a
                  href="http://bit.ly/3V13uCi"
                  rel="noreferrer"
                  className={styles.boton_como_llegar}
                >
                  Cómo llegar
                </a>
                <br></br>
                <a
                  href={`tel:${bernardo.result?.international_phone_number}`}
                  className={styles.telefono_popup}
                >
                  <span>Llamar: </span>
                  {bernardo.result?.international_phone_number}
                </a>
                <span className={styles.boton_ver_mas}>
                  <Link
                    to="bernardo"
                    smooth={true}
                    offset={-110}
                    spy={true}
                    duration={500}
                  >
                    Ver Más
                  </Link>
                </span>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.7039902999999867}
            latitude={40.4488839}
            onClick={() => {
              toggleTab(3);
              onSelectCaminos();
            }}
          ></Marker>
          {showPopup === 3 && (
            <Popup
              style={{ top: -35 }}
              longitude={-3.7039902999999867}
              latitude={40.4488839}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className={styles.contenedor_popuop}>
                <p className={styles.nombre_ciudad_popup}>Cuatro Caminos</p>
                <p className={styles.nombre_ciudad_popup}>Contacto:</p>
                <a
                  href="http://bit.ly/3EFq1iI"
                  rel="noreferrer"
                  target="_blank"
                  className={styles.direccion_popup}
                >
                  {caminos.result?.formatted_address}
                </a>
                <br />
                <a
                  href="http://bit.ly/3EFq1iI"
                  rel="noreferrer"
                  className={styles.boton_como_llegar}
                >
                  Cómo llegar
                </a>
                <br></br>
                <a
                  href={`tel:${caminos.result?.international_phone_number}`}
                  className={styles.telefono_popup}
                >
                  <span>Llamar: </span>
                  {caminos.result?.international_phone_number}
                </a>
                <span className={styles.boton_ver_mas}>
                  <Link
                    to="caminos"
                    smooth={true}
                    offset={-110}
                    spy={true}
                    duration={500}
                  >
                    Ver Más
                  </Link>
                </span>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.705431599999997}
            latitude={40.4121929}
            onClick={() => {
              toggleTab(4);
              onSelectTirso();
            }}
          ></Marker>
          {showPopup === 4 && (
            <Popup
              style={{ top: -35 }}
              longitude={-3.705431599999997}
              latitude={40.4121929}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className={styles.contenedor_popuop}>
                <p className={styles.nombre_ciudad_popup}>Tirso de molina</p>
                <p className={styles.nombre_ciudad_popup}>Contacto:</p>
                <a
                  href="http://bit.ly/3tFiXwm"
                  rel="noreferrer"
                  target="_blank"
                  className={styles.direccion_popup}
                >
                  {tirso.result?.formatted_address}
                </a>
                <br />
                <a
                  href="http://bit.ly/3tFiXwm"
                  rel="noreferrer"
                  className={styles.boton_como_llegar}
                >
                  Cómo llegar
                </a>
                <br></br>
                <a
                  href={`tel:${tirso.result?.international_phone_number}`}
                  className={styles.telefono_popup}
                >
                  <span>Llamar: </span>
                  {tirso.result?.international_phone_number}
                </a>
                <span className={styles.boton_ver_mas}>
                  <Link
                    to="tirso"
                    smooth={true}
                    offset={-110}
                    spy={true}
                    duration={500}
                  >
                    Ver Más
                  </Link>
                </span>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.698444600000016}
            latitude={40.4603827}
            onClick={() => {
              toggleTab(5);
              onSelectTetuan();
            }}
          ></Marker>
          {showPopup === 5 && (
            <Popup
              style={{ top: -35 }}
              longitude={-3.698444600000016}
              latitude={40.4603827}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className={styles.contenedor_popuop}>
                <p className={styles.nombre_ciudad_popup}>Tetuán</p>
                <p className={styles.nombre_ciudad_popup}>Contacto:</p>
                <a
                  href="http://bit.ly/3tFiXwm"
                  rel="noreferrer"
                  target="_blank"
                  className={styles.direccion_popup}
                >
                  {tetuan.result?.formatted_address}
                </a>
                <br />
                <a
                  href="http://bit.ly/3tFiXwm"
                  rel="noreferrer"
                  className={styles.boton_como_llegar}
                >
                  Cómo llegar
                </a>
                <br></br>
                <a
                  href={`tel:${tetuan.result?.international_phone_number}`}
                  className={styles.telefono_popup}
                >
                  <span>Llamar: </span>
                  {tetuan.result?.international_phone_number}
                </a>
                <span className={styles.boton_ver_mas}>
                  <Link
                    to="tetuan"
                    smooth={true}
                    offset={-110}
                    spy={true}
                    duration={500}
                  >
                    Ver Más
                  </Link>
                </span>
              </div>
            </Popup>
          )}
          <Marker
            longitude={-3.665292000000022}
            latitude={40.429553}
            onClick={() => {
              toggleTab(6);
              onSelectAlcala();
            }}
          ></Marker>
          {showPopup === 6 && (
            <Popup
              style={{ top: -35 }}
              longitude={-3.665292000000022}
              latitude={40.429553}
              closeOnClick={false}
              anchor={null}
              onClose={() => setShowPopup(false)}
            >
              <div className={styles.contenedor_popuop}>
                <p className={styles.nombre_ciudad_popup}>Alcala-Ventas</p>
                <p className={styles.nombre_ciudad_popup}>Contacto:</p>
                <a
                  href="http://bit.ly/3THXcpZ"
                  rel="noreferrer"
                  target="_blank"
                  className={styles.direccion_popup}
                >
                  {alcala.result?.formatted_address}
                </a>
                <br />
                <a
                  href="http://bit.ly/3THXcpZ"
                  rel="noreferrer"
                  className={styles.boton_como_llegar}
                >
                  Cómo llegar
                </a>
                <br></br>
                <a
                  href={`tel:${alcala.result?.international_phone_number}`}
                  className={styles.telefono_popup}
                >
                  <span>Llamar: </span>
                  {alcala.result?.international_phone_number}
                </a>
                <span className={styles.boton_ver_mas}>
                  <Link
                    to="alcala"
                    smooth={true}
                    offset={-110}
                    spy={true}
                    duration={500}
                  >
                    Ver Más
                  </Link>
                </span>
              </div>
            </Popup>
          )}
        </Map>
      </div>
      <div className={styles.contenedor_info_mapa}>
        <h2>
          Encuentra <span>tu tienda más cercana</span>
        </h2>
      </div>
      <Accordion2
        onSelectSantantoni={onSelectSantantoni}
        onSelectAlcala={onSelectAlcala}
        onSelectTetuan={onSelectTetuan}
        onSelectCaminos={onSelectCaminos}
        onSelectBernardo={onSelectBernardo}
        onSelectTirso={onSelectTirso}
        onSelectDelicias={onSelectDelicias}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setViewState={setViewState}
        santantoni={santantoni}
        tirso={tirso}
        alcala={alcala}
        bernardo={bernardo}
        caminos={caminos}
        tetuan={tetuan}
        delicias={delicias}
      />
    </section>
  );
};

export default Mapa;
