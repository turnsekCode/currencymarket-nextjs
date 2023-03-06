import React from "react";
import styles from "./header.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
import LogoQuickgold from "../../../public/assets/logo_quickgold.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.contenedor_header}>
      <div className={styles.contenedor_padding}>
        <div className={styles.contenedor_logos}>
          <Link href="/">
            <Image
              src={LogoQuickgold}
              alt="Logo Quickgold"
              width={170}
              height={33}
            />
          </Link>
          <Link href="/" className={styles.logo}>
            <span>CURRENCY</span>MARKET®
          </Link>
        </div>

        <div className={styles.contenedor_llamar}>
          <a href="tel:672616533">
            <LocalPhoneIcon />
            <h3>
              LLAMAR <span>A CURRENCY MARKET</span>
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
